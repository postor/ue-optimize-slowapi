import { useState } from 'react'
import axios from 'axios'

export default () => {
  let [loading, setLoading] = useState(false)
  let [result, setResult] = useState(null)
  return (<div>
    <button onClick={() => {
      setLoading(true)
      axios.post('/api/no-optimize/do-task')
        .then(res => setResult(res.data))
    }} disabled={loading}>do task</button>
    <p>loading:{JSON.stringify(loading)}</p>
    <p>result:{JSON.stringify(result)}</p>
  </div>)
}