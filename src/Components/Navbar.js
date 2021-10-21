import Header from "./Header";
import Navitems from "./Navitems";

export default function Navbar(){
  return(
    <nav className = "w-100">
      <Header/>
      <div className = "nav-main d-flex justify-content-between">
        <div className = "links">
          <Navitems name = 'Shop'/>
          <Navitems name = 'Read'/>
          <Navitems name = 'Stores'/>
          <Navitems name = 'Search'/>
        </div>
        <div className = "profile">
          <Navitems name = 'Login'/>
          <Navitems name = 'Cart'/>
        </div>
      </div>
    </nav>
  );
}