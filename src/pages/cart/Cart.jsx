import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Center, Divider, Flex, Heading, Image, Input, Progress, Select, Spacer, Text, Textarea} from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import React from 'react'
import { IoHomeSharp, IoCloseCircleSharp } from "react-icons/io5"
import { Link, useNavigate } from 'react-router-dom'
import styles from "./cart.module.css"
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react'
import { getCartAPI } from '../../store/cart/cart.actions'

const Cart = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {cartData}=useSelector((state)=>state.cart)

  useEffect(()=>{
    if(cartData.length===0){
      dispatch(getCartAPI())
    }
  },[])
  return (
    <>
    <Box bg='#efefea'>
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
                    <IoCloseCircleSharp size='30px'/>
                    <Image
                    boxSize='50px'
                    objectFit='cover'
                    src={data.item_img}
                    alt='Dan Abramov'
                    />
                  </Flex>
                </Td>
                <Td>
                  <Flex flexDirection='column'gap='2'>
                    <Text>{data.item_name}</Text>
                    <Text color='gray'>{data.item_weigth}</Text>
                  </Flex>
                </Td>
                <Td>₹ {data.item_price}</Td>
                <Td><Button onClick={()=>dispatch()} >-</Button> <Button onClick={()=>dispatch()}>+</Button></Td>
                <Td>₹ {data.total_price}</Td>
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
        <Input type='date' size='md' w='20%' bg='white' />
        <br/>

        <Text>Choose a time:</Text>
        <br/>
        <Select w='20%' size='md' bg='white'>
          <option>Select a time</option>
          <option value="">07:00AM-11:00AM</option>
          <option value="">11:00AM-02:00PM</option>
          <option value="">02:00PM-04:00PM</option>
          <option value="">04:00PM-08:00PM</option>
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
                <Text>200</Text>
              </Flex>
              <Divider w='90%' margin='auto'  />
              <Flex className={styles.cart_total_upper_box}>
                <Heading as='h4' size='md'>Total</Heading>
                <Heading as='h4' size='md'>200</Heading>
              </Flex>
            </Box>
            <br/>
            <Progress hasStripe value={64} />
            <Text>Spend <b>Rs 143</b> more to reach <b>FREE SHIPPING!</b></Text>
            <br />
            <button className={styles.btn} onClick={()=>navigate('/information')} >PROCEED TO CHECKOUT</button>
            <br />
            <br />
            
            <button className={styles.btn}  >CONTINUE SHOPPING</button>
          </Box>
        </Flex>
         
      </Box>
      </Box>

    </>
  )
}

export default Cart