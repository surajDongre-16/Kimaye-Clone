// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import { Routes, Route} from "react-router-dom";
import Shop from './pages/Shop';
import Learn from './pages/Learn';
import Grow from './pages/Grow';
import Location from './pages/Location';
import Login from './pages/Login';
import Cart from './pages/cart/Cart';
import Shipping from './pages/payment-section/Shipping';

function App() {
  return (
    <div>
     {/* <Navbar/>
     <Routes>
      <Route path="/" element={<Shop/>}/>
      <Route path="/Learn" element={<Learn/>}/>
      <Route path="/Grow" element={<Grow/>}/>
      <Route path="/Location" element={<Location/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Cart" element={<Cart/>}/>
     </Routes> */}
    <Shipping/>
    </div>
  );
}

export default App;
