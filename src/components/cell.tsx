import Nano, { FC } from 'nano-jsx'
import { anchor, BaseProps } from '.'

export type CellText = {
  anchor?: anchor
  colour?: string
  size?: number
  text: string | number
}

export type CellProps = Readonly<
  {
    label: CellText
    margin?: number
    value: CellText
  } & BaseProps
>

export const Cell: FC<CellProps> = ({ label, margin, value, x, y }) => {
  const l = {
    'font-size': label.size ?? 16,
    'text-anchor': label.anchor ?? 'start',
    fill: label.colour ?? 'gray',
  }
  const v = {
    'font-size': value.size ?? 24,
    'text-anchor': value.anchor ?? 'start',
    fill: value.colour ?? 'black',
  }

  const vx = v['text-anchor'] === 'end' ? x + v['font-size'] : x
  const vdx = v['text-anchor'] === 'middle' ? v['font-size'] / 1.5 : 0

  return (
    <text x={x} y={y}>
      <tspan {...l}>{label.text}</tspan>
      <tspan {...v} dy={margin ?? 30} x={vx} dx={vdx}>
        {value.text}
      </tspan>
    </text>
  )
}
