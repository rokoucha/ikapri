# IkaPri

[stat.ink](https://stat.ink/) からユーザーのスタッツを取得して SVG にするアプリケーション

## How to use

1. `https://ikapri.rokoucha.workers.dev/{login_name}` で画像が生成されます
2. うまく画像として展開されない場合は `#.svg` と後ろに付けると展開されるかもしれません ( `https://ikapri.rokoucha.workers.dev/{login_name}#.svg` )

## How to build/dev

1. `git clone https://github.com/rokoucha/ikapri`
2. `cd ikapri`
3. `yarn`
4. build: `yarn run build`, dev: `yarn run dev`

## Built on

- [Cloudflare Workers](https://workers.cloudflare.com/)
- [Nano JSX](https://nanojsx.github.io/)

## License

Copyright (c) 2021 Rokoucha

Released under the MIT license, see LICENSE.
