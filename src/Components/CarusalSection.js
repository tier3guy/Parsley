import React from 'react'
import ImageDiv from './ImageDiv'

import bottle from '../Assets/bottle.webp';
import himani from '../Assets/himani.webp';
import himani2 from '../Assets/himani2.webp';

function CarusalSection() {
  return (
    <section className = "carousal-section">
      <div className = "info mb-5">
        <h2 className = "carousal-section-bold">Accompany with</h2>
        <p>Exceptionally mild Parsley Seed Facial Cleansing Oil removes all traces of makeup and grime and leaves skin clean and soft; complement twice weekly with Purifying Facial Exfoliant Paste and Parsley Seed Cleansing Masque to polish, purify and thoroughly refresh skin.</p>
      </div>
      <div className = "img-container d-flex ">
        <ImageDiv 
          name = "Enhance with nourishing botanical oil" 
          linkName = "Parsley Seed Facial Cleaning Oil" 
          link = "" 
          imgSrc = {bottle}/>
        <ImageDiv 
          name = "A deep cleansing exfoliating cream" 
          linkName = "Purifying Facial Exfoliant Paste" 
          link = "" 
          imgSrc = {himani}/>
        <ImageDiv 
          name = "A smooth clay-based formulation" 
          linkName = "Parsley Seed Cleansing Masque" 
          link = "" 
          imgSrc = {himani2}/>
      </div>
    </section>
  )
}

export default CarusalSection
