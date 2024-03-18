import React from "react";
import { Box, VStack, Button,Input } from "@chakra-ui/react";
import "./Mainone.css";
import { Search2Icon, SearchIcon } from "@chakra-ui/icons";
import { IoMdHome } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import { TfiBarChart } from "react-icons/tfi";
import { RiHomeGearFill } from "react-icons/ri";
import InsideBox from "./InsideBox/InsideBox";
import { BsStars } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";
const MainComponent = () => {
  return (
    <>
      <Box className="container">
        <Box className="sideBar">
          <VStack className="v1">
            <RiHomeGearFill className="ic1" />
            <IoMdHome className="ic2" />
            <Search2Icon className="ic2" />
            <TfiBarChart className="ic2" />
            <FiLogIn className="ic2" />
          </VStack>
        </Box>
        <Box className="mainBar">
          <InsideBox />
          <Box  className="searchbar">
          <FiPlusCircle color="white" className="seico"/>
            <Input type="text" placeholder="Ask me anything..."/>
          
           
            <Button className="sebut">  <span><BsStars color="black"/></span>Shop</Button>
          

        </Box>
        </Box>
      
      </Box>
    </>
  );
};

export default MainComponent;
