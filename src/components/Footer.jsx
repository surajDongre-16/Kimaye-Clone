import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import footercss from "./footercss.module.css";

const Footer = () => {
  return (
    <div>
      <Box className={footercss.wrapper} w="100%" p={8} color="black">
        <Box className={footercss.box} w="100%" p={6}>
          <Box w="100%" p={6}></Box>
          <Box className={footercss.box1} w="60%" p={6}>
            <Link
              className={footercss.hover}
              to="//kimaye.com/pages/faqs-1"
              target="_blank"
            >
              FAQ's
            </Link>
            <br />
            <Link
              className={footercss.hover}
              to="//kimaye.com/pages/contact-us"
              target="_blank"
            >
              Contact Us
            </Link>
            <br />
            <Link
              className={footercss.hover}
              to="//kimaye.com/pages/shipping-return-policy"
              target="_blank"
            >
              Shipping & Return Policy
            </Link>
            <br />
            <Link
              className={footercss.hover}
              to="//kimaye.com/pages/terms-conditions"
              target="_blank"
            >
              Terms & Conditions
            </Link>
            <br />
            <Link
              className={footercss.hover}
              to="//kimaye.com/pages/privacy-policy"
              target="_blank"
            >
              Privacy Policy
            </Link>
            <br />
          </Box>
          <Box className={footercss.box2} w="60%" p={6}>
            <h2>Follow us on</h2>
            <div className={footercss.boximg}>
              <Link to="//www.facebook.com/KimayeFruits/" target="_blank">
                <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/fb-icon.png?v=1599571756" />
              </Link>
              <Link to="//www.instagram.com/kimayefruits/" target="_blank">
                <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/insta-icon.png?v=1599571756" />
              </Link>
              <Link to="//twitter.com/kimaye_ini" target="_blank">
                <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/twitter-icon.png?v=1599571756" />
              </Link>
            </div>
          </Box>
        </Box>

        <Box className={footercss.box3} w="100%" p={4}>
          <Box w="100%" p={4}></Box>

          <Box className={footercss.p} w="60%" p={4}>
            <p>Copyright©2020. All Rights Reserved</p>
          </Box>
          <Box className={footercss.linkbox} w="60%" p={4}>
            <div>
              <div className={footercss.made}>
                <Link className={footercss.hover1} to="//www.ting.in/">
                  MADE
                </Link>
              </div>
              <div className={footercss.by}>
                <Link className={footercss.hover1} to="//www.ting.in/">
                  BY
                </Link>
              </div>
            </div>
            <Link
              className={footercss.link}
              to="//www.ting.in/"
              target="_blank"
            >
              ting
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
