import "./ProductCards.css";
import "../MainOne";

import React, { useEffect, useState } from "react";
import { Box, VStack, HStack, Button, Text, Input ,Image} from "@chakra-ui/react";

import { Search2Icon, SearchIcon } from "@chakra-ui/icons";
import { IoMdHome } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import { TfiBarChart } from "react-icons/tfi";
import { RiHomeGearFill } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";

import axios from "axios"
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const ProductCards = () => {
  const [inputValue, setInputValue] = useState("");
  const [productData, setProductData] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    axios.get("https://tmbc-server-7ihg.onrender.com/data")
      .then((res) => {
        setProductData(res.data);
      })
      .catch((error) => {
        console.log(error);
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
  const data=[
    {"image":"https://s3-alpha-sig.figma.com/img/f12b/3b90/166de38bb93e16f577b31e64adb00430?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qSLcj1r5ha-C9wdpeKwcKdBYXxNRuaYiNyxPjHyC6FA0y1zapSkf-lTHKnJVk6wgetYN9PD1lrNNB7q5M77YJ7Fl2DZWmaGppidpAxhoBxI-IUVNBHMXv3LGg~2gxKVMyHjIamUeI0nWxQGpXpqWo6pBVyoWk6QgDFaKE0N~-0h-eHyQmg7YeoGeCLmQpA56RNTDmYBtV0OkgKPuwDTK~I-l8N-GV2VC1ircC~3wdH~kJlhDQGxnViQJBuYQwQf9dy0zlbydplim0Vlii~KK5-f9bmtWhEVNFkvU-XSryRzVVAeLcg3VbKc6ySBMzCzbsYDKqWg8fIbfEbAKEp~z9A__",
    "barnd":"Jump cuts",
    "title":"Men Printed Polo Neck Polyester Black T-Shirt",
    "price":"₹349",
    "rating":"4.4"
    
  
  },
    {"image":"https://s3-alpha-sig.figma.com/img/3096/46d6/5629261bc810af5d3a237d39cd535bf8?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q7RhcjzcLjhBxo9--QgzmBtcqFVLNfBKgiS2Ez8lQyBWNmCbOyujudlLmfFk6U9Jl5ajQNz4-f3PTghnF-kszlMJlC0XOoaTOU8CaIeTKUprYsdsXoCHXlhEwWRD27p0cFxx0XT93BvRuJ5B2SyloRZRxU42d9vNL37rBbFQiwYZ4HFbtg7yRHdX1G0QBycQV8-7~VR9yG7SMOuLjauivy96Vu3BHnl7aGeqdE2ogDNgMTxv4lSKTFCurU-kGgLHn8K~Nyq8Bt0sWoRrTL3d6rjB-deJDs6klC-uiLOaZmsW80rEcg~es34EQq~~edMzGjpLh1fUNN4r9DewRh3LbA__",
    "barnd":"AVEJO ",
    "title":"Men Checkered Round Neck Cotton Blend Black T-Shirt",
    "price":"₹419",
    "rating":"4.4"},
    {"image":"https://s3-alpha-sig.figma.com/img/9c9e/758f/db066278781168a82588ab6436d6bff9?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NrzFlvMZaQIDTA8YbEX8iMmFP4FqCKoFMa0WulRTf0L~3gxR5YZq2Yj9eQ~e7H02oEA~y7fkOVka-Za4ywwnMTQyKd3Yuq5KV1NmQBdCiYPE5P-NGDjIE7PzR2hjjKR2TaaxDSIBk~G4ys7iMG8m7g2cQRNfjOacklkQ--qPFJIUNHk826zVJ9Ktrfq0xuf3hiUuQJTKA0avOS9VXchCUuZRoI2dIfyGeQIlomq2Tbm50MXsRu4aHbQv1JFZME4aWu8amLphCOLRu5taBgJLicmwlpfIV~Gv3HIf4fDGE2eYILe2vz9Uc-zoffzZTHiDOMJKocG7bEffZM6aVarijA__",
    "barnd":"AVEJO ",
    "title":"Men Solid Round Neck Polyester Black T-Shirt",
    "price":"₹245",
    "rating":"4.4"
  }
  ]
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
        {visibleProducts?.map((e) => (
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
         <Button className="shop1">Shop now</Button>
         </Box>
       </Box>
     </Box>
     
      
        ))}
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
