import { useState } from "react";
import AesopLogo from "./AesopLogo";
import bottleImg from "../Assets/Large-PNG-Aesop-Skin-Parsley-Seed-Anti-Oxidant-Facial-Toner-100mL-large.webp";
import PdtDetails from "./PdtDetails";

function Hero() {
  
  const [imgSize, setImageSize] = useState({
    width : 450,
    height : 450,
  });

  return (
    <section className = "main-section d-flex justify-content-between">
      <AesopLogo/>
      <div className = "pdt-container d-flex" >
        <img src = {bottleImg} style = {{width : imgSize.width, height : imgSize.height}} className = "img-hero"/>
        <PdtDetails/>
      </div>
    </section>
  )
}

export default Hero
