// import logo from './logo.svg';

import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Learn from "./pages/Learn";
import Grow from "./pages/Grow";
import Location from "./pages/Location";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";
import RotateLoader from "react-spinners/RotateLoader";
import './App.css';
import Navbar from "./components/Navbar"
import { Routes, Route} from "react-router-dom";
import Shop from './pages/Shop';
import Learn from './pages/Learn';
import Grow from './pages/Grow';
import Location from './pages/Location';
import Login from './pages/Login';
import Cart from './pages/cart/Cart';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
            <Route path="/Learn" element={<Learn />} />
            <Route path="/Grow" element={<Grow />} />
            <Route path="/Location" element={<Location />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
