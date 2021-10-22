import React from 'react'

function ImageDiv(props) {
  return (
    <div className = "d-flex flex-column justify-content-center align-center">
      <img className = "img-cor" src = {props.imgSrc} />
      <a className = "text-center font-dark mb-2" href= {props.link}>{props.linkName}</a>
      <p className = "text-center font-dark mb-2" href= {props.link}>{props.name}</p>
    </div>
  )
}

export default ImageDiv
