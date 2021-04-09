import { getUserStats, UserStats } from './statink'
import { renderWidget } from './widget'

export async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url)

  const screenName = url.searchParams.get('screenName')
  if (!screenName) {
    return new Response(
      JSON.stringify({ error: 'query "screenName" not found' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } },
    )
  }

  let stats: UserStats
  try {
    stats = await getUserStats({ screenName })
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const widget = renderWidget({ screenName, stats })

  return new Response(widget, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'max-age=3600, stale-while-revalidate=360',
      'Last-Modified': stats.updated_at.time.toUTCString(),
    },
  })
}
