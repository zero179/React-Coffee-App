import React from 'react'
import { Box} from "@chakra-ui/react";
const GoogleMaps = () => {
  return (
    <Box >
        <iframe title="myFrame"
        height="400"
        width="1280px"
        frameBorder="" 
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=humenne snp 16&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        </iframe>
    </Box>
  )
}

export default GoogleMaps