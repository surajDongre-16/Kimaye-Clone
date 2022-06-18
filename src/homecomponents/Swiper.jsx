
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import swiperstyle from '../homestyles/swiper.module.css'



const arr=[
  
    {
        image1:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/AdobeStock_77286816-min__1625567830_114.143.85.97_540x.jpg?v=1625638895",
     image2:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/pomegranate-min_540x.jpg?v=1614342435",
     ptag:"Summers have arrived and so have the days where we can soak ourselves in the pleasure of treating ourselves...",
    },
    {
        image1:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/healthy_heart-min_540x.jpg?v=1614342271" ,
        image2:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/Untitled_design_51-min_540x.png?v=1614341965",
        ptag:"Summers have arrived and so have the days where we can soak ourselves in the pleasure of treating ourselves...",
    },
    {
        image1:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/Untitled_design_51-min_540x.png?v=1614341965",
        image2:"https://cdn.shopify.com/s/files/1/0449/5225/6667/articles/pomegranate-min_540x.jpg?v=1614342435",
        ptag:"Summers have arrived and so have the days where we can soak ourselves in the pleasure of treating ourselves...",
    }
   

    
]

const Swiper = () => {
    
  
    
            return (
                <div>
          <img className={swiperstyle.simg} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/blog-top-cut.png?v=1599102918"/>   
      <div className={swiperstyle.swiperdiv}> 
      <h1>JAZZ IT UP WITH FRUITS</h1>
        <Slide easing="ease" style={{width:"80%",margin:"auto"}}>

            {
                arr.map((el)=>(
                    <div className={swiperstyle.each}>
                        
          <div >
            <img src={el.image1}/>
            </div> 
          <div >
          <img src={el.image2}/>
          </div>
         
         </div>
         
          
                ))
            }
      
          
        </Slide>
      </div>
      <img className={swiperstyle.simg} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/blog-bottom-cut.png?v=1599102919"/> 
      </div>
  )
}

export default Swiper