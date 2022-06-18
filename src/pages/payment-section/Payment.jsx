import React from 'react'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Divider, Flex, Heading, Image, Spacer, Text } from '@chakra-ui/react'
import styles from "./payament.module.css"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { RiWindowLine } from "react-icons/ri"
import { useNavigate } from 'react-router-dom';
import SelectedProduct from '../../components/SelectedProduct';

const Payment = () => {
    const navigate=useNavigate()
    let data= JSON.parse(localStorage.getItem("userInfo"))

  return (
    <div className={styles.payment_main_box}>
        <Flex>
            <Box className={styles.payment_left_box} h='auto' >
                <Box className={styles.payment_left_inner}>
                    <Image src='https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_250x.png?v=1596288204' marginBottom='2%' />
                    <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' fontSize='xs' />}>
                        <BreadcrumbItem color='red' >
                            <BreadcrumbLink fontSize='xs' href='#'>Cart</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem color='red' >
                            <BreadcrumbLink fontSize='xs' >Information</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem color='red'>
                            <BreadcrumbLink fontSize='xs'>Shipping</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink fontSize='xs'>Payment</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <br />
                    <Box bg='white' borderRadius='5px'border='1px solid rgb(207, 206, 206)' >
                        <Flex w='90%' margin='auto' paddingTop='2%' >
                            <Text color='gray' >Contact</Text>
                            <Spacer/>
                            <Text>{data.email}</Text>
                            <Spacer/>
                            <Button bg='none' color='red' onClick={()=>navigate('/information')} >Change</Button>
                        </Flex>
                        <Divider w='90%' margin=' 0 auto 3%' borderBottom='1px solid rgb(207, 206, 206)' />
                        <Flex w='90%' margin='auto'>
                            <Text color='gray' >Ship to</Text>
                            <Spacer/>
                            <Text>{data.address}</Text>
                            <Spacer/>                            
                            <Button bg='none' color='red' onClick={()=>navigate('/information')} >Change</Button>
                        </Flex>
                        <Divider w='90%' margin=' 0 auto 3%' borderBottom='1px solid rgb(207, 206, 206)' />
                        <Flex w='90%' margin='auto' marginBottom='3%'>
                            <Text color='gray' >Method</Text>
                            <Spacer/>
                            <Text>{data.total > 300 ? "Free Shipping" : "Delivery charges ₹50.00"}</Text>
                            <Spacer/>                            
                        </Flex>
                    </Box>
                    <Box marginTop='5%'>
                        <Heading as='h4' size='md' fontWeight='200px'>Payment</Heading>
                        <Text marginTop='2%' color='gray' >All transactions are secured and encrypted</Text>
                        <Box marginTop='5%' display='flex' bg='#fafafa' paddingBottom='5%' flexDirection='column' justifyContent='space-between' fontSize='15px' borderRadius='5px' border='1px solid rgb(207, 206, 206)' >
                            <Box bg='white' display='flex' h='70px' padding='2%' justifyContent='space-between' fontSize='15px' borderBottom='1px solid rgb(207, 206, 206)' >                            
                                <Text>Razorpay secure (UPI, Cards, Wallets, NetBanking)</Text>
                                <Box className={styles.logos} >
                                    <Image w='60px' h='40px' src='data:image/png;base64,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'/>
                                    <Image w='60px' h='40px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfrwuRMtbZ_c60LG486a-EdukQJwb1cjATGg&usqp=CAU' />
                                    <Image w='60px' h='40px' src='https://upload.wikimedia.org/wikipedia/commons/0/0f/RuPay-Logo.png' />
                                    <Image w='60px' h='40px' src='https://1000logos.net/wp-content/uploads/2021/03/Paytm_Logo.jpg' />
                                    <Text color='gray' fontSize='12px'>and more...</Text>
                                </Box>
                            </Box>
                            <Flex flexDirection='column' alignItems='center'>
                            <RiWindowLine fontSize='200px' color='gray' fontWeight='50px'/>
                            <Text w='60%' margin='auto' fontSize='12px' textAlign='center' >After clicking “Complete order”, you will be redirected to Razorpay Secure (UPI, Cards, Wallets, NetBanking) to complete your purchase securely.</Text>
                            </Flex>
                        </Box>
                    </Box>
                    <br />
                    <Box display='flex' alignItems='center' >
                        <Button bg='#437111 ' color='white' size='lg' padding='5% 3%' colorScheme='teal'
                         marginRight='5%' onClick={()=>navigate('/razorpay')} >Complete order</Button>
                        <Text color='red' onClick={()=>navigate('/shipping')}>Return to shipping</Text>
                    </Box>
                    <Divider margin='10% auto 0 ' borderBottom='1px solid rgb(207, 206, 206)' />
                    <Box className={styles.a}>
                <a  href="#">Refund policy</a><a href="#">Shipping policy</a><a href="#">Privacy policy</a><a href="#">Terms of service</a>

                </Box>
                </Box>
                
            </Box>
            {/* Left side container ends */}

            {/* Right side container starts */}

            <Box>
                <Box margin='15%' w='130%' >
                    <SelectedProduct/>
                </Box>o
            </Box>
        </Flex>
    </div>
  )
}

export default Payment