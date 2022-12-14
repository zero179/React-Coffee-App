import React from 'react'
import {useColorModeValue,useColorMode, Button}  from "@chakra-ui/react";

import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ColorModes = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.300", "blue.900")
  const color = useColorModeValue("gray.800","#ffc61a")
  return (
    <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
  )
}

export default ColorModes