/*
 * @Description:
 * @Author: dingxuejin
 * @Date: 2021-03-31 21:49:12
 * @LastEditTime: 2021-03-31 21:57:46
 * @LastEditors: dingxuejin
 */
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/simpleCase/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}