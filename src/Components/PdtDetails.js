import { useState } from "react";
import CircularCheckBox from "./CircularCheckBox";
import Mainbutton from "./Mainbutton";
import Navitems from "./Navitems";
import UseElement from "./UseElement";

export default function PdtDetails (){

  const [vol100, setVol100] = useState(true);
  const [vol200, setVol200] = useState(false);
  const [activeVol100, setActiveVol100] = useState(true);
  const [activeVol200, setActiveVol200] = useState(false);

  const settingVol = (vol) => {
    if(vol === 100){
      setVol100(true);
      setVol200(false);
      setActiveVol100(true);
      setActiveVol200(false);
    }
    else if(vol === 200){
      setVol100(false);
      setVol200(true);
      setActiveVol100(false);
      setActiveVol200(true);
    }
  }

  return (
    <div className = "pdt-details">
      <div className = "links d-flex">
        <Navitems name = "Skin" link = "https://www.aesop.com/hk/en/c/skin/"/>
        <div className = "dot"></div>
        <Navitems name = "Tone" link = "https://www.aesop.com/hk/en/c/skin/tone/"/>
      </div>
      <h2 className = "use-element-bold mt-3 custom-hero-text">Parsley Seed Anti-Oxidant Facial Toner</h2>
      <p className = "font-dark bb pt-2 pb-3">An alcohol-free, anti-oxidant rich formulation that soothes and balances the skin while preparing it for hydration.</p>

      <UseElement header = "Suited to" sub = "Most skin types, including dry and mildly sensitive"/>
      <div className = "hr-dark w-100 mb-3"></div>
      <UseElement header = "Skin feel" sub = "Calm, soft and hydrated with a light finish"/>
      <div className = "hr-dark w-100 mb-3"></div>
      <UseElement header = "Key ingredients" sub = "Parsley Seed, Lavender Stem, Blue Chamomile"/>
      <div className = "hr-dark w-100 mb-3"></div>
      <UseElement header = "Sizes"/>
      <div className = "checkbox-binder d-flex">
        <div className = "cont-checkbox-size" onClick = {() => settingVol(100)}>
          <CircularCheckBox active = {activeVol100}/>
          <p className = "use-element-font-light">100 mL</p>
        </div>
        <div className = "cont-checkbox-size" onClick = {() => settingVol(200)}>
          <CircularCheckBox active = {activeVol200}/>
          <p className = "use-element-font-light">200 mL</p>
        </div>
      </div>

      <Mainbutton price = {(vol200) ? "460.00" : "295.00"}/>
    </div>
  );
}