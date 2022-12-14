import * as React from "react"
import {
  ChakraProvider,
  extendTheme
} from "@chakra-ui/react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Landing from "./pages/landing/Landing"
import { Routes, Route } from "react-router-dom"
import HowTo from "./pages/landing/sections/HowTo"
import Services from "./pages/landing/sections/Services"
import Testimonials from "./pages/landing/sections/Testimonials"

const theme  = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  }
})

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header/>
    <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/about" element={<HowTo/>}/>
    <Route path="/service" element={<Services/>}/>
    <Route path="/offer" element={<Testimonials/>}/>
    </Routes>
    <Footer/>
  </ChakraProvider>
)
