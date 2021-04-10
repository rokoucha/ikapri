// @ts-check
const { join } = require('path')

/**
 * @type{ import('webpack').Configuration }
 */
module.exports = {
  mode: 'production',
  module: {
    rules: [
      {
        loader: 'ts-loader',
        options: { transpileOnly: true },
        test: /\.tsx?$/,
      },
    ],
  },
  optimization: { usedExports: true },
  output: { filename: 'worker.js', path: join(__dirname, 'dist') },
  resolve: { extensions: ['.ts', '.tsx', '.js'], plugins: [] },
}
