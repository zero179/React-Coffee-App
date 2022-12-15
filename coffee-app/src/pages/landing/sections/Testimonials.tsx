import { Box, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import TestimonialCard from "../../../components/TestimonialCard";

const Testimonials = () => {
  return (
    <div id="offer">
    <Box px="200px" py="60px" bg="yellow.50" >
      <Heading fontSize={42} letterSpacing="4px" color="blue.900" pb="80px">
        The people have spoken
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap="60px" flexWrap="wrap">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </Grid>
    </Box>
    </div>
  )
}

export default Testimonials