
import React from 'react';
import { Slide } from 'react-slideshow-image';
import slider2style from '../homestyles/slider2.module.css'

const PauseHoverExample = () => {
  const images = [
    "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-1_guetzli-min.jpg?v=1614755149",
    "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-2_guetzli-min.jpg?v=1622009925",
    "https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-3_guetzli-min.jpg?v=1614755148",
  ];

  const fadeProperties = {
    duration: 1000,
    pauseOnHover: true
  };

  return (
    <div>
    
      <div className={slider2style.container}>
        <h1>THE SECRET’S OUT: WE’RE SUPER SAFE</h1>
        <h3>Witness Our Journey</h3>
        <Slide {...fadeProperties}>
          <div className={slider2style.each }>
         <h1>01</h1>
            <div>
              <img src={images[0]} />
            </div>
            <p>We follow G.A.P (Good Agricultural Practices) to ensure food safety.</p>
            
          </div>
          <div className={slider2style.each }>
          <h1>02</h1>
            <div>
              <img src={images[1]} />
            </div>
            <p>Our trained Harvesting Supervisors ensure only the best fruits are picked.</p>
          </div>
          <div className={slider2style.each }>
        <h1>03</h1>
            <div>
              <img src={images[2]} />
            </div>
            
            <p>Stringent quality checks at our automated pack house ensure only the best fruits go through.</p>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default PauseHoverExample;