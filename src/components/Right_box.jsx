import React from "react";
import navcss from "./navcss.module.css";

import "./navcss_g.css";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,useDisclosure
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import Bag from "../assests/Bag.png"
import Loc from "../assests/Loc.png"



const Right_box = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();


  return (
  <div className={navcss.Right_box}>
      <form className="d-flex" role="search">
        <ul className="ul1">
          <li className="nav-item">
            <Link className="nav-link" to="/Location">
                <div className={navcss.abc}>
              <img className={navcss.loc_logo} src={Loc}/><sub><b>Delhi</b></sub>
              </div>
            </Link>
          </li>
        </ul>

        <input
          className="form-control me-2 shadow-none search_input"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />

        <button className={navcss.iconbtn} type="submit">
          <SearchIcon w={4} h={4} />
        </button>
      </form>

      <form className={navcss.btn_wrapper}>
        <Button
          className="btn1"
          ref={btnRef}
          _hover="none"
          bg="rgb(236,236,236)"
          onClick={onOpen}
        >
          <span className="material-icons bag">person_outline</span>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account now</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>

        <Button
          className="btn2"
          ref={btnRef}
          _hover="none"
          bg="rgb(236,236,236)"
          onClick={onOpen}
        >
          <img className={navcss.bag_logo} src={Bag}/><sup>10</sup>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </form>
      </div>
  );
};

export default Right_box;
