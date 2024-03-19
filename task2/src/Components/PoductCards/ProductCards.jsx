import "./ProductCards.css";
import "../MainComponent/MainOne.css";

import React, { useEffect, useState } from "react";
import { Box, VStack, HStack, Button, Text, Input ,Image} from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";
import { Search2Icon, SearchIcon } from "@chakra-ui/icons";
import { IoMdHome } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import { TfiBarChart } from "react-icons/tfi";
import { RiHomeGearFill } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";
import { Spinner } from "@chakra-ui/react";

import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const ProductCards = () => {
  const [inputValue, setInputValue] = useState("");
  const [productData, setProductData] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [isLoading,setIsLoading]=useState(false)

  useEffect(() => {
    axios.get("https://tmbc-server-7ihg.onrender.com/data")
      .then((res) => {
        setProductData(res.data);
        setIsLoading(true)
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false)
      });
  }, []);

  useEffect(() => {
    // Update the visibleProducts array when productData or startIndex changes
    if (productData.length > 0) {
      const endIndex = Math.min(startIndex + 3, productData.length);
      setVisibleProducts(productData.slice(startIndex, endIndex));
    }
  }, [productData, startIndex]);

  const handleShowMore = () => {
    setStartIndex(startIndex + 3);
  };

  const handleShowPrevious = () => {
    setStartIndex(Math.max(startIndex - 3, 0));
  };

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
          {/* {!inputValue ?<InsideBox/>:<Products/>} */}
          <Box color={"white"} className="productCon">
            <Box className=" phed2">
              <Text className="ph1">List of Black T-shirt</Text>
            </Box>
            <HStack>
              <Box className="ph3">
                <Text className="pt1">Recommended</Text>
              </Box>
              <Box className="ph4">
                <Text className="pt2">Lowest Price</Text>
              </Box>
              <Box className="ph5">
                <Text className="pt3">Top Rated</Text>
              </Box>
            </HStack>
            <Box className="cards">
        {isLoading?visibleProducts?.map((e) => (
       <Box key={e.id} className="card1">
       <Image src={e.image} alt="error" />
       <Box className="text-container">
        <HStack className="rate1"> <Text className="ratings">{e.ratings}     </Text><Text><FaStar /></Text></HStack>
       
   
        
         <Box className="brand1">
         <Text className="brand">{e.brand}</Text>
         </Box>
         <Box className="title1">
         <Text className="title">{e.title}</Text>
         </Box>
         <Box className="price1" >
         <Text className="price">₹{e.price}</Text>
         <Button className="shop1" > <Link to={`/productcards/${e.id}`}>Shop now</Link></Button>
         </Box>
       </Box>
     </Box>
     
      
        )):<Text>
          <Spinner size="lg" color="blue" />Please wait!
   
      </Text>
      }
      </Box >
      <Box className="showmore">
      <Button onClick={handleShowPrevious}  className="sm1">
        Previous
      </Button>
      <Button onClick={handleShowMore} className="sm2">
      <BsStars color="black" /> Show More
      </Button>
      </Box>



          </Box>

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

export default ProductCards;
