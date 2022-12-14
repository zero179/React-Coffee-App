import React from 'react'
import { Box } from "@chakra-ui/react";
import Intro from './sections/Intro';
import Services from './sections/Services';
import Commitments from './sections/Commitments';
import HowTo from './sections/HowTo';
import Testimonials from './sections/Testimonials';
import GoogleMaps from '../../components/GoogleMaps';

  

const Landing = () => {
  return (
    <Box>
        <Intro/>
        <Services/>
        <Commitments/>
        <HowTo/>
        <Testimonials/>
        <GoogleMaps/>
    </Box>
  )
}

export default Landing