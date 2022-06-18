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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import Bag from "../assests/Bag.png";
import Loc from "../assests/Loc.png";
import Location from "../pages/Location";
import LocBtn from "../pages/LocBtn";
import SearchBar from "./SearchBar";
import axios from 'axios'
import { useSelector } from "react-redux";

const Right_box = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [data, setData] = useState([])
  // const {cartData}=useSelector((state)=>state.product)
  // console.log(cartData)


  const decrementQuantity=()=>{}
  const incrementQuantity=()=>{}

  useEffect(()=>{
    axios.get('http://localhost:8080/all-fruits')
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
  },[])

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

      <form className={navcss.btn_wrapper}>
        <span
          className="btn1"
          ref={btnRef}
          _hover="none"
          bg="rgb(236,236,236)"
          onClick={onOpen}
        >
          <span className="material-icons bag">person_outline</span>
        </span>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account now</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <span
          className="btn2"
          ref={btnRef}
          _hover="none"
          bg="rgb(236,236,236)"
          onClick={onOpen}
        >
          <img className={navcss.bag_logo} src={Bag} />
       
        </span><sup>10</sup>
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
             
              <Box>
               
              </Box>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </form>
    </div>
  );
};

export default Right_box;


// {cartData.map((item)=>(
//   console.log(item)
//   // <div>
//   //   <Image boxSize='50px'
//   //     objectFit='cover'
//   //     src={item.image}
//   //     alt={item.name} />
//   //     <div>
//   //       <Text>{item.name}</Text>
//   //       <Text>{item.weight}</Text>
//   //       <Text>₹ {item.price}</Text>
//   //       <Text><Button onClick={()=>decrementQuantity(item)}>-</Button>{item.count}<Button onClick={()=>incrementQuantity(item)}>+</Button></Text>
//   //       {/* <Text>₹ {item.price*item.count}</Text> */}
//   //     </div>
//   // </div>
// ))}