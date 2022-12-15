import * as React from 'react'
import {
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Landing from "./pages/landing/Landing"
import { Routes, Route } from "react-router-dom"
import HowTo from "./pages/landing/sections/HowTo"
import Services from "./pages/landing/sections/Services"
import Testimonials from "./pages/landing/sections/Testimonials"
import ContactUs from "./pages/landing/sections/ContactUs"
import QuestionTab from "./components/QuestionTab"
import TypesOfCoff from './pages/landing/sections/TypesOfCoff';

const theme  = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  }
})

export const App = () =>{

  return(
  <ChakraProvider theme={theme}>
    <Header
    />
    <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/about" element={<HowTo/>}/>
    <Route path="/service" element={<Services/>}/>
    <Route path="/offer" element={<Testimonials/>}/>
    <Route path="/contact" element={<ContactUs/>}/>
    <Route path="/faq" element={<QuestionTab/>}/>
    <Route path="/types" element={<TypesOfCoff/>}/>
    </Routes>
    <Footer/>
  </ChakraProvider>
)
}