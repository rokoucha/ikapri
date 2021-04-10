import Nano, { FC } from 'nano-jsx'
import { anchor, BaseProps } from '.'
import { Cell } from './cell'

const sum = (acc: number, cur: number) => acc + cur

export type TableProps = Readonly<
  {
    cells: { label: string | number; value: string | number }[][]
    columns: number[]
    label?: { size?: number; anchor?: anchor; colour?: string }
    lines: number[]
    value?: { size?: number; anchor?: anchor; colour?: string }
  } & BaseProps
>

export const Table: FC<TableProps> = ({
  cells,
  columns,
  label,
  lines,
  value,
  x,
  y,
}) => (
  <g>
    {cells.flatMap((cell, line) =>
      cell.flatMap((c, column) => (
        <Cell
          label={{ text: c.label, ...label }}
          value={{ text: c.value, ...value }}
          x={columns.slice(0, column).reduce(sum, x)}
          y={lines.slice(0, line).reduce(sum, y)}
        />
      )),
    )}
  </g>
)
