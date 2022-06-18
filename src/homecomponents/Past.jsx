import React from 'react'
import homestyle from '../homestyles/home.module.css'

const pastarr=[
    "https://scontent.cdninstagram.com/v/t51.29350-15/287777520_709043673687257_3035340965363558444_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=qcpWAq8zICEAX-Q2OuT&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-kBHq5IsPxY8R0273Juo55Bn561LeRr_aY2o85E6JtjQ&oe=62ADC8BF",
    "https://scontent.cdninstagram.com/v/t51.29350-15/287661335_435396271444075_5269129130906661203_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=chNto7ljN2QAX9RDh8n&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8mpkC0KubyyjICg7iPqsOyJ1UNdvgvBuZO_lniqtsDIA&oe=62AE7244",
    "https://scontent.cdninstagram.com/v/t51.29350-15/286476421_5512742678790182_9133878254313440813_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=lb_ZGm3wyeUAX8jYSln&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-WMwSjODjvdaNp8AtbnA5KMo3ULCAv2S0Hpp-MJyvdXg&oe=62AF0AD5",
    "https://scontent.cdninstagram.com/v/t51.29350-15/286027759_416785993449025_2116452231653606930_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=n0fiMj0wC_cAX82GCzn&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8l_-uug6uBuEVBTQMeX0qJOy4PSyyaZLZwMAQnLalYsw&oe=62AF25F4"

]

const Past = () => {
  return (
    <div className={homestyle.pastdiv}> 
     <br/>
     <br/>
     <br/>
     <h1>PSST… LOOKIN’ FOR US?</h1>
     <h3>We are here</h3>
     <br/>
     <br/>
     <div className={homestyle.griddiv}>
        {
            pastarr.map((el)=>(
                <div>
                    <a></a><img className={homestyle.pastimg}  src={el}/>
                </div>
               
            ))
        }
     </div>


    </div>
  )
}

export default Past