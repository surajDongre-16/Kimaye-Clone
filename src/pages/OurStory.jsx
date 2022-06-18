import React from "react";
import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import ourStory from "../assests/our-story.PNG";
// import styles from "./ourstory.module.css";
import "./ourstory_g.css";
import FounderCarousel from "../components/FounderCarousel";

const OurStory = () => {
  return (
    <>
    <Box id="ourStory">
      <Box className="banner">
        <Image className="banner-image" src={ourStory} />
      </Box>
      <Box className="trust_section">
        <Flex className="div_display_flex w70" py={6}>
          <Box w={"40%"}>
            <Image src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Box.png?v=1602082370" />
          </Box>
          <Box w={"60%"}>
            <Box>
              <Heading as={"h2"} size="2xl" className="heading_section" py={5}>
                KIMAYE WANTS TO GIVE YOU ASSURANCE AND EARN YOUR TRUST
              </Heading>
            </Box>
            <Text py={5} className="para_text_section">
              by consistently delivering the safest and highest-quality fruits
              at your doorstep. Our roots lie in the principles of cooperation
              and partnership.
            </Text>
            <Text py={5} className="small_para_text_section">
              Since 2009, we have focused on building a brand that promises
            </Text>
            <Flex className="brand_section">
              <Box className="brand_box">
                <Image src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/safety.png?v=1600154657" />
                <Text>Unparalleled safety</Text>
              </Box>
              <Box className="brand_box">
                <Image src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/quality.png?v=1600154658" />
                <Text>Benchmark quality</Text>
              </Box>
              <Box className="brand_box">
                <Image src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/consistency.png?v=1600154657" />
                <Text>Highest consistency</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box className="safest_fruits_section">
        <Flex className="div_display_flex w70">
          <Box className="safest_fruit_box" w={"40%"}>
            <Image
              className="lazyloaded"
              src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Guy.png?v=1600760866"
            />
          </Box>
          <Box className="safest_fruit_box" w={"60%"}>
            <Text className="safest_fruits_para_text" p={5}>
              From being the largest exporter of pomegranates and bananas to
              stepping into the domestic retail market, we've come a long way by
              adding more colours to your plate.
            </Text>
            <Text className="safest_fruits_para_text" p={5}>
              We work with the farmers from the time they plant the seed. Our
              fruits meet international safety standards at every stage of
              growing, sourcing, packaging, and delivery. We've worked with
              farmers and innovated farming and delivery techniques for better
              shelf life and traceability while meeting the most stringent
              safety norms.
            </Text>
            <Text className="safest_fruits_para_text" p={5}>
              Our accolades are only a part of our journey. It's our mantra —{" "}
              <span className="red_text">safest fruits, always</span> —
              that we wear as a badge of honour.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box className="success_story_section">
        <Box className="grass">
          <Image src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/grass.png?v=1600154657" />
        </Box>
        <Box className="container">
          <Box className="heading_section story_heading">
            <Box className="success_heading">
              <Image
                className="green lazyloaded"
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/green-leaves.png?v=1600154657"
              />
              <Heading as={"h2"} size="md">
                An Inspiring Success Story
              </Heading>
            </Box>
          </Box>
          <Text className="para_text_section text_center">
            The husband-wife duo who weaved a fruitful journey.
          </Text>
          <Flex className="div_display_flex pdng_left_right story_mrgn_top">
            <Box className="pdng_right" w={"60%"}>
              <Text className="safest_fruits_para_text">
                Kimaye began as a collaborative effort by a husband-wife duo who
                left their cushy carriers to start INI farms. The results?
                Kimaye becomes India's first brand to retail fresh fruits in the
                USA. While one looks after the operations, the other manage
                sales and marketing. Meet the founders of Kimaye: Purnima and
                Pankaj Khandelwal.
              </Text>
              <Image
                className="right-arrow display-none lazyloaded"
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/right-arrow.png?v=1600154658"
              />
            </Box>
            <Box w={"40%"}>
              <Box className="story-img">
                <Image
                  className="lazyloaded"
                  src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/story-01.png?v=1600154659"
                />
                <Text className="shot_on_location_txt story_1">
                  Shot on Location
                </Text>
              </Box>
            </Box>
          </Flex>
          <Flex className="div_display_flex pdng_left_right row_reverse factory_story">
            <Box w={"60%"} className="pdng_left IIT_div">
              <Text className="safest_fruits_para_text story_pdng_btm">
                An IIT/IIM/McKinsey Alumnus, Pankaj decided to pursue
                horticulture. He found this to be an ideal combination of art
                and science with an ability to make a real difference in the
                life of farmers. Purnima, an economics graduate and MBA comes
                from a business family. An entrepreneur at core, Purnima found
                her passion in building an Indian-origin Global Fruit Brand.
              </Text>
              <Image
                className="left-arrow display-none lazyloaded"
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/left-arrow.png?v=1600154658"
              />
            </Box>
            <Box w={"40%"}>
              <Box className="story-img">
                <Image
                  className="lazyloaded"
                  src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Our-Story_02.png?v=1600870829"
                />
                <Text className="shot_on_location_txt story_2">
                  Shot on Location
                </Text>
              </Box>
            </Box>
          </Flex>
          <Flex className="div_display_flex pdng_left_right story_mrgn_top">
            <Box w={"50%"}>
              <Text className="safest_fruits_para_text">
                Way back in 2009, both of them realized that the horticulture
                sector was highly fragmented and unorganised. The duo was firm
                about having an integrated value-chain approach with focus on
                quality over quantity. They chose the 'one fruit at a time'
                approach over a whole fruit basket and began supplying
                pomegranates to domestic and international markets. Today, INI
                has become one of the largest exporter of pomegranates, bananas,
                and coconuts.
              </Text>
              <Image
                className="right-arrow display-none lazyloaded"
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/right-arrow.png?v=1600154658"
              />
            </Box>
            <Box w={"50%"}>
              <Box className="story-img">
                <Image
                  className="lazyloaded"
                  src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Wooden-Board.png?v=1600760867"
                />
              </Box>
            </Box>
          </Flex>
          <Flex className="div_display_flex pdng_left_right row_reverse story_mrgn_top">
            <Box w={"60%"} className="pdng_left">
              <Text className="safest_fruits_para_text story_pdng_btm">
                Pankaj and Purnima sowed the seeds of quality and efficiency and
                reaped the fruits in the form of a loyal farmer and customer
                base. One thing has stayed consistent through the years — their
                promise of providing safe fruits.
              </Text>
              <Image
                className="lazyloaded left-arrow display-none"
                src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/left-arrow.png?v=1600154658"
              />
            </Box>
            <Box w={"40%"}>
              <Box className="story-img">
                <Image
                  className="lazyloaded"
                  src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/story-04.png?v=1600154658"
                />
                <Text className="shot_on_location_txt story_4">
                  Shot on Location
                </Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box className="founder_section">
        <Box className="founder_section_inside">
          <Box className="heading_section text-center founder_heading">
            <Heading as={"h2"} size={"md"} style={{ color: "white" }}>
              Noteworthy Words by the Founders
            </Heading>
          </Box>
          <FounderCarousel />
        </Box>
      </Box>
      </Box>
    </>
  );
};

export default OurStory;
