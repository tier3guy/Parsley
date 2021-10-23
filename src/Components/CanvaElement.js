import React from 'react'

function CanvaElement(props) {
  return (
    <div className = "d-flex justify-content-between w-100">
      <p className = "use-element-font-light">{props.main}</p>
      <p className = "use-element-font-light">{props.sub}</p>
    </div>
  )
}

export default CanvaElement
