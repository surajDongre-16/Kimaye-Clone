// import logo from './logo.svg';

import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, Link} from "react-router-dom";
import Shop from "./pages/Shop";
import Learn from "./pages/Learn";
import Grow from "./pages/Grow";
import Location from "./pages/Location";
import Login from "./pages/Login";

// import Cart from "./pages/Cart";
import { useContext, useEffect, useState } from "react";
import RotateLoader from "react-spinners/RotateLoader";
import './App.css';
import LocRequiredAuth from "./hoc/LocRequiredAuth";
import LocBtn from "./pages/LocBtn";
import { LocContext } from "./ContextApi/LocationAuth";


import Cart from './pages/cart/Cart';
import Information from './pages/payment-section/Information';
import Payment from './pages/payment-section/Payment';
import OrderConfirm from './pages/payment-section/OrderConfirm';





function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);



  const {isTry}=useContext(LocContext)

  return (
    <div>

//      <Navbar/>
//      <Routes>
//       <Route path="/" element={<Shop/>}/>
//       <Route path="/Learn" element={<Learn/>}/>
//       <Route path="/Grow" element={<Grow/>}/>
//       <Route path="/Location" element={<Location/>}/>
//       <Route path="/Login" element={<Login/>}/>
//       <Route path='/cart' element={<Cart/>} />
//       <Route path='/information' element={<Information/>} />
//       <Route path='/payment' element={<Payment/>} />
//       <Route path='/orderconfirm' element={<OrderConfirm/>} />
//      </Routes>
     {/* <Button><Link to='/cart'>cart page</Link></Button> */}

      {loading ? (
        <div className="App">
          <div className="App_inner">
            <RotateLoader
              color={"#698604"}
              loading={loading}
              size={20}
              margin={30}
            />
          </div>
        </div>
      ) : (
        <div>
          <Navbar />

          <Routes>
            <Route path="/" element={ <Shop/>} />
            <Route path="/Learn" element={<LocRequiredAuth><Learn /></LocRequiredAuth>} />
            <Route path="/Grow" element={<Grow />} />
            <Route path="/LocBtn" element={<LocBtn />} />
            <Route path="/Location" element={<Location/>}/>
            <Route path="/Login" element={<Login />} />
            {/* <Route path="/Cart" element={<Cart />} /> */}
          </Routes>
        </div>
      )}

    </div>
  );
}

export default App;
