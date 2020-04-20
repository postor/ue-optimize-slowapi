const { Router } = require('express')
const optimized = require('./optimized')
const noneOptimize = require('./no-optimize')

let route = new Router()

route.use('/optimized', optimized)
route.use('/no-optimize', noneOptimize)

module.exports = route