import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { fetchBlogPost } from "../store/blog/action";
import RecentPost from "../components/RecentPost";
import Blogs from "../components/Blogs";
// import grow_with_kimaye from "../assests/grow_with_kimaye.PNG";
import { Link } from "react-router-dom";
import "./grow_g.css";

const Grow = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlogPost());
  }, [dispatch]);

  return (
    <>
      <Box id="grow">
        <Box className="banner_grow"></Box>
        <Box
          className="page-title"
          width={"100%"}
          backgroundColor={"#437111"}
          color={"white"}
        >
          <Text className="title_heading">GROW WITH KIMAYE</Text>
          <Flex className="breadcrumbs" justifyContent={"center"}>
            <i className="fa-solid fa-house"></i>
            <Link to="/">Home</Link>
            <Text> / Archive by Category "Grow with Kimaye"</Text>
          </Flex>
          <Box className="hidden">
            <Flex className="title_links" justifyContent={"center"} gap={4}>
              <Link className="link" to="#">
                NUTRITION
              </Link>
              <Link className="link" to="#">
                LIFESTYLE MANAGEMENT
              </Link>
              <Link className="link" to="#">
                CHILD'S NUTRITION
              </Link>
              <Link className="link" to="#">
                STORAGE AND HANDLING
              </Link>
            </Flex>
          </Box>
        </Box>
        <Box backgroundColor={"#ececec"} maxW={"100%"}>
          <Flex className="grow_flex">
            <Box className="grid_container">
              <Box className="grow_grid">
                {blogs.map((blog) => (
                  <Box key={blog.id}>
                    <Blogs data={blog} />
                  </Box>
                ))}
              </Box>
            </Box>
            <Box pl={5}>
              <Box p={5}>
                <Heading as={"h4"} size={"md"}>
                  SEARCH
                </Heading>
                <Flex p={2}>
                  <Input
                    placeholder="Search for posts"
                    backgroundColor={"white"}
                  />
                  <Button colorScheme={"green"}>SEARCH</Button>
                </Flex>
              </Box>
              <Box p={5}>
                <Heading as={"h4"} size={"md"}>
                  CATEGORIES
                </Heading>
                <Text p={2}>
                  Pick a link list to show here in your under Blog sidebar &gt;
                  Quick links link list.
                </Text>
              </Box>
              <Box p={5}>
                <Heading as={"h4"} size={"md"}>
                  RECENT POSTS
                </Heading>
                <Box p={3}>
                  {blogs.map((data) => (
                    <Box key={data.id}>
                      <RecentPost data={data} />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default Grow;
