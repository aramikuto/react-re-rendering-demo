import { memo, useState } from "react"
import { ReRenderCounter } from "./ReRenderCounter"
import { GeneralProvider, useGeneralContext } from "./generalContext"

export const Components = () => {
  const [, setUpdateBeacon] = useState({})
  
  return (
    <GeneralProvider>
      <div>
        <button onClick={() => setUpdateBeacon({})}>Re-render</button>
        <ReRenderCounter />
        <Wrapper />
        <WrapperWithMemo />
        <ContextInputEditor />
        <WrapperWithMemoWithContext />
      </div>
    </GeneralProvider>
  )
}

const Wrapper = () => {
  return (
    <div className="block">
      <h4>Component without dependencies</h4>
      <ReRenderCounter />
    </div>
  )
}

const WrapperWithMemo = memo(() => {
  return (
    <div className="block">
      <h4>Memoized component without dependencies</h4>
      <ReRenderCounter />
    </div>
  )
})

const WrapperWithMemoWithContext = memo(() => {
  const value = useGeneralContext().inputValue

  return (
    <div className="block">
      <h4>Memoized component without dependencies with context</h4>
      Context input value: "{value}"
      <ReRenderCounter />
    </div>
  )
})

const ContextInputEditor = () => {
  const { inputValue, setInputValue } = useGeneralContext()

  return (
    <div className="block">
      <input
        value={inputValue}
        onChange={(e) => {console.count("ON CHANGE"); setInputValue(e.target.value)}}
      />
    </div>
  )
}
