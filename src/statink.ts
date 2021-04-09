import { $unixtime } from '@transform-ts/contrib'
import $, { isError, Transformer } from 'transform-ts'

const $rank = $.literal(
  'C-',
  'C',
  'C+',
  'B-',
  'B',
  'B+',
  'A-',
  'A',
  'A+',
  'S',
  'S+0',
  'S+1',
  'S+2',
  'S+3',
  'S+4',
  'S+5',
  'S+6',
  'S+7',
  'S+8',
  'S+9',
)
const $rankX = $.literal('X')

const $udemae = $.either(
  $.obj({ rank_current: $rank, rank_peak: $rank }),
  $.obj({
    rank_current: $rankX,
    rank_peak: $rankX,
    x_power_current: $.number,
    x_power_peak: $.number,
  }),
)

const $stats = $.obj({
  updated_at: $.obj({ time: $.number.compose($unixtime) }),
  entire: $.obj({
    battles: $.number,
    death_avg: $.number,
    death_per_min: $.number,
    death_total: $.number,
    kill_avg: $.number,
    kill_per_min: $.number,
    kill_ratio: $.number,
    kill_total: $.number,
    win_pct: $.number,
  }),
  gachi: $.obj({
    rules: $.obj({
      area: $udemae,
      asari: $udemae,
      hoko: $udemae,
      yagura: $udemae,
    }),
  }),
})

export type UserStats = Transformer.TypeOf<typeof $stats>

export async function getUserStats({
  screenName,
}: {
  screenName: string
}): Promise<UserStats> {
  const res = await fetch(
    `https://stat.ink/api/v2/user-stats?screen_name=${screenName}`,
  )

  if (!res.ok) throw new Error('user not found')

  const stats = $stats.transform(await res.json())

  if (isError(stats)) throw new Error('user has not any uploads yet')

  return stats.value
}
