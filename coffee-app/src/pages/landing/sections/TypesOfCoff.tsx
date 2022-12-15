import { Box, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import WorkMethodCard from "../../../components/WorkMethodCard";
import jedna from "../../../assets/1.png";
import dva from "../../../assets/2.png";
import tri from "../../../assets/3.png";
import styri from "../../../assets/4.png";
import pat from "../../../assets/5.png";
import sest from "../../../assets/6.png";

const TypesOfCoff = () => {
  return (
    <div id="types">
    <Box w="full" px="200px" py="60px"  bg="blue.900">
      <Heading fontSize={42} letterSpacing="4px" color="#EFBB1A" pb="80px">
        Aké kávy ponúkame?
      </Heading>
      <HStack w="full" alignItems="flex-start" spacing="75px">
        <WorkMethodCard
          imagePath={jedna}
          heading="Black"
          description="Incididunt culpa qui quis incididunt amet adipisicing. Dolor cillum Lorem ad pariatur ea cillum quis ipsum aliquip labore labore. Deserunt ex deserunt dolor dolore sunt tempor sunt nulla occaecat."
        />
        <WorkMethodCard
          imagePath={dva}
          heading="Galão"
          description="Anim reprehenderit culpa duis veniam anim ex ea et eiusmod est. Amet dolor non magna dolor enim sint pariatur voluptate elit pariatur Lorem ad amet. "
        />
        <WorkMethodCard
          imagePath={tri}
          heading="Doppio"
          description="Amet ut commodo officia eu minim esse magna veniam non minim. Laborum nostrud excepteur deserunt eiusmod exercitation enim esse. Voluptate Lorem aute non laborum et incididunt. Consequat proident dolore cupidatat deserunt aute Lorem quis."
        />
        </HStack>
        <HStack w="full" alignItems="flex-start" spacing="75px">
        <WorkMethodCard
          imagePath={styri}
          heading="Americano"
          description="Incididunt culpa qui quis incididunt amet adipisicing. Dolor cillum Lorem ad pariatur ea cillum quis ipsum aliquip labore labore. Deserunt ex deserunt dolor dolore sunt tempor sunt nulla occaecat."
        />
        <WorkMethodCard
          imagePath={pat}
          heading="Cappuccino"
          description="Anim reprehenderit culpa duis veniam anim ex ea et eiusmod est. Amet dolor non magna dolor enim sint pariatur voluptate elit pariatur Lorem ad amet. "
        />
        <WorkMethodCard
          imagePath={sest}
          heading="Latte"
          description="Amet ut commodo officia eu minim esse magna veniam non minim. Laborum nostrud excepteur deserunt eiusmod exercitation enim esse. Voluptate Lorem aute non laborum et incididunt. Consequat proident dolore cupidatat deserunt aute Lorem quis."
        />
      </HStack>
    </Box>
    </div>
  )
}

export default TypesOfCoff