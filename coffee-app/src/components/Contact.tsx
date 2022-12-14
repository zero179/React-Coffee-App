import React from 'react'
import { Box, Heading, Text,HStack,Link } from "@chakra-ui/react";
import { PhoneIcon} from '@chakra-ui/icons'

// The defau
const Contacts = () => {
  return (
    <HStack bg="#4D8AAE"><Box w="full" px="200px" py="60px" bg="#4D8AAE" pr="20px" pt="25px">
          <Heading fontSize="24px" color="#EFBB1A" pb="20px" display="flex" justifyContent="center">
              LOGO
          </Heading>
          <Text color="white" fontSize="14px" display="flex" justifyContent="center">
              Kaviareň
          </Text>
          <Text color="white" fontSize="14px" display="flex" justifyContent="center">
              SNP 16
          </Text>
          <Text color="white" fontSize="14px" display="flex" justifyContent="center">
              06601 Humenné
          </Text>
          <Text color="white" fontSize="14px" display="flex" justifyContent="center">
              IČO: 67381730
          </Text>
          <Text color="white" fontSize="14px" display="flex" justifyContent="center">
              Vedúci prevádzky - Kokot Jebnuty
          </Text>
          <HStack display="flex" justifyContent="center">
              <PhoneIcon color="#2D2D2D" />
              <Link color="white" fontSize="14px"  _hover={{ color: "#2D2D2D" ,transitionDuration: '0.2s',
    transitionTimingFunction: "ease-in-out"}}>
                  0909312893
              </Link>
          </HStack>
      </Box>
      <Box w="full" px="200px" py="60px" bg="#4D8AAE" pl="20px">
              <Heading fontSize="24px" color="#EFBB1A" pb="20px" display="flex" justifyContent="center">
                  OTVÁRACIE HODINY:
              </Heading>
              <Text color="white" fontSize="14px" display="flex" justifyContent="center">
                Pondelok:  7:30 - 21:00
              </Text>
              <Text color="white" fontSize="14px" display="flex" justifyContent="center">
              Utorok:  7:30 - 21:00
              </Text>
              <Text color="white" fontSize="14px" display="flex" justifyContent="center">
              Streda:  7:30 - 21:00
              </Text>
              <Text color="white" fontSize="14px" display="flex" justifyContent="center">
                  Štvrtok:  7:30 - 21:00
              </Text>
              <Text color="white" fontSize="14px" display="flex" justifyContent="center">
                  Piatok:  7:30 - 00:00
              </Text>
              <Text color="white" fontSize="14px" display="flex" justifyContent="center">
                  Sobota:  15:30 - 00:00
              </Text>
              <Text color="white" fontSize="14px" display="flex" justifyContent="center">
                  Nedeľa:  15:30 - 22:00
              </Text>
              <HStack display="flex" justifyContent="center">
              <Text color="white" fontSize="14px" display="flex" justifyContent="center">
                  Rezervácie na
              </Text>
                  <PhoneIcon color="#2D2D2D" />
                  <Link color="white" fontSize="14px"  _hover={{ color: "#2D2D2D" ,transitionDuration: '0.2s',
    transitionTimingFunction: "ease-in-out"}}>
                      0909312893
                  </Link>
              </HStack>
          </Box></HStack>
  )
}

export default Contacts