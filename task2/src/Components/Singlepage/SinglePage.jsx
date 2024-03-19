import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  VStack,
  Spinner,
  Text,
  Input,
  Image,
  Button,
  HStack,
} from "@chakra-ui/react";
import { Search2Icon, SearchIcon } from "@chakra-ui/icons";
import { IoMdHome } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import { TfiBarChart } from "react-icons/tfi";
import { RiHomeGearFill } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";
import "./Singlepage.css";

const SinglePage = () => {
  const { id } = useParams();
  const [singlePageData, setSinglePageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://tmbc-server-7ihg.onrender.com/data/${id}`)
      .then((res) => {
        setSinglePageData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <VStack spacing="4" mt="4">
        <Spinner size="xl" color="blue.500" />
        <Text>Loading...</Text>
      </VStack>
    );
  }

  if (!singlePageData) {
    return (
      <Text mt="4" color="red.500">
        Error: Failed to fetch data
      </Text>
    );
  }

  return (
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
      <Box className="middlecon">
      <Text className="Headim">
              {singlePageData.title}
            </Text>
        <HStack spacing="4" alignItems={"flex-start"}>

            <Box className="sm1">
                <Image className="sim1" src="https://s3-alpha-sig.figma.com/img/3096/46d6/5629261bc810af5d3a237d39cd535bf8?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q7RhcjzcLjhBxo9--QgzmBtcqFVLNfBKgiS2Ez8lQyBWNmCbOyujudlLmfFk6U9Jl5ajQNz4-f3PTghnF-kszlMJlC0XOoaTOU8CaIeTKUprYsdsXoCHXlhEwWRD27p0cFxx0XT93BvRuJ5B2SyloRZRxU42d9vNL37rBbFQiwYZ4HFbtg7yRHdX1G0QBycQV8-7~VR9yG7SMOuLjauivy96Vu3BHnl7aGeqdE2ogDNgMTxv4lSKTFCurU-kGgLHn8K~Nyq8Bt0sWoRrTL3d6rjB-deJDs6klC-uiLOaZmsW80rEcg~es34EQq~~edMzGjpLh1fUNN4r9DewRh3LbA__"/>
                
                <Image className="sim1" src="https://s3-alpha-sig.figma.com/img/d11d/8ee2/d6b31c4349ae6f4074286d8ab704595b?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8wlVQeRz6GX62cl9W1Rvmhjz8eDzo~5guRnwvH7uGh8SQ7sBCrnvDZF1HRMOjaHk5hHwLLxj6vVYA3e0j1lEaBlPKv4o2XqQQ5ndwq34~~qPNtZltDdLXGg0ng54vcRh1Te6n5vj-BW9hRvdFwXDqkSTmYFendUgn8gw~vwFg~YeG0lIezWWUZCZzZ8CZdNFSi7a2cdVAdoO64DV-euDm~ANYYX32D9f6NcKF2pPwR2-ILupqqRTxdY~nUHMmOhlJD7VZsuB-cKmRnOIXF8OPasG8Rn3yiXEZG92d7m2Ph6ZdRHgqUCm21Nz-CMQ2li6AB1ohCMgqgGJGsgpIqPqA__"/>
                <Image className="sim1" src="https://s3-alpha-sig.figma.com/img/d810/fe1b/0b8692b91948dbfa9f4860cb644b2392?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mcP8Eq15FJXCqNgHIj2RIrciFsoVWTofPzmyktv-Djs1934TscW81QNFTQqXI0A0p5QlFweoMX9f504MuY4KZm5a9Pkkl4814JFtWmq0-MlWiA9O~WdyNqpLMDVMaGMvFpV9j3lR49YslT1vtBAS3Z3XMsTU~6oVbOUDVjML9bbPtLkNHjCLbSvQyfBctWKLSkyfe75li7tZEOynPWb-W5EIL4qe-i-ghTev8X9CfKw1ImhPNkBvV50kgksSvp~gDer4uop6OOB5G2GcqNpDvM33P2mvLvUKEj4s5sUcHdRd8T2~uhXI0KIypTI3lvVeKVtr4xgorb5l8Kg5lMq99Q__"/>
            </Box>
          <Box>
            
            <Image
              src={singlePageData.image}
              alt={singlePageData.title}
           
              className="singleimg"
            />
          </Box>
        </HStack>
        <Box className="searchbar">
          <FiPlusCircle color="white" className="seico" />
          <Input type="text" placeholder="Ask me anything..." color="white" />
          <Button className="sebut">
            <BsStars color="black" />
            Shop
          </Button>
        </Box>
      </Box>
      <Box className="lastcon">
      <RiHomeGearFill className="ic1" />
      
      </Box>

    </Box>
  );
};

export default SinglePage;
