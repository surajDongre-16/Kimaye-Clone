import React from "react";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Blogs = ({ data }) => {
  const toShow = data.entry_content.substring(0, 100) + "...";
  return (
    <Box>
      <Box boxSize={"sm"} overflow="hidden" textAlign={"center"}>
        <Box w={"50px"} style={{ backgroundColor:"white", position:'absolute', }} m={2}>
            <Text fontSize={'xl'}>{data.post_date_day}</Text>
            <Text fontSize={'xl'}>{data.post_date_month}</Text>
        </Box>
        <Image
          src={data.article_grid_image_src}
          alt={Image}
          borderRadius={'15px'}
        />
        <Box>
          <Heading as="h4" size="sm" textAlign={"center"} p={2}>
            {data.entry_title}
          </Heading>
        </Box>
        {toShow}
      </Box>
      <Box textAlign={'center'} textDecoration={"underline"}>
        <Link to={`/Grow/${data.id}`}>Read More</Link>
      </Box>
    </Box>
  );
};

export default Blogs;
