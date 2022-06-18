import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addtoCart, fetchData, getSingleProduct } from '../store/product.action';
import  styles from "./Fruits.module.css"
import { Spinner, Alert, AlertIcon,  Button} from '@chakra-ui/react'
import FruitNavbar from "./FruitNavbar"

const Allfruits = () => {
    const dispatch=useDispatch();
    const[toggle,setToggle]=useState(false);
    const {getFruits}=useSelector((state)=>state.product)
    useEffect(()=>
    {
        dispatch(fetchData("all-fruits"));

    },[toggle])


    const change=(id)=>
    {
      setToggle(!toggle)
    if(toggle)
    {
      alert("Product Added To Cart");
      dispatch(addtoCart("all-fruits",id));
    }
    }


    const showProduct=(id)=>
    {
      dispatch(getSingleProduct("all-fruits",id));
    }
  return (
    <div className={styles.fruitpage}>
      <FruitNavbar/>
    <div className={styles.navigation}><div><i className="material-icons star-icon">home</i><h4>&nbsp;<Link to="/" className={styles.homelink}>Home / </Link></h4><p> &nbsp;All Fruits</p> </div><p>Showing {getFruits.data.length} results</p></div>
    {getFruits.loading &&<Spinner size='lg'/>}
    
    <div className={styles.fruits}>
        {getFruits.data.map((fruit)=>
        (
            <div key={fruit.id} >
             <Link to="/products"> <img src={fruit.image} onClick={()=>{showProduct(fruit.id)}} className={styles.fruitimage}/></Link>
             <Button  width="320px" colorScheme="green" marginLeft="11px" marginTop="-30px" className={styles.addtocart}  onClick={()=>{
                change(fruit.id)}}>{toggle ?  "ADD TO CART" :"CHOOSE YOUR PACK" }</Button>
               <p>{fruit.name}</p>
            <h3>₹{fruit.price}</h3>
           
            </div>
        )) }
    </div>
    </div>
  )
}

export default Allfruits