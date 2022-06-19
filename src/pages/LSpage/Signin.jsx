import React, { useState } from "react";
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

import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Flex,
  Box,
  Spacer,
  Heading,
} from "@chakra-ui/react";

import "./Signin.css";

const Signin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const [loginemail, setemail] = useState("");
  const [loginpass, setLoginPass] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fname || !lname || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("lname", JSON.stringify(lname));
      localStorage.setItem("fname", JSON.stringify(fname));
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));

      setLogin(!login);
    }
  }

  const handleClick = (loginemail, loginpass, onClose) => {
    let storedEmail = JSON.parse(localStorage.getItem("Email"));
    let storedPassword = JSON.parse(localStorage.getItem("Password"));

    if (loginemail === storedEmail && loginpass === storedPassword) {
      alert("Login Successfull");
      setIsAuth(true);
      onClose();
      navigate("/");
    } else {
      alert("Invalid Credential");
    }
  };
  return (
    <div>
      {isAuth ? (
        <div onClick={() => navigate("/")}>
          <button ref={btnRef} colorScheme="teal" onClick={onOpen}>
            <i style={{ fontSize: "20px" }} class="fa-regular fa-user"></i>
          </button>
        </div>
      ) : (
        <div>
          <button ref={btnRef} colorScheme="teal" onClick={onOpen}>
            <i style={{ fontSize: "20px" }} class="fa-regular fa-user"></i>
          </button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton style={{ color: "white" }} />
              <DrawerHeader>
                <div
                  style={{
                    border: "1px solid",
                    borderColor: "black",
                    height: "80px",
                    width: "320px",
                    marginLeft: "-25px",
                    marginTop: "-16px",
                    color: "white",
                    backgroundColor: "black",
                  }}
                >
                  <h1 style={{ marginTop: "20px", marginLeft: "20px" }}>
                    SIGN IN
                  </h1>
                </div>
              </DrawerHeader>

              <DrawerBody>
                {login ? (
                  <div className="main">
                    <form onSubmit={handleSubmit}>
                      <div className="container">
                      <div className="pr">
                        <Flex
                          minWidth="max-content"
                          alignItems="center"
                          gap="2"
                        >
                          <Box p="2">
                            <Heading>Sign In</Heading>
                          </Box>
                          <Spacer />
                        </Flex>
                      </div>
                      <div className="container1">
                        <Flex
                          minWidth="max-content"
                          alignItems="center"
                          gap="2"
                        >
                          <Spacer />
                        </Flex>
                      </div>
                      <br />
                      
                      <div>
                        <FormControl>
                          <FormLabel
                            htmlFor="name"
                            fontWeight="430"
                            color="black"
                          >
                            First Name
                          </FormLabel>
                          <Input
                            id="name"
                            placeholder="First name"
                            borderRadius="none"
                            className="form"
                            onChange={(event) => setfname(event.target.value)}
                          />
                        </FormControl>
                      </div>
                      <br />
                      <div>
                        <FormControl>
                          <FormLabel
                            htmlFor="name"
                            fontWeight="430"
                            color="black"
                          >
                            Last name
                          </FormLabel>
                          <Input
                            id="name"
                            placeholder="Last name"
                            borderRadius="none"
                            className="form"
                            onChange={(event) => setlname(event.target.value)}
                          />
                        </FormControl>
                      </div>
                      <br />
                      <div>
                        <FormControl isRequired>
                          <FormLabel
                            htmlFor="name"
                            fontWeight="430"
                            color="black"
                          >
                            Email address
                          </FormLabel>
                          <Input
                            id="name"
                            placeholder="Email address"
                            borderRadius="none"
                            className="form"
                            onChange={(event) => setEmail(event.target.value)}
                          />
                        </FormControl>
                      </div>
                      <br />
                      <div>
                        <FormControl isRequired>
                          <FormLabel
                            htmlFor="name"
                            fontWeight="430"
                            color="black"
                          >
                            Password
                          </FormLabel>
                          <Input
                            id="name"
                            placeholder="Password"
                            borderRadius="none"
                            type="password"
                            className="form"
                            onChange={(event) =>
                              setPassword(event.target.value)
                            }
                          />
                        </FormControl>
                      </div>

                      <br />
                      <br />
                      <Button
                        colorScheme="none"
                        border="2px solid black"
                        borderRadius="none"
                        color="black"
                        width="250px"
                        type="submit"
                        className="btn"
                        // onClick={() => <Login />}
                      >
                        REGISTER
                      </Button>

                      <div></div>
                      <h3 className="mainn">No account yet?</h3>
                      </div>
                    </form>
                    <Button
                      colorScheme="none"
                      color="black"
                      width="fit_content"
                      type="submit"
                      border="2px solid black"
                      borderRadius="none"
                      className="login"
                      onClick={() => setLogin(false)}
                    >
                      LOGIN
                    </Button>
                  </div>
                ) : (
                  <div>
                    <label>Email Address</label>
                    <label style={{ color: "black" }}>*</label>
                    <Input
                      placeholder="Enter Email"
                      onChange={(e) => setemail(e.target.value)}
                    />
                    <br />
                    <br />
                    <label>Password</label>
                    <label style={{ color: "black" }}>*</label>
                    <Input
                      type="password"
                      placeholder="Enter Password"
                      onChange={(e) => setLoginPass(e.target.value)}
                    />
                    <button
                      onClick={() =>
                        handleClick(loginemail, loginpass, onClose)
                      }
                      style={{
                        border: "1px solid",
                        width: "100%",
                        marginTop: "30px",
                        height: "40px",
                      }}
                    >
                      Login
                    </button>
                    <br />
                    <br />

                    <div
                      style={{
                        justifyContent: "center",
                        backgroundColor: "black",
                        display: "flex",
                        border: "1px solid",
                      }}
                    >
                      <button
                        style={{
                          width: "90%",
                          textAlign: "center",
                          color: "white",
                        }}
                      >
                        Sign in with Facebook
                      </button>
                      <img
                        style={{ width: "20%" }}
                        src="https://img.utdstc.com/icon/fe0/ab6/fe0ab67fa0de2b2681602db5708a076f50dd21106e0c2d38b9661875a37e235e:200"
                        alt=""
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        border: "1px solid",
                        justifyContent: "center",
                        backgroundColor: "black",
                        marginTop: "10px",
                        height: "45px",
                      }}
                    >
                      <button
                        style={{
                          width: "90%",
                          textAlign: "center",
                          color: "white",
                        }}
                      >
                        Sign in with Google
                      </button>
                      <img
                        style={{ width: "20%" }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyNX48M0YYch3XWgCE5gHsG5xlRE6_OYVSPg&usqp=CAU"
                        alt=""
                      />
                    </div>
                    <br />

                    <div>
                      <button
                        onClick={() => setLogin(true)}
                        style={{
                          border: "1px solid",
                          width: "100%",
                          height: "60px",
                        }}
                      >
                        Create an Account
                      </button>
                    </div>
                  </div>
                )}
              </DrawerBody>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      )}
    </div>
  );
};

export default Signin;
