import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addtoCart, fetchData, getSingleProduct } from '../store/product.action';
import  styles from "./Fruits.module.css"
import FruitNavbar from "./FruitNavbar"
import { Spinner,Alert,AlertIcon } from '@chakra-ui/react'
 const FruitCombos = () => {
    const dispatch=useDispatch();
    const {getFruits}=useSelector((state)=>state.product)
    useEffect(()=>
    {
        dispatch(fetchData("fruit-combos"));
    },[])

    const add=(id)=>
    {
      dispatch(addtoCart("fruit-combos",id));
    }


    const showProduct=(id)=>
    {
      dispatch(getSingleProduct("fruit-combos",id));
    }
  return (
    <div className={styles.fruitpage}>
      <FruitNavbar/>
    <div className={styles.navigation}><div><i className="material-icons star-icon">home</i><h4>&nbsp;<Link to="/" className={styles.homelink}>Home / </Link></h4><p> &nbsp;Fruit Combos</p> </div><p>Showing {getFruits.data.length} results</p></div>
    {getFruits.loading &&<Spinner size='lg'/>}
    
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

export default FruitCombos;