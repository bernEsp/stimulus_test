import React, { useState } from "react"

function App() {
  const [count, setCount] = useState(0)
  const onClickEvent = function () {
    setCount(count+1)
  }
  const button = React.createElement("button", {onClick: onClickEvent}, "Click Here")
  const p = React.createElement("p", null,"You clicked " + count + " times")
  return React.createElement("div", null, p, button)
}

export default App
