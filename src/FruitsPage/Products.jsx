import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import  styles from "./Product.module.css"
import { Button } from '@chakra-ui/react'
import axios from 'axios'
const Products = () => {
    const {getFruits}=useSelector((state)=>state.product)
  const[count,setCount]=useState(1);

    const add=()=>
    {
      const data={
        id:getFruits.singledata.id,
        image:getFruits.singledata.image,
        name:getFruits.singledata.name,
        price:getFruits.singledata.price,
        count:count
    }
      axios.post(`http://localhost:8080/cart-data`,data);
      alert("Product Added To Cart");
    }


    // const updateCount=(count)=>
    // {
    //   const data={
    //     id:getFruits.singledata.id,

    // }
    //   axios.patch(`http://localhost:3004/cart-data/${data.id}`,{count:count})
    // }

    // console.log(getFruits.data)
  return (
    <div className={styles.product} key={getFruits.data.id}>
         <img src={getFruits.singledata.image}/>
           <div className={styles.description}> 
            <h1>{getFruits.singledata.name}</h1>
            <p>{getFruits.singledata.description}</p>
            <p>{getFruits.singledata.origin}</p>
            <p>{getFruits.singledata.weight}</p>
            <h3 className={styles.price}>₹{getFruits.singledata.price}</h3> 
            <span className={styles.count}>
            <Button bg="white" fontSize="20px" disabled={count==1} onClick={()=>{
              setCount(count-1)
              // updateCount(count);
            }}>-</Button>
            <div>{count}</div>
            <Button bg="white" fontSize="20px" onClick={()=>{
              setCount(count+1);
              // updateCount(count);
            }}>+</Button>
            <Button bg="white" marginLeft={3} borderRadius='20px' onClick={add}>Add to cart</Button>
            </span>
            </div>
            
        </div>
  )
}

export default Products