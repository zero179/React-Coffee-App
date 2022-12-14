import React from 'react'
import { AspectRatio, Box, Heading, Img, Text } from "@chakra-ui/react";

const WorkMethodCard = ({
    imagePath,
  heading,
  description,
}: {
  imagePath: string;
  heading: string;
  description: string;
}) => {
  return (
    <Box w="full" _hover={{ shadow: "lg",
    transform: 'translateY(-5px)',
    transitionDuration: '0.2s',
    transitionTimingFunction: "ease-in-out",
    opacity: "75%",
    cursor: "pointer"}}>
      <AspectRatio ratio={5 / 7}>
        <Img src={imagePath} pb="30px" />
      </AspectRatio>
      <Heading fontSize="24px" color="#EFBB1A" pb="20px">
        {heading}
      </Heading>
      <Text color="#EFBB1A" fontSize="14px">
        {description}
      </Text>
    </Box>
  )
}

export default WorkMethodCard