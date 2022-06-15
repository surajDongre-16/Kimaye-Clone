import React from "react";
import { Box } from "@chakra-ui/react";
import navcss from "./navcss.module.css";

import "./navcss_g.css";

import { useState } from "react";
import Category from "./Category";
import Right_box from "./Right_box";
import LogoKimaye from "./LogoKimaye";

const Navbar = () => {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  return (
    <div className="big_box">
      <Box className={navcss.box} w="100%" p={2} color="white">
        Delivery in Mumbai and Delhi | Same day delivery!
      </Box>

      <div className={fix ? "inner_box fixed-top" : "inner_box"}>
        <Box
          // border="1px solid grey"
          w="100%"
          p={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="80px"
        >
          <Box w="30%" p={4} color="red">
            <Category />
          </Box>

          {/* ------------------------------------------------------------- */}

          <Box w="20%" p={4} display="flex" justifyContent="center">
            <LogoKimaye />
          </Box>
          {/* ------------------------------------------------------------- */}

          <Box w="50%" p={4} display="flex" justifyContent="center">
            <Right_box />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Navbar;
