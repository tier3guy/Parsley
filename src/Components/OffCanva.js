import React from 'react'
import CanvaElement from './CanvaElement'
import UseElement from './UseElement'

function OffCanva() {
  return (
    <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div className = "canva-main">  
        <button type="button" className="btn-close text-reset custom-btn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        <div className = "d-flex canva-container">
          <p className = "use-element-font-bold">Shipping fees and delivery times</p>
          <div className = "hr-dark w-100 mb-3"></div>
          <p className = "use-element-font-bold">Crown Logistics (Hong Kong)</p>

            <CanvaElement main = "Orders $400 and over" sub = "Complimentary"/>
            <CanvaElement main = "Orders below $400" sub = "$40"/>
            <CanvaElement main = "Urban areas" sub = "2-3 buisness days"/>
            <CanvaElement main = "Outlying Islands" sub = "3-5 buisness days"/>

          <div className = "hr-dark w-100 mb-3"></div>
          <p className = "use-element-font-bold">Carbon neutral shipping</p>
          <p className = "use-element-font-light">We offset operational emissions to ensure the delivery of every order is carbon neutral.</p>
          <div className = "hr-dark w-100 mb-3"></div>
        </div>
      </div>
    </div>
  )
}

export default OffCanva
