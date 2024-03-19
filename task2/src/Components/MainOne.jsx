import React, { useState } from "react";
import { Box, VStack, Button, Input } from "@chakra-ui/react";
import "./MainOne.css";
import { Search2Icon, SearchIcon } from "@chakra-ui/icons";
import { IoMdHome } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import { TfiBarChart } from "react-icons/tfi";
import { RiHomeGearFill } from "react-icons/ri";
import InsideBox from "./InsideBox/InsideBox";
import { BsStars } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import Products from "./ProductPage.jsx/Products";
const MainComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to a different route programmatically
    if (!inputValue) {
      alert("Input was Empty!");
    }
  };
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
          {!inputValue ? <InsideBox /> : <Products />}
          <Box className="searchbar">
            <FiPlusCircle color="white" className="seico" />
            <Input
              type="text"
              placeholder="Ask me anything..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              color={"white"}
            />

            <Button className="sebut" onClick={handleClick}>
              {" "}
              <span>
                <BsStars color="black" />
              </span>
              Shop
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default MainComponent;
