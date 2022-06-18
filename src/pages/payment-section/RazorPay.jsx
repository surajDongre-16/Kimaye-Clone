import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { Box, Button, Checkbox, Flex, Image, Input, InputGroup, InputLeftAddon, InputRightElement, Text } from '@chakra-ui/react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
  } from '@chakra-ui/react'
import React from 'react'
import styles from "./payament.module.css"
import razorpay from '../../assests/razor.png'
import { FaRegEdit } from "react-icons/fa";
import { BsCreditCard2Back } from "react-icons/bs";
import { RiSpeedLine,RiBankFill } from "react-icons/ri";
import { GiWallet } from "react-icons/gi";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const RazorPay = () => {
    const navigate=useNavigate()
    const [trig,setTrig]=useState(false)
    const [final,setFinal]=useState(false)
    let data= JSON.parse(localStorage.getItem("userInfo"))

  return (
    <Box className={styles.razorBody} >
        <Box className={styles.razor_Inner_Box} >
            <Box bg='#dc3544' h='150px' padding='5%' display='flex' >
                <Image bg='white' h='100px' borderRadius='5px' src='https://cdn.razorpay.com/logos/FaWkVdgu7SyEYi_medium.png' />
                <Text marginLeft='10%' color='white' fontSize='25px' >₹ {data.total}</Text>
                <Text className={styles.close} onClick={()=>navigate('/payment')} >+</Text>
            </Box>
            
            <Box w='90%' margin='2% auto' >
                {final ? 
                 <>
                    <Text>Add New Card</Text>
                    <Flex justifyContent='space-between' marginBottom='5%'>
                    <Popover>
                        <PopoverTrigger>
                        <Input focusBorderColor='none' placeholder='Card Number' w='60%' borderBottom='1px solid red' borderRadius='none' border='none'/>
                        </PopoverTrigger>
                        <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>Please enter a valid card number.</PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Input focusBorderColor='none' placeholder='Expiry' w='30%' borderBottom='1px solid red' borderRadius='none' border='none' />
                    </Flex>
                    <Flex justifyContent='space-between' marginBottom='8%'>
                    <Popover>
                        <PopoverTrigger>
                        <Input focusBorderColor='none' placeholder='Card Holder name' w='60%' borderBottom='1px solid red' borderRadius='none' border='none'/>
                        </PopoverTrigger>
                        <PopoverContent color='white' bg='blue.800' borderColor='blue.800'>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>Please enter name on your card.</PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Popover>
                        <PopoverTrigger>
                        <Input focusBorderColor='none' placeholder='CVV' w='30%' borderBottom='1px solid red' borderRadius='none' border='none'/>
                        </PopoverTrigger>
                        <PopoverContent w='80%'color='white' bg='blue.800' borderColor='blue.800' >
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverBody>It's a 3 digit code printed on back of your card.</PopoverBody>
                        </PopoverContent>
                    </Popover>
                    </Flex>
                    <Checkbox colorScheme='red' defaultChecked>
                    Save card securely for future payment
                    </Checkbox>
                    <Box marginTop='2%'>
                        <Button  h='60px' w='100%' borderRadius='0' bg='#dc3544'
                        colorScheme='red' color='white' onClick={()=>navigate('/orderconfirm')} >PAY ₹ {data.total}</Button>
                    </Box>
                 </> 
                : trig ? 
                <>
                    <Button colorScheme='red' bg='white' color='gray' fontSize='14px' > <FaRegEdit fontSize='25px' color='red'/> +91{data.mobileNo} | {data.email}</Button>
                    <Box overflow='scroll' h='300px' >
                        <Text margin='5%' color='gray' fontSize='14px' >CARDS, UPI & MORE</Text>
                    <Button className={styles.razor_btn} borderRadius='none' onClick={()=>setFinal(!final)} >
                        <Flex  w='90%' >    
                        <BsCreditCard2Back color='red' fontSize='25px'/>
                        <Box marginLeft='10%' display='flex' flexDirection='column'>
                            <Text textAlign='left' >Card</Text>
                            <Text fontSize='14px' color='gray' >Visa,MasterCard,RuPay & More</Text>
                    </Box>
                        </Flex>
                    </Button>
                    <Button className={styles.razor_btn} borderRadius='none'>
                        <Flex w='90%' >    
                        <RiSpeedLine color='red' fontSize='25px'/>
                        <Box marginLeft='10%' display='flex' flexDirection='column'>
                            <Text textAlign='left' >UPI / QR</Text>
                            <Text fontSize='14px' color='gray' >GooglePay,PhonePay & more</Text>
                        </Box>
                        </Flex>
                    </Button>
                    <Button className={styles.razor_btn} borderRadius='none'>
                        <Flex  w='90%' >    
                        <RiBankFill color='red' fontSize='25px'/>
                        <Box marginLeft='10%' display='flex' flexDirection='column'>
                            <Text textAlign='left' >Netbanking</Text>
                            <Text fontSize='14px' color='gray' >All Indian banks</Text>
                    </Box>
                        </Flex>
                    </Button>
                    <Button className={styles.razor_btn} borderRadius='none'>
                        <Flex w='90%' >
                        <GiWallet color='red' fontSize='25px'/>
                            <Box marginLeft='10%' display='flex' flexDirection='column'>
                                <Text textAlign='left'>Wallet</Text>
                                <Text fontSize='14px' color='gray' >Amazon Pay & More</Text>
                            </Box>
                        </Flex>
                        </Button>
                    </Box>
                </>
                :  
                <>
                    <Text margin='2%' color='gray' fontSize='14px' >Country</Text>
                    <InputGroup >
                        <InputLeftAddon children='+91' />
                        <Input type='tel' placeholder='phone number' value={data.mobileNo} />
                        <InputRightElement
                        pointerEvents='none'
                        children={<PhoneIcon color='gray.400' />}
                        />
                    </InputGroup>
                    <Text margin='3%' color='gray' fontSize='14px' >Email</Text>
                    <InputGroup >
                        <Input type='email' outline='none' value={data.email} placeholder='Email address' />
                        <InputRightElement
                            pointerEvents='none'
                            children={<EmailIcon color='gray.400' />}
                        />    
                    </InputGroup>
                    <br /><br /><br/><br/><br/>
                    <Box marginTop='2%'>
                        <Button  h='60px' w='100%' borderRadius='0' bg='#dc3544' colorScheme='red' color='white' onClick={()=>setTrig(!trig)} >PROCEED</Button>
                    </Box>
                </>  } 
                                
                   
    
                    
        
            </Box>
        </Box>
        <Box w='15%' margin='auto'  >
            <Button borderRadius='5px' border='1px solid gray' bg=' rgb(54, 54, 54)' color='gray' colorScheme='black' >Secured by<Image h='25px'  bg=' rgb(54, 54, 54' color='white' src={razorpay} />
            </Button>
        </Box>
           
        
    </Box>
  )
}

export default RazorPay