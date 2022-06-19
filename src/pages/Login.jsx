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
import LoginDrawer from './LoginDrawer';
import { LoginContext } from '../ContextApi/LoginAuth';

const Login = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };
  return (
    <div>
       <span
          className="btn1"
          onClick={() => handleSizeClick(size)}
          ref={btnRef}
          _hover="none"
          bg="rgb(236,236,236)"
          
        >
          <span className="material-icons bag">person_outline</span>
        </span>


        <LoginDrawer/>
    </div>
  )
}

export default Login