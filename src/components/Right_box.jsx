import React, { useEffect, useState } from "react";
import navcss from "./navcss.module.css";

import "./navcss_g.css";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Text,
  Box,
  Image,
  Flex,
  Divider,
  Progress,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import Bag from "../assests/Bag.png";
import Loc from "../assests/Loc.png";
import Location from "../pages/Location";
import LocBtn from "../pages/LocBtn";
import SearchBar from "./SearchBar";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { additem, getCartAPI, removeitem } from "../store/cart/cart.actions";
import Signin from "../pages/LSpage/Signin";

const Right_box = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [data, setData] = useState([])
  const [total,setTotal]=useState()
  const navigate=useNavigate()
const [trig,setTrig]=useState(false)
const {cartData}=useSelector((state)=>state.cart)
const dispatch=useDispatch()

  const decrementQuantity=(data)=>{
    const updatedData={
      "id": data.id,
      "image": data.image,
      "name": data.name,
      "weight": data.weight,
      "price": data.price,
      "count": data.count-1
    }
    dispatch(removeitem(updatedData))
    setTrig(!trig)
  }
  const incrementQuantity=(data)=>{
    const updatedData={
      "id": data.id,
      "image": data.image,
      "name": data.name,
      "weight": data.weight,
      "price": data.price,
      "count": data.count+1
    }
    
    dispatch(additem(updatedData))
    setTrig(!trig)
  }

  useEffect(()=>{
    axios.get('http://localhost:8080/all-fruits')
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))

    let totalPrice=0
      dispatch(getCartAPI())
      axios.get("http://localhost:8080/cart-Data")
      .then((r)=>{
        setTotal([...r.data])

        for(let i=0;i<r.data.length;i++){
          totalPrice=totalPrice+(r.data[i].price * r.data[i].count)
        }
        setTotal(totalPrice)
      })
  },[trig,dispatch])

  return (
    <div className={navcss.Right_box}>
      <form className="d-flex" role="search">
        <ul className="ul1">
          <li className="nav-item">
            <div className={navcss.abc}>
              <LocBtn />
            </div>
          </li>
        </ul>

        <SearchBar placeholder='Search here...' data={data} />

        <button className={navcss.iconbtn} type="submit">
          <SearchIcon w={4} h={4} />
        </button>
      </form>
      <Box display='flex' alignItems='center' marginRight='5%' ><Signin/></Box>

      <form className={navcss.btn_wrapper}>

        <span
          className="btn2"
          ref={btnRef}
          _hover="none"
          bg="rgb(236,236,236)"
          onClick={onOpen}
        >
          <img className={navcss.bag_logo} src={Bag} />
       
        </span><sup>{cartData.length}</sup>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            
            <DrawerHeader className={navcss.cart_drawer_heading} h='200px' display='flex' justifyContent='space-around' 
              >SHOPPING CART <Text>close<DrawerCloseButton /></Text></DrawerHeader>
            <DrawerBody>
             <>
              {cartData.map((item)=>(
                  <Flex fontSize='14px' h='100px' justifyContent='space-between' margin=' 2% auto' alignItems='center' >
                    <Image boxSize='50px'
                      objectFit='cover'
                      src={item.image}
                      alt={item.name} />
                      <Box>
                        <Text>{item.name}</Text>
                         <Text>{item.weight}</Text>
                        <Text>₹ {item.price}</Text>
                        <Text><Button size='xs' disabled={item.count ===1} onClick={()=>decrementQuantity(item)}>-</Button>{item.count}<Button size='xs' onClick={()=>incrementQuantity(item)}>+</Button></Text>
                        {/* <Text>₹ {item.price*item.count}</Text> */}
                      </Box>
                  </Flex>
                ))}
                <Divider borderBottom='1px solid rgb(207, 206, 206)' marginTop='10%' />
                <Flex margin='5%' justifyContent='space-between' fontSize='20px' fontWeight='bolder'  color="green" ><Text>SUBTOTAL:</Text> <Text>₹ {total}</Text> </Flex>
                <Divider borderBottom='1px solid rgb(207, 206, 206)' marginBottom='5%' />
                <Progress color='black' hasStripe value={total > 300 ? 100 : (100*total)/300} />
                <Text>{total > 300 ? <b>CONGRATULATIONS FREE SHIPPING!</b>  :
                <>
                  Spend <b>Rs {300-total}</b> more to reach <b>FREE SHIPPING!</b>
                </>
                }</Text>
                <br/>
                <Text fontSize='12px' >No tax on fresh fruits. Free shipping above Rs. 300</Text>
                <br />
                <Button w='100%' bg='gray' colorScheme='red' color='white' onClick={()=>navigate('/cart')} >CHECK OUT</Button>
                <br /><br />
                <Button w='100%' bg='gray' colorScheme='green' color='white' onClick={()=>navigate('/allfruits')} >CONTINUE SHOPPING</Button>

              </>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </form>
    </div>
  );
};

export default Right_box;


// 