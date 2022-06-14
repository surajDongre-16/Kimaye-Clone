import React from "react";
import { Box } from "@chakra-ui/react";
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
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div className="big_box">
      <Box className={navcss.box} w="100%" p={2} color="white">
        Delivery in Mumbai and Delhi | Same day delivery!
      </Box>

      {/* Navbar Start from here */}

      <nav className="navbar navbar-expand-lg nav">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse wrapper"
            id="navbarSupportedContent"
          >
            {/* first box start from here */}

            <div>
              <form>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      SHOP
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Learn">
                      LEARN
                    </Link>
                  </li>
                  {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle"to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item"to="/">Action</Link></li>
            <li><Link className="dropdown-item"to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item"to="/">Something else here</Link></li>
          </ul>
        </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/Grow">
                      GROW
                    </Link>
                  </li>
                </ul>
              </form>
            </div>

            {/* first box end  here */}

            {/* second box start from here */}

            <div>
              <form>
                <li className="nav-item logo">
                  <Link className="nav-link" to="/">
                    <img
                      className={navcss.logo} alt="Kimaye"
                      src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204"
                    />
                  </Link>
                </li>
              </form>
            </div>

            {/* second box start  here */}

            {/* third box start from here */}

            <div className="right_box">
              <form className="d-flex" role="search">
                <ul className="ul1">
                  <li className="nav-item">
                    <Link className="nav-link" to="/Location">
                     Location
                    </Link>
                  </li>
                </ul>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className={navcss.iconbtn} type="submit">
                <SearchIcon  w={4} h={4}  />
                </button>
              </form>
           
              <form>
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
                  className="btn1"
                  ref={btnRef}
                  _hover="none"
                  bg="rgb(236,236,236)"
                  onClick={onOpen}
                >
                    <span>
                    bag
                  </span>
                </Button>
                <Drawer
                  isOpen={isOpen}
                  placement="right"
                  onClose={onClose}
                  finalFocusRef={btnRef}
                 
                >
                  <DrawerOverlay />
                  <DrawerContent  >
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

            {/* third box end here */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
