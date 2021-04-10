import Nano from 'nano-jsx'
import { Widget, WidgetProps } from './components/widget'

export const render = (props: WidgetProps) =>
  Nano.renderSSR(<Widget {...props} />)
