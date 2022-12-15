import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Box, ButtonGroup, Heading, IconButton, Stack, Text, Link} from "@chakra-ui/react";
const Footer = () => {
    
  return (
    <Box w="full" bg="gray.900" px="200px" py={{ base: '12', md: '16' }} textAlign="center">
      <Stack spacing={{ base: '4', md: '5' }}>
      <Stack justify="space-between" direction="row" align="center">
      <Heading
          color="#EFBB1A"
          mr="60px"
          fontSize={20}
          letterSpacing="1.5px"
          as='b'
        >
          <Link href='/'  _hover={{ color: "#4D8AAE" ,transitionDuration: '0.2s',
    transitionTimingFunction: "ease-in-out"}}>LOGO</Link>
        </Heading>
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            color="white"
            href="#"
            _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton color="white" as="a" href="#" _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}} aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
          <IconButton
          color="white"
            as="a"
            href="#"
            _hover={{ color: "#EFBB1A" ,transitionDuration: '0.2s',
              transitionTimingFunction: "ease-in-out"}}
            aria-label="Twitter"
            icon={<FaTwitter fontSize="1.25rem" />}
          />
        </ButtonGroup>
      </Stack>
      <Text color="white"
            display="flex"
            fontWeight="normal"
          letterSpacing="1.5px">
        &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
      </Text>
    </Stack>
    </Box>
  )
}

export default Footer