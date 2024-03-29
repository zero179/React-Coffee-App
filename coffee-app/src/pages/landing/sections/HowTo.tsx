import { Box, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import WorkMethodCard from "../../../components/WorkMethodCard";
import ManOnPhone from "../../../assets/dream.png";
import ManOnLaptop from "../../../assets/coffee.png";
import WomanAtBoard from "../../../assets/kava.png";

const HowTo = () => {
  return (
    <div id="about">
    <Box w="full" px="200px" py="60px"  bg="blue.900">
      <Heading fontSize={42} letterSpacing="4px" color="#EFBB1A" pb="80px">
        How do we work?
      </Heading>
      <HStack w="full" alignItems="flex-start" spacing="75px">
        <WorkMethodCard
          imagePath={ManOnPhone}
          heading="User centered design"
          description="Incididunt culpa qui quis incididunt amet adipisicing. Dolor cillum Lorem ad pariatur ea cillum quis ipsum aliquip labore labore. Deserunt ex deserunt dolor dolore sunt tempor sunt nulla occaecat."
        />
        <WorkMethodCard
          imagePath={ManOnLaptop}
          heading="Agile development"
          description="Anim reprehenderit culpa duis veniam anim ex ea et eiusmod est. Amet dolor non magna dolor enim sint pariatur voluptate elit pariatur Lorem ad amet. "
        />
        <WorkMethodCard
          imagePath={WomanAtBoard}
          heading="Continous integration"
          
          description="Amet ut commodo officia eu minim esse magna veniam non minim. Laborum nostrud excepteur deserunt eiusmod exercitation enim esse. Voluptate Lorem aute non laborum et incididunt. Consequat proident dolore cupidatat deserunt aute Lorem quis."
        />
      </HStack>
    </Box>
    </div>
  )
}

export default HowTo