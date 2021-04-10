import Nano, { FC } from 'nano-jsx'
import type { BaseProps } from '.'

export type IconProps = Readonly<{ size: number } & BaseProps>

export const Icon: FC<IconProps> = ({ x, y, size }) => (
  <g>
    <rect rx="2" ry="2" x={x} y={y} width={size} height={size} fill="gray" />
    <text font-size="38" text-anchor="middle" x="42" y="52">
      🦑
    </text>
  </g>
)
