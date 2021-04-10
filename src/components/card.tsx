import Nano, { FC } from 'nano-jsx'
import { BaseProps } from '.'

export type CardProps = Readonly<{ height: number; width: number } & BaseProps>

export const Card: FC<CardProps> = ({ x, y, width, height }) => (
  <g>
    <rect fill="gray" height={height} rx="5" ry="5" width={width} x={x} y={y} />
    <rect
      fill="white"
      height={height - 2}
      rx="5"
      ry="5"
      width={width - 2}
      x={x + 1}
      y={y + 1}
    />
  </g>
)
