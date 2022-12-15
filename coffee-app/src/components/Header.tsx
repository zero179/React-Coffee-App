
import {useState} from 'react'
import { Flex, Heading, HStack,IconButton, Button} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon} from "@chakra-ui/icons";
import NextLink from 'next/link'
const Header = () => {
  const [display, changeDisplay]=useState('none')
  return (
    <Flex>
      <Flex
        bg="#4D8AAE"
        px="200px"
        py="20px"
        width="full"
        alignItems="flex-end"
        justifyContent="space-between"
      >
      <Flex alignItems="flex-end"
        display={["none","none","flex",'flex']}
      >
        <Heading
          color="#EFBB1A"
          mr="60px"
          fontSize={20}
          letterSpacing="1.5px"
          as='b'
        >
          <NextLink href='/'  passHref >
            <Button
              _hover={{ color: "#2D2D2D" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              variant="ghost"
              aria-label="Logo"
              my={5}
              as="a"
              w="100%"
              fontSize="3xl"
            >
              LOGO
            </Button>
          </NextLink>
        </Heading>
        
        <HStack
          color="#2D2D2D" spacing="35px">
          <NextLink href="/" passHref >
            <Button
              as="a"
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
            >
              Home
            </Button>
          </NextLink>
          <NextLink href='/service' passHref >
            <Button
              as="a"
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              variant="ghost"
              aria-label="Service"
              my={5}
              w="100%"
            >
              Service
            </Button>
          </NextLink>
          <NextLink href='/about' passHref >
            <Button
              as="a"
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              variant="ghost"
              aria-label="About"
              my={5}
              w="100%"
            >
              About Us
            </Button>
          </NextLink>
          <NextLink href='/offer' passHref >
            <Button
              as="a"
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              variant="ghost"
              aria-label="Offer"
              my={5}
              w="100%"
            >
              Offer
            </Button>
          </NextLink>
          <NextLink href='/contact' passHref>
            <Button
              as="a"
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
            >
              Contact
            </Button>
          </NextLink>
          <NextLink href='/faq' passHref >
            <Button
              as="a"
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              variant="ghost"
              aria-label="Faq"
              my={5}
              w="100%"
            >
              FAQ
            </Button>
          </NextLink>
        </HStack>
      </Flex>
    </Flex>
    <Flex
      bg="#4D8AAE"
      alignItems="flex-end"
      
    >
      <IconButton
        mt={2}
        mr={2}
        aria-label="Open Menu"
        size="lg"
        bg="#4D8AAE"
        icon={<HamburgerIcon/>}
        _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
        transitionTimingFunction: "ease-in-out"}}
        display={["flex","flex","none",'none']}
        onClick={()=>changeDisplay('flex')}
      />
      <Flex
        w="100vw"
        bg="#4D8AAE"
        zIndex={20}
        h="100vh"
        position="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        display={display}
      >
        <Flex justify="flex-end">
          <IconButton
            bg="#4D8AAE"
            mt={2}
            mr={2}
            aria-label="Close Menu"
            _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
            transitionTimingFunction: "ease-in-out"}}
            size="lg"
            icon={<CloseIcon/>}
            onClick={()=>changeDisplay('none')}
          />
        </Flex>
      <Flex
        h="100vh"
        flexDir="column"
        align="center"
        justify="center"
      >
        <Heading
          color="#EFBB1A"
          fontWeight="bold"
          fontSize={20}
          letterSpacing="1.5px"
          as='b'
        >
          <NextLink href='/'  passHref >
            <Button
              as="a"
              _hover={{ color: "#2D2D2D" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              variant="ghost"
              aria-label="Logo"
              my={5}
              w="100%"
            >
              LOGO
            </Button>
          </NextLink>
        </Heading>
          <NextLink href="/" passHref color="#2D2D2D" >
            <Button
              as="a"
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
            >
              Home
            </Button>
          </NextLink>
          <NextLink href='/service' passHref color="#2D2D2D">
            <Button
              as="a"
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              variant="ghost"
              aria-label="Service"
              my={5}
              w="100%"
            >
              Service
            </Button>
          </NextLink>
          <NextLink href='/about' passHref color="#2D2D2D">
            <Button
              as="a"
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              variant="ghost"
              aria-label="About"
              my={5}
              w="100%"
            >
              About
            </Button>
          </NextLink>
          <NextLink href='/offer' passHref color="#2D2D2D">
            <Button
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              as="a"
              variant="ghost"
              aria-label="Offer"
              my={5}
              w="100%"
            >
              Offer
            </Button>
          </NextLink>
          <NextLink href='/contact' passHref color="#2D2D2D">
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
            >
              Contact
            </Button>
          </NextLink>
          <NextLink href='/faq' passHref color="#2D2D2D">
            <Button
              as="a"
              variant="ghost"
              aria-label="Faq"
              my={5}
              w="100%"
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
            >
              FAQ
            </Button>
          </NextLink>
      </Flex>
      </Flex>
    </Flex>
    </Flex>
  )
}

export default Header