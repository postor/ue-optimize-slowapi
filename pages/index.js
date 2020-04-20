import Optimized from '../comps/Optimized'
import NoOptimize from '../comps/NoOptimize'

export default () => (<div>
  <table>
    <thead>
      <tr><th>slow api</th><th>slow api with progress</th></tr>
    </thead>
    <tbody>
      <tr><td><NoOptimize /></td><td><Optimized /></td></tr>
    </tbody>
  </table>
  <style jsx>{`
    table {
      border-collapse: collapse;
    }
    
    table, th, td {
      border: 1px solid black;
    }
  `}</style>
</div>)