// import logo from './logo.svg';

import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Shop from "./pages/Shop";
import Learn from "./pages/Learn";
import Grow from "./pages/Grow";
import Location from "./pages/Location";
import Login from "./pages/Login";

// import { useEffect, useState } from "react";
// import RotateLoader from "react-spinners/RotateLoader";

import { useContext, useEffect, useState } from "react";
import RotateLoader from "react-spinners/RotateLoader";

import "./App.css";
// import LocRequiredAuth from "./hoc/LocRequiredAuth";
import LocBtn from "./pages/LocBtn";
import { LocContext } from "./ContextApi/LocationAuth";

import Cart from "./pages/cart/Cart";
import Information from "./pages/payment-section/Information";
import Payment from "./pages/payment-section/Payment";
import OrderConfirm from "./pages/payment-section/OrderConfirm";

import { Button } from "@chakra-ui/react";
import Shipping from "./pages/payment-section/Shipping";


import AllFruits from './FruitsPage/Allfruits';
import FruitCombos from './FruitsPage/FruitCombos';
import FreshCuts from './FruitsPage/FreshCuts';
import Gifts from './FruitsPage/Gifts';
import FruitNavbar from './FruitsPage/FruitNavbar';
import Products from './FruitsPage/Products';


import Blog from "./pages/Blog";
import OurStory from "./pages/OurStory";
import LocRequiredAuth from "./hoc/LocRequiredAuth";


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const { isTry } = useContext(LocContext);

  return (
    <div>
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
   <FruitNavbar/>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route
              path="/Learn"
              element={
                <LocRequiredAuth>
                  <Learn />
                </LocRequiredAuth>
              }
            />
            <Route path="/our-story" element={<OurStory/>}/>
            <Route path="/Grow" element={<Grow />} />
            <Route path="/Grow/:id" element={<Blog />} />
            <Route path="/Location" element={<Location />} />
            <Route path="/LocBtn" element={<LocBtn />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/information" element={<Information />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/orderconfirm" element={<OrderConfirm />} />
              
               <Route path='/allfruits' element={<AllFruits/>}></Route>
        <Route path='/freshcuts' element={<FreshCuts/>}></Route>
        <Route path='/fruitcombos' element={<FruitCombos/>}></Route>
        <Route path='/gifts' element={<Gifts/>}></Route>
        <Route path='/products' element={<Products/>}/>
          </Routes>
          //{" "}
          <Button>
            <Link to="/cart">cart page</Link>
          </Button>
          {/* //{" "}
          <Routes>
            // <Route path="/" element={<Shop />} />
            //{" "}
            <Route
              path="/Learn"
              element={
                <LocRequiredAuth>
                  <Learn />
                </LocRequiredAuth>
              }
            />
            // <Route path="/Grow" element={<Grow />} />
            // <Route path="/Grow/:id" element={<Blog />} />
            // <Route path="/LocBtn" element={<LocBtn />} />
            // <Route path="/Location" element={<Location />} />
            // <Route path="/Login" element={<Login />} />
            // {/* <Route path="/Cart" element={<Cart />} /> */}
          // {/* </Routes> */}

        </div>
      )}
      ;
    </div>
  );
}

export default App;
