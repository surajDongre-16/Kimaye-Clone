import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleBlog } from "../store/blog/action";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import RecentPost from "../components/RecentPost";
import { useEffect } from "react";

const Blog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {currentBlog} = useSelector((state) => state.blog);
  const {blogs} = useSelector((state) => state.blog);
  useEffect(() => {
    if (id) {
      dispatch(fetchSingleBlog(id));
    }
  }, [id, dispatch]);
  return (
    <Box backgroundColor={"#ececec"} maxW={"100%"} mt={'-40px'}>
      <Flex maxW={"80%"} margin={"auto"}>
        <Box width={"80%"}>
          <Box textAlign={"center"} p={5}>
            <Button colorScheme={"green"} m={2}>
              Grow with Kimaye
            </Button>
            <Heading as={"h2"} size={"md"}>
              {currentBlog.entry_title}
            </Heading>
          </Box>
          <Box>
            <Text>{currentBlog.text}</Text>
            <OrderedList>
              <ListItem py={3}>{currentBlog.li1}</ListItem>
              <ListItem py={3}>{currentBlog.li2}</ListItem>
              <ListItem py={3}>{currentBlog.li3}</ListItem>
              <ListItem py={3}>{currentBlog.li4}</ListItem>
              <ListItem py={3}>{currentBlog.li5}</ListItem>
              <ListItem py={3}>{currentBlog.li6}</ListItem>
              <ListItem py={3}>{currentBlog.li7}</ListItem>
              <ListItem py={3}>{currentBlog.li8}</ListItem>
              <ListItem py={3}>{currentBlog.li9}</ListItem>
              <ListItem py={3}>{currentBlog.li10}</ListItem>
            </OrderedList>
          </Box>
        </Box>
        <Box pl={5} maxW={"30%"}>
          <Box p={5}>
            <Heading as={"h4"} size={"md"}>
              SEARCH
            </Heading>
            <Flex p={2}>
              <Input placeholder="Search for posts" backgroundColor={"white"} />
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
  );
};

export default Blog;
