const { Router } = require('express')
const cache = require('./cache')
const task1 = require('./tasks/task1')
const task2 = require('./tasks/task2')
const task3 = require('./tasks/task3')
const task4 = require('./tasks/task4')
const task5 = require('./tasks/task5')

let route = new Router(), id = 1

route.post('/do-task', (req, res) => {
  (async (id) => {
    await cache.set(id, {
      status: 'progress',
      progress: 20
    })
    try {
      let t1 = await task1()
      await cache.set(id, {
        status: 'progress',
        progress: 40
      })
      let t2 = await task2()
      await cache.set(id, {
        status: 'progress',
        progress: 60
      })
      let t3 = await task3()
      await cache.set(id, {
        status: 'progress',
        progress: 80
      })
      let t4 = await task4()
      await cache.set(id, {
        status: 'progress',
        progress: 99
      })
      // let t5 = await task5()
      await cache.set(id, {
        status: 'finished',
        results: [t1, t2, t3, t4,
          // t5,
        ],
        progress: 100
      })
    } catch (e) {
      await cache.set(id, {
        status: 'error',
        error: e.toString()
      })
    }
  })(id + '')
  res.json({ id })
  id++
})

route.get('/query-task', async (req, res) => {
  const { id = '' } = req.query
  if (!id) return res.json({
    error: 'invalid id'
  })
  let cached = await cache.get(id)
  if (!cached) return res.json({
    error: `no such task found id=${id}`
  })

  res.json(Object.assign({ id }, cached))
})


module.exports = route