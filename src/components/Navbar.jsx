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
                      src="data:image/png;base64,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"
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
                      LOCATION
                    </Link>
                  </li>
                </ul>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
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

                <Button
                  className="btn1"
                  ref={btnRef}
                  _hover="none"
                  bg="rgb(236,236,236)"
                  onClick={onOpen}
                >
                  <span className="material-icons bag">
                    shopping_bag_outlined
                  </span>
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

            {/* third box end here */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
