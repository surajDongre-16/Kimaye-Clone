import React from 'react'
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Divider, Flex, Heading, Image, Radio, Spacer, Text } from '@chakra-ui/react'
import styles from "./payament.module.css"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';
import SelectedProduct from '../../components/SelectedProduct';

const Shipping = () => {
    const navigate=useNavigate()
    let data= JSON.parse(localStorage.getItem("userInfo"))

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
                    <Box bg='white' borderRadius='5px' border='1px solid rgb(207, 206, 206)' >
                        <Flex w='90%' margin='auto' paddingTop='2%' paddingBottom='2%'  >
                            <Text color='gray' >Contact</Text>
                            <Spacer/>
                            <Text>{data.email}</Text>
                            <Spacer/>
                            <Text bg='none' color='red' cursor='pointer' onClick={()=>navigate('/information')} >Change</Text>
                        </Flex>
                        <Divider w='90%' margin=' 0 auto 3%' borderBottom='1px solid rgb(207, 206, 206)' />
                        <Flex w='90%' margin='auto' paddingBottom='2%'>
                            <Text color='gray' >Ship to</Text>
                            <Spacer/>
                            <Text>{data.address}</Text>
                            <Spacer/>                            
                            <Text bg='none' color='red' cursor='pointer'  onClick={()=>navigate('/information')} >Change</Text>
                        </Flex>
                    </Box>
                    <Box marginTop='5%'>
                        <Heading as='h4' size='md' fontWeight='200px'>Shipping Method</Heading>
                        <Box marginTop='5%' bg='white' display='flex' justifyContent='space-between' fontSize='15px' padding='3%' borderRadius='5px' border='1px solid rgb(207, 206, 206)' >
                        <Radio size='md' name='1' colorScheme='red' defaultChecked>
                            Delivery charges
                        </Radio>
                        <Text>{data.total > 300 ? "free shipping" : "₹50.00"}</Text>
                        </Box>
                    </Box>
                    <br />
                    <Box display='flex' alignItems='center' >
                        <Button bg='#437111' colorScheme='teal'  color='white' size='lg' padding='5% 3%' marginRight='5%' onClick={()=>navigate('/payment')} >Continue to payment</Button>
                        <Text color='red' onClick={()=>navigate("/information")}>Return to information</Text>
                    </Box>
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
                    <SelectedProduct/>
                </Box>
            </Box>
        </Flex>
    </div>
  )
}

export default Shipping