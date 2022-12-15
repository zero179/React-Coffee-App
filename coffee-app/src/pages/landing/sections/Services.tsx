import { Box, Flex, Text, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import ServiceCard from "../../../components/ServiceCard";
import { RiComputerLine } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";

const Services = () => {
  return (
    <div id="service">
    <Box w="full" py="60px" px="200px" bg="blue.900">
      <Flex justifyContent="space-between" alignItems="center" pb="60px">
        <Heading fontSize={42} letterSpacing="4px" color="#EFBB1A">
          What we can <br /> provide you
        </Heading>
        <Text maxW="300px" color="#EFBB1A">
          Aliquip anim id ea minim enim excepteur. Sint do qui irure
          consectetur. Nulla quis incididunt dolore veniam. Ullamco id ullamco
          cillum magna consectetur mollit elit commodo veniam nisi.
        </Text>
      </Flex>
      <HStack w="full" spacing="60px">
        <ServiceCard
          icon={RiComputerLine}
          heading="Web Design"
          description="Sint sunt eiusmod ipsum mollit exercitation occaecat commodo incididunt nulla pariatur aliqua ut reprehenderit."
        />
        <ServiceCard
        
          icon={BsPencilSquare}
          heading="Content Writing"
          description="Voluptate fugiat nisi veniam nulla enim dolore ex magna pariatur duis anim amet eiusmod."
        />
      </HStack>
    </Box>
    </div>
  )
}

export default Services