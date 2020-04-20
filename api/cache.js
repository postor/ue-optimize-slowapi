const cacheManager = require('cache-manager')
module.exports = cacheManager.caching({ store: 'memory', ttl: 60 * 60, promiseDependency: Promise })
