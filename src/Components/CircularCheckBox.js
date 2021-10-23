import React from 'react'

function CircularCheckBox(props) {
  return (
    <div className = "checkbox-cont">
      <div className = {(props.active) ? "checkbox-inner fill" : "checkbox-inner"}></div>
    </div>
  )
}

export default CircularCheckBox
