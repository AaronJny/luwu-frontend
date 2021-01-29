/*
 * @Author       : AaronJny
 * @LastEditTime : 2021-01-27
 * @FilePath     : /luwu-frontend/config/dev.env.js
 * @Desc         : 
 */
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
