import React from 'react'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Divider, Flex, Heading, Image, Input, Radio, Spacer, Text, Textarea } from '@chakra-ui/react'
import styles from "./payament.module.css"
import { AiFillQuestionCircle } from "react-icons/ai";
import { ChevronRightIcon } from '@chakra-ui/icons'

const Payment = () => {
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

                        <BreadcrumbItem color='red' >
                            <BreadcrumbLink fontSize='xs' >Information</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
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
                            <Text>surajdongre8@gmail.com</Text>
                            <Spacer/>
                            <Button bg='none' color='red' >Change</Button>
                        </Flex>
                        <Divider w='90%' margin=' 0 auto 3%' borderBottom='1px solid rgb(207, 206, 206)' />
                        <Flex w='90%' margin='auto'>
                            <Text color='gray' >Ship to</Text>
                            <Spacer/>
                            <Text>surajdongre8@gmail.com</Text>
                            <Spacer/>                            
                            <Button bg='none' color='red' >Change</Button>
                        </Flex>
                    </Box>
                    <Box marginTop='5%'>
                        <Heading as='h4' size='md' fontWeight='200px'>Shipping Method</Heading>
                        <Box marginTop='5%' bg='white' display='flex' justifyContent='space-between' fontSize='15px' padding='3%' borderRadius='5px' border='1px solid rgb(207, 206, 206)' >
                        <Radio size='md' name='1' colorScheme='red' defaultChecked>
                            Delivery charges
                        </Radio>
                        <Text>₹50.00</Text>
                        </Box>
                    </Box>
                    <br />
                    <Button bg='#437111 ' color='white' size='lg' padding='5% 3%' marginRight='5%' >Continue to payment</Button>
                    <a href='#'>Return to information</a>
                    <Divider margin='35% auto 0 ' borderBottom='1px solid rgb(207, 206, 206)' />
                    <Box className={styles.a}>
                <a  href="#">Refund policy</a><a href="#">Shipping policy</a><a href="#">Privacy policy</a><a href="#">Terms of service</a>

                </Box>
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

export default Payment