import React from "react";
import Slideshow from '../homecomponents/Slideshow'
import Reccomend from '../homecomponents/Reccomend'
import Swiper from '../homecomponents/Swiper'
import homestyle from '../homestyles/home.module.css'
import Past from '../homecomponents/Past'
import Slider2 from '../homecomponents/Slider2'
import Footer from "../components/Footer";


const Shop = () => {


 
  return (
    <div  >
 <div className={homestyle.maindiv}>
      <Slideshow/>
      <br/>
      <br/>
      <br/>
      <Reccomend/>
      <Slider2/>
       <br/>
       <br/>
       <Swiper/>
        
        <Past/>
    </div>
 <Footer />
  
    </div>
  );
};

export default Shop;
