import React from 'react'
import { Flex, Heading, HStack, Link,useColorMode, Button, useColorModeValue } from "@chakra-ui/react";

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
const Header = () => {
  
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.300", "#4D8AAE")
  const color = useColorModeValue("gray.900","#EFBB1A")
  return (
    <Flex
    bg={bg} 
    color={color}
      px="200px"
      py="20px"
      width="full"
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <Flex alignItems="flex-end">
        <Heading
        bg={bg} 
        color={color}
          mr="60px"
          fontSize={20}
          letterSpacing="1.5px"
          as='b'
        >
          <Link href='/'  _hover={{ color: "#2D2D2D" ,transitionDuration: '0.2s',
    transitionTimingFunction: "ease-in-out"}}>LOGO</Link>
        </Heading>
        
        <HStack bg={bg} 
    color="#2D2D2D" spacing="40px">
          <Link href='/' _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
    transitionTimingFunction: "ease-in-out"}}>Home</Link>
          <Link href='/service' _hover={{ color: "#EFBB1A",transitionDuration: '0.2s',
    transitionTimingFunction: "ease-in-out" }}>Service</Link>
          <Link href='/about' _hover={{ color: "#EFBB1A",transitionDuration: '0.2s',
    transitionTimingFunction: "ease-in-out" }}>About us</Link>
    <Link href='/offer' _hover={{ color: "#EFBB1A",transitionDuration: '0.2s',
    transitionTimingFunction: "ease-in-out" }}>We Offer</Link>
        </HStack>
      </Flex>
      <Button onClick={toggleColorMode } >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
    </Flex>
  )
}

export default Header