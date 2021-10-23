import './App.css';
import './Class.css';
import ChatBox from './Components/ChatBox';
import Footer from './Components/Footer';
import MainBody from './Components/MainBody';
import Navbar from './Components/Navbar';
import OffCanva from './Components/OffCanva';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainBody/>
      <Footer/>
      <ChatBox/>
      <OffCanva/>
    </div>
  );
}

export default App;
