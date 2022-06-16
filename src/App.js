// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import { Routes, Route, Link} from "react-router-dom";
import Shop from './pages/Shop';
import Learn from './pages/Learn';
import Grow from './pages/Grow';
import Location from './pages/Location';
import Login from './pages/Login';
import Cart from './pages/cart/Cart';
import Information from './pages/payment-section/Information';
import Payment from './pages/payment-section/Payment';
import { Button } from '@chakra-ui/react';
import OrderConfirm from './pages/payment-section/OrderConfirm';

function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Shop/>}/>
      <Route path="/Learn" element={<Learn/>}/>
      <Route path="/Grow" element={<Grow/>}/>
      <Route path="/Location" element={<Location/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/information' element={<Information/>} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='/orderconfirm' element={<OrderConfirm/>} />
     </Routes>
     {/* <Button><Link to='/cart'>cart page</Link></Button> */}
     {/* <Cart/>
     <Information/>
     <Payment/> */}
    </div>
  );
}

export default App;
