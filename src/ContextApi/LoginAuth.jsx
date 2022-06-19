import React, { createContext, useEffect, useRef, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("2000px");

//   const [isTry, setIsTry] = useState(false);
  const [getLdata, setLdata] = useState([{}]);
  const ref = useRef();

//   const navigate = useNavigate();
//   const { state } = useLocation();

  const handleClick = () => {
  

    fetch(`http://localhost:8080/personal_details/${getLdata}`)
      .then((res) => res.json())
      .then((data) => {
        
          setLdata(data);
        
          console.log(data);
        

        }
      );
  };


  return (
    <LoginContext.Provider
      value={{
        handleClick,
        getLdata,
        setLdata,
        isOpen,
        onOpen,
        onClose,
        size,
        setSize,
   
        ref,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
