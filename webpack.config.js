// @ts-check
const { join } = require('path')

/**
 * @type{ import('webpack').Configuration }
 */
module.exports = {
  output: {
    filename: `worker.js`,
    path: join(__dirname, 'dist'),
  },
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
}
