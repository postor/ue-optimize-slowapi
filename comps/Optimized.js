import { useState, useEffect } from 'react'
import axios from 'axios'

export default () => {
  let [loading, setLoading] = useState(false)
  let [progress, setProgress] = useState(0)
  let [taskid, setTaskid] = useState(0)
  let [result, setResult] = useState(null)

  useEffect(() => {
    if (!taskid) return
    let intval = setInterval(() => {
      axios.get(`/api/optimized/query-task?id=${taskid}`)
        .then(res => {
          const { progress, status } = res.data
          switch (status) {
            case 'finished':
            case 'error':
              setResult(res.data)
              setProgress(100)
              clearInterval(intval)
              break
            case 'progress':
              setProgress(progress)
              break
          }
        })
        .catch(e => alert(e.toString()))
    }, 1000)
    return () => clearInterval(intval)
  }, [taskid])

  return (<div>
    <button onClick={async () => {
      setLoading(true)
      let res = await axios.post('/api/optimized/do-task')
      const { id } = res.data
      if (!id) {
        alert(`bad id`)
        return
      }
      setTaskid(id)
    }} disabled={loading}>do task</button>
    {(!!taskid) && (<progress max={100} value={progress}></progress>)}
    <p>loading:{JSON.stringify(loading)}</p>
    <p>progress:{JSON.stringify(progress)}</p>
    <p>result:{JSON.stringify(result)}</p>
  </div>)
}