import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import styles from "./Product.module.css";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { getSingleProduct } from '../store/product.action';

const Product = () => {
    const {id} = useParams()
    const { getFruits } = useSelector((state) => state.product);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getSingleProduct("all-fruits",id))
  },[dispatch,id])
  const add = () => {
    const data = {
      id: getFruits.singledata.id,
      image: getFruits.singledata.image,
      name: getFruits.singledata.name,
      price: getFruits.singledata.price,
      count: count,
    };
    axios.post(`http://localhost:8080/cart-data`, data);
    alert("Product Added To Cart");
  };
  return (
    <div className={styles.productPage}>
      <div className={styles.product} key={getFruits.data.id}>
        <img src={getFruits.singledata.image} />
        <div className={styles.description}>
          <h1>{getFruits.singledata.name}</h1>
          <p>{getFruits.singledata.description}</p>
          <p>{getFruits.singledata.origin}</p>
          <p>{getFruits.singledata.weight}</p>
          <h3 className={styles.price}>₹{getFruits.singledata.price}</h3>
          <span className={styles.count}>
            <Button
              bg="white"
              fontSize="20px"
              disabled={count == 1}
              onClick={() => {
                setCount(count - 1);
                // updateCount(count);
              }}
            >
              -
            </Button>
            <div>{count}</div>
            <Button
              bg="white"
              fontSize="20px"
              onClick={() => {
                setCount(count + 1);
                // updateCount(count);
              }}
            >
              +
            </Button>
            <Button bg="white" marginLeft={3} borderRadius="20px" onClick={add}>
              Add to cart
            </Button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Product