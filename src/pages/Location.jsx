import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Loc from "../assests/Loc.png";
import Loca from "./Loca.module.css";
import { useNavigate } from "react-router-dom";
import { LocContext } from "../ContextApi/LocationAuth";

const Location = () => {
  const {
    handleClick,
    isOpen,
    onOpen,
    onClose,
    size,
    setSize,
    pin,
    setPin,
    ref,
    isTry,
  } = useContext(LocContext);

  
  return (
    <div>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className={Loca.modal}>
          <div>
            <img
              className={Loca.shopping}
              src="https://drpo5mjxhw4s.cloudfront.net/media/sac/popup/3.svg?v1"
            />
            <h1 className={Loca.inst}>
              We are currently available in Mumbai & Delhi. Please enter your
              pin code below to check if we deliver to your area.
            </h1>

            <input
              type="text"
              ref={ref}
              className={Loca.pin}
              placeholder="Enter Pincode..."
              maxLength={6}
              onChange={(e) => setPin(e.target.value)}
            />
          </div>

          <ModalCloseButton />
          <ModalBody pb={6}></ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              className={Loca.btn1}
              onClick={handleClick}
            >
              Done
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Location;
