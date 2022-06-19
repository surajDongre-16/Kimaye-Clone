import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Center, Divider, Flex, FormControl, FormLabel, Heading, Image, Input, Progress, Select, Spacer, Text, Textarea} from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoHomeSharp, IoCloseCircleSharp } from "react-icons/io5"
import { useNavigate } from 'react-router-dom'
import styles from "./cart.module.css"
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react'
import { additem, deleteCartItem, getCartAPI, removeitem } from '../../store/cart/cart.actions'
import axios from 'axios'

const Cart = () => {
  const [total,setTotal]=useState()
  const [trig,setTrig]=useState(false)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {cartData}=useSelector((state)=>state.cart)
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

  const decrementQuantity=(data)=>{
    console.log(data)
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

  const deleteItem=(id)=>{
    dispatch(deleteCartItem(id))
    setTrig(!trig)
  }


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
      
  },[trig,dispatch])
  return (
    <>
      <Box bg='#efefea' >
        <Box bg='#437111' w='100%' h='100px' p={4} color='white'>
        <Center>
          <Flex flexDirection="column" gap="2">
            <Heading>CART</Heading>
            
            <Breadcrumb>
              <BreadcrumbItem>
              <IoHomeSharp/><BreadcrumbLink href='#'>Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href='#'>Cart</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Flex>
        </Center>     
        </Box>

  {/* Table data starts here */}

      <Box w="75%" margin='3% auto'>
        <TableContainer>
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>PRODUCT</Th>
                <Th>PRICE</Th>
                <Th>QUANTITY</Th>
                <Th>TOTAL</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cartData.map((data)=>(
                <Tr key={data.id} >
                  <Td>
                    <Flex justifyContent='space-between'>
                      <IoCloseCircleSharp size='30px' onClick={()=>deleteItem(data.id)} />
                      <Image
                      boxSize='50px'
                      objectFit='cover'
                      src={data.image}
                      alt='Dan Abramov'
                      />
                    </Flex>
                  </Td>
                  <Td>
                    <Flex flexDirection='column'gap='2'>
                      <Text>{data.name}</Text>
                      <Text color='gray'>{data.weight}</Text>
                    </Flex>
                  </Td>
                  <Td>₹ {data.price}</Td>
                  <Td><Button disabled={data.count==1} onClick={()=>decrementQuantity(data)}>-</Button>{data.count}<Button onClick={()=>incrementQuantity(data)}>+</Button></Td>
                  <Td>₹ {data.price*data.count}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

  {/* Table data ends here */}
  {/* Date and Time selection */}
      <Box>
        <Center display='flex' flexDirection='column'>
          <Text>Pick a Delivery date:</Text>
          <br />
          <Input name='date' type='date' size='md' w='20%' bg='white' />
          <br/>

          <Text>Choose a time:</Text>
          <br/>
          <Select id='time'  w='20%' size='md' bg='white' name='time'>
            <option>Select a time</option>
            <option value="1">07:00AM-11:00AM</option>
            <option value="1">11:00AM-02:00PM</option>
            <option value="1">02:00PM-04:00PM</option>
            <option value="1">04:00PM-08:00PM</option>
          </Select>

          
          
          <br/>
          <Heading as='h4' size='md' color='gray' >
          Your current delivery location is Mumbai
          </Heading>
        </Center>
      </Box>
  {/* Date and Time selection end */}

  {/* Cart Total box */}

        <Box className={styles.cart_total_main_box}>
          <Flex>
            <Box w='50%'>
              <Heading as='h3' size='lg' textAlign='center'>SPECIAL INSTRUCTIONS</Heading>
              <Textarea w='90%' margin='4%' bg='white' placeholder='Here is a sample placeholder' />
            </Box>
            <Spacer/>
            <Box w='50%' >
              <Heading as='h3' size='lg' textAlign='center'>CART TOTAL</Heading>
              <Box className={styles.cart_total_box}>
                <Flex className={styles.cart_total_upper_box}>
                  <Text>Subtotal:</Text>
                  <Text>{total}</Text>
                </Flex>
                <Divider w='90%' margin='auto'  />
                <Flex className={styles.cart_total_upper_box}>
                  <Heading as='h4' size='md'>Total</Heading>
                  <Heading as='h4' size='md'>{total}</Heading>
                </Flex>
              </Box>
              <br/>
              <Progress color='black' hasStripe value={total > 300 ? 100 : (100*total)/300} />
              <Text>{total > 300 ? <b>CONGRATULATIONS FREE SHIPPING!</b>  :
              <>
                Spend <b>Rs {300-total}</b> more to reach <b>FREE SHIPPING!</b>
              </>
              }</Text>
              <br />
              <button className={styles.btn} onClick={()=>navigate('/information')} >PROCEED TO CHECKOUT</button>
              <br />
              <br />
              
              <button className={styles.btn} onClick={()=>navigate('/shop')}  >CONTINUE SHOPPING</button>
            </Box>
          </Flex>
          
        </Box>
      </Box>

    </>
  )
}

export default Cart