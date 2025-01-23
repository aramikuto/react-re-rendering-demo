import { useId } from "react"

export const ReRenderCounter = () => {
  const id = useId()

  const target = window.document.getElementById(id)
  if (target !== null) {
    const count = Number(target.textContent)
    target.textContent = String(count + 1)
  }
    
  return (
    <div>
      <div>Re-render count: <div id={id}>0</div></div>
    </div>
  )
}