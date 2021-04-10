import Nano from 'nano-jsx'
import { IkaPri, IkaPriProps } from './components/ikapri'

export const render = (props: IkaPriProps) =>
  Nano.renderSSR(<IkaPri {...props} />)
