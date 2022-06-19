// import logo from './logo.svg';
import { useContext, useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route} from "react-router-dom";
import Shop from "./pages/Shop";
import Learn from "./pages/Learn";
import Grow from "./pages/Grow";
import Location from "./pages/Location";
import Login from "./pages/Login";
import RotateLoader from "react-spinners/RotateLoader";
import "./App.css";
import LocBtn from "./pages/LocBtn";
import { LocContext } from "./ContextApi/LocationAuth";
import Cart from "./pages/cart/Cart";
import Information from "./pages/payment-section/Information";
import Payment from "./pages/payment-section/Payment";
import OrderConfirm from "./pages/payment-section/OrderConfirm";
import Shipping from "./pages/payment-section/Shipping";
import RazorPay from "./pages/payment-section/RazorPay";
import AllFruits from './FruitsPage/Allfruits';
import FruitCombos from './FruitsPage/FruitCombos';
import FreshCuts from './FruitsPage/FreshCuts';
import Gifts from './FruitsPage/Gifts';
import Products from './FruitsPage/Products';
import LocRequiredAuth from "./hoc/LocRequiredAuth"
import Blog from "./pages/Blog";
import OurStory from "./pages/OurStory";
import Product from "./FruitsPage/Product";

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
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/Grow" element={<Grow />} />
            <Route path="/Grow/:id" element={<Blog />} />
            <Route path="/Location" element={<Location />} />
            <Route path="/LocBtn" element={<LocBtn />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/information" element={<Information />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/razorpay" element={<RazorPay />} />
            <Route path="/orderconfirm" element={<OrderConfirm />} />
            <Route path='/allfruits' element={<AllFruits />}></Route>
            <Route path="/allfruits/:id" element={<Product />} />
            <Route path='/freshcuts' element={<FreshCuts />}></Route>
            <Route path='/fruitcombos' element={<FruitCombos />}></Route>
            <Route path='/gifts' element={<Gifts />}></Route>
            <Route path='/products' element={<Products />} />
          </Routes>
               
        </div>
       )}
    </div>
  );
}

export default App;

        

