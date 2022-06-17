import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Checkbox, Divider, Flex, FormLabel, Image, Input, Select, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "./payament.module.css"
import { AiFillQuestionCircle } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
const Information = () => {
    const navigate=useNavigate()
  return (
    <div className={styles.payment_main_box}>
        <Flex>
            <Box className={styles.payment_left_box}>
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
                        <Text>Already have an account? <a href='#'>Log in</a></Text>
                    </Flex>
                    <br/>
                    <Input size='lg' placeholder='Email' bg='white' marginBottom='3%' outline='1px solid gray' />
                    <br/>
                    <Checkbox colorScheme='red' defaultChecked>
                        Get order notification and delivery updates
                    </Checkbox>
                    <br /><br />
                    <Text fontSize='20px' >Shipping address</Text>
                    <br />
                    <form>
                        <FormLabel fontWeight='100px' htmlFor='country'>Country</FormLabel>
                        <Select size='lg' id='country' placeholder='Select country' bg='white' marginBottom='3%' outline='1px solid gray' >
                            <option>India</option>
                        </Select>
                        <Box marginBottom='3%' display='flex' justifyContent='space-between' > 
                            <Input size='lg' placeholder='First name' w='48%' bg='white' outline='1px solid gray' />
                            <Input size='lg' placeholder='Last name' w='48%' bg='white' outline='1px solid gray' />
                        </Box>
                        <Input size='lg' placeholder='Appartment, suit, etc. (optional)' bg='white' marginBottom='3%' outline='1px solid gray' />
                        <Flex justifyContent='space-between'  marginBottom='3%'> 
                            <Input size='lg' w='32%' placeholder='City' bg='white' outline='1px solid gray' />
                            <Select id='state' placeholder='Select state' w='32%' bg='white' outline='1px solid gray' >
                                <option>Maharashtra</option>
                            </Select>
                            <Input size='lg' w='32%' placeholder='PIN code' bg='white' outline='1px solid gray' />
                        </Flex>
                        <Input size='lg' placeholder='Mobile number for order and delivery updates ' bg='white'  marginBottom='3%' outline='1px solid gray' />
                        <Box marginBottom='3%' >
                        <input size='lg' type='checkbox'/> <label>Save this information for next time</label>
                        </Box>
                        <Button marginRight='5%' colorScheme='green' size='lg' onClick={()=>navigate('/payment')}>
                            Continue to shipping 
                        </Button>
                        <a href='#'>return to cart </a>
                        
                    </form>
                </Box>  
            </Box>
            {/* Left side container ends */}

            {/* Right side container starts */}

            <Box>
                <Box margin='15%' w='130%' >
                    <Flex justifyContent='space-between' alignItems='center'>
                        <Image border='1px solid gray' borderRadius='10px' w='70px' h='70px' src='https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Cherry-funfact_7d4aa6ea-115e-4114-883b-997e64bf56e1_small.png?v=1625033775'/>
                        <Flex flexDirection='column' paddingLeft='3%'>
                            <Text fontSize='15px' >Kimaye Cherries (Indian) (250g)</Text>
                            <Text fontSize='15px'>250g / Mumbai</Text>
                        </Flex>
                        <Spacer/>
                        <Text> ₹500</Text>
                    </Flex>
                    <br />
                    <Divider borderBottom='1px solid rgb(207, 206, 206)' />
                    <br/>
                    <Box display="flex" justifyContent='space-between' >
                        <Input fontSize='20px' placeholder='Gift card or discount code' w='70%' />
                        <Button bg='rgb(199, 199, 199)' color='white' fontSize='20px' >Apply</Button>
                    </Box>
                    <br/>
                    <Divider borderBottom='1px solid rgb(207, 206, 206)'   />
                    <br/>
                    <Box color='gray'>
                        <Flex justifyContent='space-between' marginBottom='3%'  >
                            <Text>Subtotal</Text>
                            <Text color='black' >₹200</Text>
                        </Flex>
                        <Flex justifyContent='space-between'>
                            <Text display='flex' alignItems='center' justifyContent='space-between' w='20%'>Shipping <AiFillQuestionCircle/></Text>
                            <Text fontSize='14px' >Free above Rs 300</Text>
                        </Flex>
                    </Box>
                    <br />
                    <Divider borderBottom='1px solid rgb(207, 206, 206)'/>
                    <br />
                    <Flex justifyContent='space-between'>
                        <Text fontSize='20px'>Total</Text>
                        <Text display='flex' justifyContent='space-between' alignItems='center' w='20%'><Text color='gray' fontSize='14px' >INR</Text> <Text fontSize='20px' >₹204</Text> </Text>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    </div>
  )
}

export default Information