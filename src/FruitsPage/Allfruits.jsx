import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addtoCart, fetchData, getSingleProduct } from '../store/product.action';
import  styles from "./Fruits.module.css"
import { Spinner, Alert, AlertIcon,  Button} from '@chakra-ui/react'

const Allfruits = () => {
    const dispatch=useDispatch();
    const[toggle,setToggle]=useState(false);
    // const { isOpen, onToggle } = useDisclosure()
    const {getFruits}=useSelector((state)=>state.product)
    useEffect(()=>
    {
        dispatch(fetchData("all-fruits"));
    },[])


    const add=(id)=>
    {
      dispatch(addtoCart("all-fruits",id));
    }


    const showProduct=(id)=>
    {
      dispatch(getSingleProduct("all-fruits",id));
    }
  return (
    <div>
    <div className={styles.navigation}><div><i className="material-icons star-icon">home</i><h4>&nbsp;<Link to="/" className={styles.homelink}>Home / </Link></h4><p> &nbsp;All Fruits</p> </div><p>Showing {getFruits.data.length} results</p></div>
    {getFruits.loading &&<Spinner size='lg'/>}
    {getFruits.error &&<Alert status='error' width="30%" margin="auto" marginTop="30px">
    <AlertIcon />
    There was an error processing your request
  </Alert>}
    <div className={styles.fruits}>
        {getFruits.data.map((fruit)=>
        (
            <div key={fruit.id} >
             <Link to="/products"> <img src={fruit.image} onClick={()=>{showProduct(fruit.id)}} className={styles.fruitimage}/></Link>
             <Button  width="320px" marginLeft="-27px" marginTop="-30px" className={styles.addtocart}  onClick={()=>{
                setToggle(!toggle)}}>{toggle ?  "ADD TO CART" :"CHOOSE YOUR PACK" }</Button>
            <p>{fruit.name}</p>
            <h3>₹{fruit.price}</h3>
            {/* <SlideFade in={isOpen} offsetY='20px'>
        <Box
          p='20px'
          color='white'
          mt='1'
          bg='#437111'
          rounded='md'
          shadow='md'
        >
         Add To cart
        </Box>
      </SlideFade> */}
            </div>
        )) }
    </div>
    </div>
  )
}

export default Allfruits