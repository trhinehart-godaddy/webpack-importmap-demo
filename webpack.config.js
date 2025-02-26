import fs from 'node:fs';

import * as importMaps from '@import-maps/resolve';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const importmap = importMaps.parseFromString(fs.readFileSync('./browser.importmap', 'utf-8'), new URL('http://127.0.0.1:8080/'));

export default {
  mode: 'none',
  output: {
    filename: 'main.js',
    clean: true
  },
  experiments: {
    outputModule: true
  },
  module: {
    parser: {
      javascript: {
        importMeta: false
      }
    }
  },
  externals: Object.fromEntries(Object.keys(importmap.imports || {}).map((key) => [key, `module ${ key }`])),
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      scriptLoading: 'module',
      templateParameters: {
        importmap: JSON.stringify(importmap, null, 2)
      }
    })
  ]
};