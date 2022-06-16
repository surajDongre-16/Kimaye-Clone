import React, { useEffect, useRef, useState } from "react";
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
import navcss from "../components/navcss.module.css";
import Loca from "./Loca.module.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Location = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("2000px");

  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const [pin, setPin] = useState("");
  const ref = useRef();

  const handleClick = () => {
    if (!pin) {
      ref.current.focus();
    }

    fetch(`https://api.postalpincode.in/pincode/${pin}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0].PostOffice[0].Circle == "Delhi") {
          setPin(data[0].PostOffice[0].Circle);
          console.log(data[0].PostOffice[0].Circle);
        } else if (data[0].PostOffice[0].District == "Mumbai") {
          setPin(data[0].PostOffice[0].District);
          console.log(data[0].PostOffice[0].District);
        } else {
          setPin("");
          alert(
            "Sorry! We do not deliver to your Pincode currently.Showing you results for Delhi & Mumbai."
          );
        }
      });
  };

  return (
    <div>
      <Button
        className={Loca.btn}
        onClick={() => handleSizeClick(size)}
        key={size}
        m={4}
        _hover="none"
        bg="rgb(236,236,236)"
      >
        {
          <div>
            <img className={Loca.loc_logo} src={Loc} />
            <sub>
              <b>{pin}</b>
            </sub>
          </div>
        }
      </Button>

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
              placeholder="Enter Pincode of your area..."
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
