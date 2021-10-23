import React from 'react'

function Mainbutton(props) {
  return (
    <div className = "btn-container">
      <button className = "btn-custom">
        <p className = "text-center font-light mt-3">{`Add to your Cart - ${props.price}`}</p>
      </button>
    </div>
  )
}

export default Mainbutton
