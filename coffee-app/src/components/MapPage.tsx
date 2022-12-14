import { AspectRatio, Box, Heading, HStack } from "@chakra-ui/react";
import React from "react";
import GoogleMaps from "./GoogleMaps";
const MapPage = () => {
  return(
        <Box w="full" px="200px" py="60px" bg="#4D8AAE">
          <Heading display="flex" justifyContent="center"  fontSize={42} letterSpacing="4px" color="#2D2D2D">
            Kde nás nájdete
          </Heading>
          <HStack w="full" alignItems="flex-start" spacing="70px" >
          <Box w="full">
          <AspectRatio ratio={15 / 7}>
            <GoogleMaps/>
            </AspectRatio>
          </Box>
          </HStack>
        </Box>
      )
    }

export default MapPage