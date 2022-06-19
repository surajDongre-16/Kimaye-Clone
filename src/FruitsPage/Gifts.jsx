import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addtoCart, fetchData, getSingleProduct } from '../store/product.action';
import  styles from "./Fruits.module.css"
import { Spinner,Alert,AlertIcon } from '@chakra-ui/react'
const Gifts = () => {
    const dispatch=useDispatch();
    const {getFruits}=useSelector((state)=>state.product)
    
    useEffect(()=>
    {
        dispatch(fetchData("gifts"));
    },[])

    const add=(id)=>
    {
      dispatch(addtoCart("gifts",id));
    }

    const showProduct=(id)=>
    {
      dispatch(getSingleProduct("gifts",id));
    }

  return (
    <div>
    <div className={styles.navigation}><div><i className="material-icons star-icon">home</i><h4>&nbsp;<Link to="/" className={styles.homelink}>Home / </Link></h4><p> &nbsp;Gifts By Kimaye</p> </div><p>Showing {getFruits.data.length} results</p></div>
    {getFruits.loading &&<Spinner size='lg'/>}
    {getFruits.error &&<Alert status='error' width="30%" margin="auto" marginTop="30px">
    <AlertIcon />
    There was an error processing your request
  </Alert>}
    <div className={styles.fruits}>
        {!getFruits.loading && getFruits.data.map((fruit)=>
        (
            <div key={fruit.id}>
                <Link to="/products"> <img src={fruit.image} onClick={()=>{showProduct(fruit.id)}} className={styles.fruitimage}/></Link>
                <div className={styles.addtocart}  onClick={()=>{add(fruit.id)}}>CHOOSE YOUR PACK</div>
            <p>{fruit.name}</p>
            <h3>₹{fruit.price}</h3>
            </div>
        )) }
    </div>
    </div>
  )
}

export default Gifts