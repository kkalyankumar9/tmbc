import React from 'react'
import { Box, VStack, Button, Heading, Text,HStack } from "@chakra-ui/react";
import { BsEyeglasses } from "react-icons/bs";
import { Link } from 'react-router-dom';


const Products = () => {
    
  return (
    <Box p={"5%"}>
       
      <HStack color="#ffffff" fontSize={"25px"}>
      <BsEyeglasses color='#ffffff' />
    <Text fontWeight="bold" >Shopping across the web</Text>
  </HStack>
  <VStack color="#8d9191" textAlign="left" fontSize="25px" alignItems="flex-start" >
    <Link  to="/productcards">flipkart.com</Link>
    <Link  to="/productcards">meesho.com</Link>
    <Link  to="/productcards">mensxp.com</Link>
    <Link  to="/productcards">amazon.com</Link>
    <Link  to="/productcards">ajio.com</Link>
    <Link  to="/productcards">nike.ac</Link>
  </VStack>

    </Box>
  )
}

export default Products