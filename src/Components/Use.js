import Image from '../Assets/Aesop-Skin-Parsley-Seed-Facial-Toner-Texture-1440x1800.webp';
import UseElement from './UseElement';

function Use() {
  return (
    <section className = "use-section d-flex">
      <img src = {Image} className = "texture-img"/>
      
      <div className = "use-explantory w-50 bg-light">
        <p className = "use-explantory-light">How to use</p>
        <h2 className = "use-explantory-bold">Morning and evening, splash onto a cotton pad or directly into hands, and pat onto freshly cleansed face and neck.</h2>
        
        <div className = "use-element">
          <UseElement header = "Dosage" sub = "Half a teaspoon"/>
          <hr/>
          <UseElement header = "Texture" sub = "Aqueous"/>
          <hr/>
          <UseElement header = "Aroma" sub = "Herbaceous, floral, fresh"/>
        </div>
      </div>
    </section>
  )
}

export default Use
