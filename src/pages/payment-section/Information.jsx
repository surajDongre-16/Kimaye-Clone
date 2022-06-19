import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Checkbox, Divider, Flex, FormLabel, Image, Input, Select, Spacer, Text } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import styles from "./payament.module.css"
import { AiFillQuestionCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getCartAPI, saveUserInfo } from '../../store/cart/cart.actions';
import SelectedProduct from '../../components/SelectedProduct';
import { LocContext } from '../../ContextApi/LocationAuth';



const Information = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    // const {cartData}=useSelector((state)=>state.cart)
    const [total,setTotal]=useState()
    const [userInfo,setUserInfo]=useState({})
    
    const formData=(e)=>{
        let {name , value}=e.target
        setUserInfo({
            ...userInfo,
            [name]:value,
            'total':total
        })

    }

    const formSubmit=(e)=>{
        e.preventDefault()
        localStorage.setItem("userInfo",JSON.stringify(userInfo))
    }

    // const handleClick=(e)=>{
    //     e.preventDefault()
    //     navigate('/shipping')
    // }   

    useEffect(()=>{
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
      },[])

  return (
    <div className={styles.payment_main_box}>
        <Flex>
            <Box className={styles.payment_left_box} h='auto'  >
                <Box className={styles.payment_left_inner}>
                    <Image src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_250x.png?v=1596288204' marginBottom='2%' />
                    <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' fontSize='xs' />}>
                        <BreadcrumbItem color='red' >
                            <BreadcrumbLink fontSize='xs' href='#'>Cart</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink fontSize='xs' >Information</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink fontSize='xs'>Shipping</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink fontSize='xs'>Payment</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <br/>
                    <Flex justifyContent='space-between'>
                        <Text fontSize='20px'>Contact information</Text>
                        <Text display='flex' justifyContent='space-between' w='45%' >Already have an account? <Text cursor='pointer' color='red' onClick={()=>navigate('/login')}>Log in</Text></Text>
                    </Flex>
                    <br/>
                    <Input size='lg' name='email' placeholder='Email' type='email' onChange={formData}  bg='white' marginBottom='3%' outline='1px solid gray' />
                    <br/>
                    <Checkbox colorScheme='red' defaultChecked>
                        Get order notification and delivery updates
                    </Checkbox>
                    <br /><br />
                    <Text fontSize='20px' >Shipping address</Text>
                    <br />
                    <form className={styles.form}  >
                        <FormLabel fontWeight='100px' htmlFor='country'>Country</FormLabel>
                        <Select isRequired size='lg' name='country' id='country' placeholder='Select country' bg='white' marginBottom='3%' outline='1px solid gray' onChange={formData} >
                            <option>India</option>
                        </Select>
                        <Box marginBottom='3%' display='flex' justifyContent='space-between' > 
                            <Input isRequired  size='lg' name='firstName' placeholder='First name' w='48%' bg='white' outline='1px solid gray' onChange={formData} />
                            <Input isRequired size='lg' name='lastName' placeholder='Last name' w='48%' bg='white' outline='1px solid gray' onChange={formData} />
                        </Box>
                        <Input isRequired size='lg' name='address' placeholder='Appartment, suit, etc. (optional)' bg='white' marginBottom='3%' outline='1px solid gray' onChange={formData} />
                        <Flex justifyContent='space-between'  marginBottom='3%'> 
                            <Input isRequired size='lg' w='32%' name='city' placeholder='City' bg='white' outline='1px solid gray' onChange={formData} />
                            <Select id='state' name='state' placeholder='Select state' w='32%' bg='white' outline='1px solid gray' onChange={formData} >
                                <option>Maharashtra</option>
                                <option>Delhi</option>
                            </Select>
                            <Input isRequired size='lg' w='32%' name='pincode' placeholder='PIN code' bg='white' outline='1px solid gray' onChange={formData} />
                        </Flex>
                        <Input isRequired size='lg' name='mobileNo' placeholder='Mobile number for order and delivery updates ' bg='white'  marginBottom='3%' outline='1px solid gray' onChange={formData} />
                        <Box marginBottom='3%' >
                            <input required size='lg' type='checkbox' onChange={formSubmit} /> <label>Save this information for next time</label>
                        </Box>
                        <Box display='flex' alignItems='center' >
                            <Button type='submit' marginRight='5%' colorScheme='green' size='lg' onClick={()=>navigate('/shipping')}>
                                Continue to shipping 
                            </Button>
                            <Text color='red' cursor='pointer' onClick={()=>navigate('/cart')} >Return to Cart </Text>
                        </Box>
                    </form>
                </Box>  
            </Box>
            {/* Left side container ends */}

            {/* Right side container starts */}

            <Box>
                <Box margin='15%' w='130%' >
                    <SelectedProduct/>
                </Box>
            </Box>
        </Flex>
    </div>
  )
}

export default Information