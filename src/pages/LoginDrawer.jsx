import React, { useContext } from 'react'
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
  } from "@chakra-ui/react";
import { LoginContext } from '../ContextApi/LoginAuth';
import SignUp from './SignUp';
import { useNavigate } from 'react-router-dom';

const LoginDrawer = () => {
   
    const btnRef = React.useRef();
    const navigate=useNavigate()

    const {
        handleClick,
        isTry,
        setIsTry,
        isOpen,
        onOpen,
        onClose,
        size,
        setSize,
        pin,
        setPin,
        ref,
      } =useContext(LoginContext)



const handleSize = () => {
   navigate("/SignUp")
    onOpen();
  
  };

  const handleToHome=()=>{
    navigate("/")

  }

  return (
    <div>
 <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
                <div>
                    <h1>Sign In</h1>
                </div>
            </DrawerHeader>

            <DrawerBody>
             <Input type="email" /><br/><br/>
             <Input type="password" />
             <Button  onClick={handleToHome}
          ref={btnRef} colorScheme="blue">Login</Button>
            </DrawerBody>

            <DrawerFooter>
              
      
       <Button
      
        onClick={handleSize}
          ref={btnRef}
          
          
        >
       <span> create ac</span> 
        </Button>

{/* <SignUp/> */}
   
   
            

             
            </DrawerFooter>
          </DrawerContent>
        </Drawer>


    </div>
  )
}

export default LoginDrawer