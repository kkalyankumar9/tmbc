import React from "react";
import "./InsideBox.css";
import { Box, VStack, Button, Heading, Text } from "@chakra-ui/react";
import { BsStars } from "react-icons/bs";
import { GoLightBulb } from "react-icons/go";
import { RiTShirt2Line } from "react-icons/ri";
const InsideBox = () => {
  return (
    <div>
      <Box className="con2">
        <Box className="n1">
          <Text className="h1">
            {" "}
            <span className="first-part">Hello, John</span>
            <br />
            <span className="second-part">How can I help you today?</span>
          </Text>
        </Box>
        <Box className="insidecon3">
          <Box className="insidebox">
            <Text className="insidebox1">
              Trending smart watches <br />
              2024
            </Text>
            <Box className="insidebox1_icon">
            <BsStars color="white" className="i1"  />
            </Box>
          
          </Box>
          <Box className="insidebox">
            <Text className="insidebox1">
              Portable vacuum <br />
              cleaner
            </Text>
        
            <Box className="insidebox1_icon2">
            <GoLightBulb  color="white" />
            </Box>
          </Box>
          <Box className="insidebox">
            <Text className="insidebox1">
              Kurti sets under <br /> 600
            </Text>
            <Box className="insidebox1_icon3">
            <RiTShirt2Line color="white"  />
            </Box>
            
          </Box>
         
        </Box>

      </Box>
    </div>
  );
};

export default InsideBox;
