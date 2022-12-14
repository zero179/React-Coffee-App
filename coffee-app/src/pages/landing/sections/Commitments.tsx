import { AspectRatio, Box, Flex, Heading, Img, VStack } from "@chakra-ui/react";
import React from "react";
import Commitment from "../../../components/Commitment";
import PairProgramming from "../../../assets/coffee.png";

const Commitments = () => {
  return (
    <Flex
      pl="200px"
      background="#4D8AAE"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box py="60px" pr="140px">
        <Heading
          fontSize={42}
          letterSpacing="4px"
          color="whiteAlpha.900"
          pb="60px"
        >
          Commited to your
          <br /> success
        </Heading>
        <VStack alignItems="flex-start" color="#2D2D2D" spacing="30px">
          <Commitment text="Incididunt nostrud incididunt enim commodo non est incididunt irure elit." />
          <Commitment text="Incididunt incididunt ex esse eiusmod esse reprehenderit nisi nisi nostrud veniam excepteur enim esse." />
          <Commitment text="Cupidatat duis fugiat adipisicing consequat esse occaecat id adipisicing officia." />
        </VStack>
      </Box>
      <AspectRatio ratio={8 / 10} width="500px">
        <Img src={PairProgramming}  />
      </AspectRatio>
    </Flex>
  )
}

export default Commitments