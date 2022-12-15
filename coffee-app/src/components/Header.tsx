
import {useState} from 'react'
import { Flex, Heading, HStack,IconButton, Button} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon} from "@chakra-ui/icons";
import Link from 'next/link'
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
          <Link href='/'  passHref>
            <Button
              _hover={{ color: "#2D2D2D" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              variant="ghost"
              aria-label="Logo"
              as="a"
              w="100%"
              fontSize="3xl"
            >
              LOGO
            </Button>
          </Link>
        </Heading>
        
        <HStack
          color="#2D2D2D" spacing="35px">
          <Link href="/" passHref scroll={false}>
            <Button
              as="a"
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              variant="ghost"
              aria-label="Home"
              w="100%"
            >
              Home
            </Button>
          </Link>
          <Link href='#service' passHref scroll={true}>
            <Button
              as="a"
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              variant="ghost"
              aria-label="Service"
              w="100%"
            >
              Service
            </Button>
          </Link>
          <Link href='#about' passHref scroll={true}>
            <Button
              as="a"
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              variant="ghost"
              aria-label="About"
              w="100%"
            >
              About Us
            </Button>
          </Link>
          <Link href='#offer' passHref scroll={true}>
            <Button
              as="a"
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              variant="ghost"
              aria-label="Offer"
              w="100%"
            >
              Offer
            </Button>
          </Link>
          <Link href='/contact' passHref scroll={true}>
            <Button
              as="a"
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              variant="ghost"
              aria-label="Contact"
              w="100%"
            >
              Contact
            </Button>
          </Link>
          <Link href='/faq' passHref scroll={true}>
            <Button
              as="a"
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              variant="ghost"
              aria-label="Faq"
              w="100%"
            >
              FAQ
            </Button>
          </Link>
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
          <Link href='/'  passHref >
            <Button
              as="a"
              _hover={{ color: "#2D2D2D" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              variant="ghost"
              aria-label="Logo"
              w="100%"
            >
              LOGO
            </Button>
          </Link>
        </Heading>
          <Link href="/" passHref color="#2D2D2D" >
            <Button
              as="a"
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              variant="ghost"
              aria-label="Contact"
              w="100%"
            >
              Home
            </Button>
          </Link>
          <Link href='/service' passHref color="#2D2D2D">
            <Button
              as="a"
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              variant="ghost"
              aria-label="Service"
              w="100%"
            >
              Service
            </Button>
          </Link>
          <Link href='/about' passHref color="#2D2D2D">
            <Button
              as="a"
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              variant="ghost"
              aria-label="About"
              w="100%"
            >
              About
            </Button>
          </Link>
          <Link href='/offer' passHref color="#2D2D2D">
            <Button
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
              as="a"
              variant="ghost"
              aria-label="Offer"
              w="100%"
            >
              Offer
            </Button>
          </Link>
          <Link href='/contact' passHref color="#2D2D2D">
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
              w="100%"
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
            >
              Contact
            </Button>
          </Link>
          <Link href='/faq' passHref color="#2D2D2D">
            <Button
              as="a"
              variant="ghost"
              aria-label="Faq"
              w="100%"
              _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
            >
              FAQ
            </Button>
          </Link>
      </Flex>
      </Flex>
    </Flex>
    </Flex>
  )
}

export default Header