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
import Shop from './Shop';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
   
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


      const handleGoToLogin=()=>{
        navigate("/Login")
        onOpen()
      }


      const handleGoToHome=()=>{
        navigate("/Login")
        onOpen()
      }

  return (
    <div>
      <Shop/>
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
                    <h1>Sign UP</h1>
                </div>
            </DrawerHeader>

            <DrawerBody>
             <Input type="email" /><br/><br/>
             <Input type="password" />
             <Button onClick={handleGoToHome} ref={btnRef} colorScheme="blue">Signup</Button>
            </DrawerBody>

            <DrawerFooter>
              
        <Button onClick={handleGoToLogin}   ref={btnRef}> Login</Button>
            
            </DrawerFooter>
          </DrawerContent>
        </Drawer>


    </div>
  )
}

export default SignUp;