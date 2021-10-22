import Data from './FooterLinksData';
import FooterSection from './FooterSection';

export default function Footer(props){
  return (
    <footer className = "bg-dark w-100 footee">
      <div className = " d-flex p-5">
        <div className = "footee-left">
          <div className = "upper d-flex flex-column">
            <input placeholder = "Email Address" className = "font-light footee-input bg-dark"/>
            <div id = "email" className = "mt-2">
              <input type="checkbox" id="email-subs" name="email-sub"/>
              <span className = "font-light ml-2">
                Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our 
                <a href = "" className = "font-light" style = {{textDecoration : "underlined"}}>privacy policy</a>
                <i className="fas rot-45 fa-arrow-right"></i>
              </span>
            </div>
          </div>

        </div>
        <div className = "footee-right">
          {
            Data.map((ele) => {
              return <FooterSection 
              headerName = {ele.headerName}
              arrayData = {ele.arrayData}/>
            })
          }
        </div>
      </div>

      <div className = "copyright p-5 pb-2 pt-3">
          <p className = "font-light" style ={{fontSize : '16px'}}>© Aesop</p>
      </div>
    </footer>
  );
}