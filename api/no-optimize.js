const { Router } = require('express')
const task1 = require('./tasks/task1')
const task2 = require('./tasks/task2')
const task3 = require('./tasks/task3')
const task4 = require('./tasks/task4')
const task5 = require('./tasks/task5')


let route = new Router()

route.post('/do-task', async (req, res) => {
  try {
    let t1 = await task1()
    let t2 = await task2()
    let t3 = await task3()
    let t4 = await task4()
    // let t5 = await task5()
    res.json({
      results: [t1, t2, t3, t4,
        // t5,
      ]
    })
  } catch (e) {
    res.json({ error: e.toString() })
  }
})

module.exports = route