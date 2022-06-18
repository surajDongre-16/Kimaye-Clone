import { Box, Button, Divider, Flex, Image, Input, Spacer, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillQuestionCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import {    getCartAPI } from '../store/cart/cart.actions'

const SelectedProduct = () => {
    const {cartData}=useSelector((state)=>state.cart)
    const [total,setTotal]=useState()
    const dispatch=useDispatch()
    const [discount,setDiscount]=useState()

    const discountFn=(e)=>{
        setDiscount(e.target.value)
    }
    const handleDiscount=()=>{
        if(discount=== "MASAI30"){
            let x=(30/100)*total
            setDiscount(x)
        }
        else if(discount=== "KIMAYENEW"){
            let x=(50/100)*total
            setDiscount(x)
        }
        else if(discount=== "KIMAYE20"){
            let x=(20/100)*total
            setDiscount(x)
        }
        else{
            setDiscount("error")
        }

        
    }
 
    useEffect(()=>{
        let totalPrice=0
        if(discount > 0){
            dispatch(getCartAPI())
            axios.get("http://localhost:8080/cart-Data")
            .then((r)=>{
              setTotal([...r.data])
      
              for(let i=0;i<r.data.length;i++){
                totalPrice=totalPrice+(r.data[i].price * r.data[i].count)
              }
              setTotal(totalPrice-discount)
            })
        }
        else{
            dispatch(getCartAPI())
            axios.get("http://localhost:8080/cart-Data")
            .then((r)=>{
              setTotal([...r.data])
      
              for(let i=0;i<r.data.length;i++){
                totalPrice=totalPrice+(r.data[i].price * r.data[i].count)
              }
              setTotal(totalPrice)
            })
        }
        
          
      },[discount])
  return (
    <>
        {cartData.map((item)=>(
            <Flex key={item.id} justifyContent='space-between' alignItems='center' marginBottom='2%'>
                <Image border='1px solid gray' borderRadius='10px' w='70px' h='70px' src={item.image}/>
                <Flex flexDirection='column' paddingLeft='3%'>
                    <Text fontSize='15px' >{item.name}</Text>
                    <Text fontSize='15px'>{item.weight}</Text>
                </Flex>
                <Spacer/>
                <Text> ₹{item.price*item.count}</Text>
            </Flex>
        ))}
        <br />
        <Divider borderBottom='1px solid rgb(207, 206, 206)' />
        <br/>
        <Box display="flex" justifyContent='space-between' >
            <Input fontSize='20px' placeholder='Gift card or discount code' w='70%' onChange={discountFn} />
            <Button bg='rgb(199, 199, 199)' color='white' colorScheme='red' fontSize='20px' onClick={handleDiscount} >Apply</Button>
        </Box>
            {discount==="error"? <Text color='red' fontSize='15px'>Invalid Coupune Code</Text> : ""}
        <br/>
        <Divider borderBottom='1px solid rgb(207, 206, 206)'   />
        <br/>
        <Box color='gray'>
            <Flex justifyContent='space-between' marginBottom='3%'  >
                <Text>Subtotal</Text>
                <Text color='black' >₹{total}</Text>
            </Flex>
            <Flex justifyContent='space-between' marginBottom='3%'>
                <Text display='flex' alignItems='center' justifyContent='space-between' w='20%'>Shipping <AiFillQuestionCircle/></Text>
                <Text fontSize='14px' >{total>300 ? "Free Shipping" : "₹ 50" }</Text>
            </Flex>
            {discount> 0 ?<Flex justifyContent='space-between' marginBottom='3%'  >
                <Text>Discounted Subtotal</Text>
                <Text color='black' >₹{total}</Text>
            </Flex> : ""}
        </Box>
        <br />
        <Divider borderBottom='1px solid rgb(207, 206, 206)'/>
        <br />
        <Flex justifyContent='space-between'>
            <Text fontSize='20px'>Total</Text>
            <Text display='flex' justifyContent='space-between' alignItems='center' w='20%'><Text color='gray' fontSize='14px' >INR</Text> <Text fontSize='20px' 
            >₹{ total>300 ? total : total+50 }</Text> </Text>
        </Flex>
   </>

  )
}

export default SelectedProduct
// discount>0 ? `${total>300 ? total-discount : total-discount+50}` :