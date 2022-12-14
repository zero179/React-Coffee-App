import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import ManPortrait from "../assets/coffee.png";


const TestimonialCard = () => {
  return (
    <Box w="full" px="40px" py="20px" bg="white" border="solid" borderColor="blue.700" borderWidth="thin" _hover={{ shadow: "lg",
    transform: 'translateY(-5px)',
    transitionDuration: '0.2s',
    transitionTimingFunction: "ease-in-out",
    opacity: "75%",
    cursor: "pointer"}}>
      <Flex alignItems="center" pb="20px">
        <Avatar src={ManPortrait} mr="20px"></Avatar>
        <Box>
          <Heading fontSize={16} color="blue.900" mb="2px">
            Zac Walker
          </Heading>
          <Text fontSize={12} color="gray.500">
            Founder of mock.io
          </Text>
        </Box>
      </Flex>
      <Text color="blue.700" fontSize={14}>
        "Exercitation incididunt incididunt officia velit ullamco nulla
        reprehenderit labore ullamco. Consectetur laborum velit est magna veniam
        id minim deserunt. Aliquip culpa nisi irure est sunt cillum duis."
      </Text>
    </Box>
  )
}

export default TestimonialCard