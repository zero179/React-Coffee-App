import React from 'react'
import { Flex, Heading, HStack, Link} from "@chakra-ui/react";

const Header = () => {

  return (
    <Flex
    bg="#4D8AAE"
      px="200px"
      py="20px"
      width="full"
      alignItems="flex-end"
      justifyContent="space-between"
    >
      <Flex alignItems="flex-end">
        <Heading
        
        color="#EFBB1A"
          mr="60px"
          fontSize={20}
          letterSpacing="1.5px"
          as='b'
        >
          <Link href='/'  _hover={{ color: "#2D2D2D" ,transitionDuration: '0.2s',
    transitionTimingFunction: "ease-in-out"}}>LOGO</Link>
        </Heading>
        
        <HStack
    color="#2D2D2D" spacing="40px">
          <Link href='/' _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
    transitionTimingFunction: "ease-in-out"}}>Home</Link>
          <Link href='/service' _hover={{ color: "#EFBB1A",transitionDuration: '0.2s',
    transitionTimingFunction: "ease-in-out" }}>Service</Link>
          <Link href='/about' _hover={{ color: "#EFBB1A",transitionDuration: '0.2s',
    transitionTimingFunction: "ease-in-out" }}>About us</Link>
    <Link href='/offer' _hover={{ color: "#EFBB1A",transitionDuration: '0.2s',
    transitionTimingFunction: "ease-in-out" }}>We Offer</Link>
    <Link href='/contact' _hover={{ color: "#EFBB1A",transitionDuration: '0.2s',
    transitionTimingFunction: "ease-in-out" }}>Contact</Link>
    <Link href='/faq' _hover={{ color: "#EFBB1A",transitionDuration: '0.2s',
    transitionTimingFunction: "ease-in-out" }}>FAQ</Link>
        </HStack>
      </Flex>
    </Flex>
  )
}

export default Header