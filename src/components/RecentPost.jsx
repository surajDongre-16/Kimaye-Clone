import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

const RecentPost = ({data}) => {
  return (
    <Flex borderBottom={'1px solid'} pb={5} pt={5}>
        <Box w={"30%"}>
            <Image src={data.article_grid_image_src} w={'100%'} />
            <Text>{data.post_date_day}{data.post_date_month}</Text>
        </Box>
        <Box w={'70%'} pl={3}>
            {data.entry_title}
        </Box>
    </Flex>
  )
}

export default RecentPost