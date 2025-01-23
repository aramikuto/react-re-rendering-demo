import "./app.css"
import { Components as ComponentWithCompiler } from "./components-compiler-pt"
import { Components } from './components'

function App() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    }}>
      <div className="container block" style={{
        borderRight: '1px solid black',
      }}>
        <h2>Without compiler</h2>
        <Components />
      </div>
      <div className="container block" style={{
      }}>
        <h2>With compiler</h2>
        <ComponentWithCompiler />
      </div>
    </div>
  )
}

export default App
