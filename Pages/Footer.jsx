import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import facebook from "../Components/assets/facebook.png";
import instra from "../Components/assets/instagram.png";
import twitter from "../Components/assets/twitter.png";
import youtube from "../Components/assets/youtube.png";
import twitch from "../Components/assets/twitch.png";

const Footer = () => {
  return (
    <Box mt="30px">
      <Flex
        w={{ base: "100%", md: "90%" }}
        h={{ base: "380px", md: "300px" }}
        m="auto"
        flexDirection="column"
        alignItems="center"
        p="20px"
        borderRadius="10px"
        bg="black"
        color="white"
      >
        <Flex w={{ base: "100%", md: "73%" }} gap={{ base: "8", md: "10" }}>
          <Box>
            <Image
              src={facebook}
              w={{ base: "25px", md: "50px" }}
              h={{ base: "25px", md: "50px" }}
              objectFit="contain"
            />
          </Box>
          <Box>
            <Image
              src={instra}
              w={{ base: "25px", md: "50px" }}
              h={{ base: "25px", md: "50px" }}
              objectFit="contain"
            />
          </Box>
          <Box>
            <Image
              src={twitter}
              w={{ base: "25px", md: "50px" }}
              h={{ base: "25px", md: "50px" }}
              objectFit="contain"
            />
          </Box>
          <Box>
            <Image
              src={twitch}
              w={{ base: "25px", md: "50px" }}
              h={{ base: "25px", md: "50px" }}
              objectFit="contain"
            />
          </Box>
          <Box>
            <Image
              src={youtube}
              w={{ base: "25px", md: "50px" }}
              h={{ base: "25px", md: "50px" }}
              objectFit="contain"
            />
          </Box>
        </Flex>
        <Flex
          gap={"10"}
          m="auto"
          w={{ base: "100%", md: "70%" }}
          fontSize={{ base: "12px", md: "24px" }}
          display={{ base: "none", md: "flex" }}
        >
          <Box>
            <Text>Privacy Policy</Text>
          </Box>
          <Box>
            <Text>Contact Us</Text>
          </Box>
          <Box>
            <Text>Cookie Preferences</Text>
          </Box>
          <Box>
            <Text>Corporate Information</Text>
          </Box>
        </Flex>
        <Flex
          gap={"10"}
          m="auto"
          w={{ base: "100%", md: "70%" }}
          // ml={{ base: "30px", md: "12.7rem" }}
          mt={{ base: "0rem", md: "-3rem" }}
          fontSize={{ base: "12px", md: "24px" }}
          display={{ base: "none", md: "flex" }}
        >
          <Box>
            <Text>Privacy Policy</Text>
          </Box>
          <Box>
            <Text>Contact Us</Text>
          </Box>
          <Box>
            <Text>Cookie Preferences</Text>
          </Box>
          <Box>
            <Text>Corporate Information</Text>
          </Box>
        </Flex>
        <Flex
          display={{ base: "flex", md: "none" }}
          textAlign={"start"}
          gap={"5"}
          mb={"100px"}
          mt={"30px"}
        >
          <Box>
            <Text m="5px">Privacy Policy</Text>
            <Text m="5px">Cookie Preferences</Text>
            <Text m="5px">Corporate Information</Text>
            <Text m="5px">Contact Us</Text>
          </Box>
          <Box>
            <Text m="5px">Corporate Information</Text>
            <Text m="5px">Contact Us</Text>
            <Text m="5px">Privacy Policy</Text>
            <Text m="5px">Cookie Preferences</Text>
          </Box>
        </Flex>
        <Flex w={{ base: "90%", md: "70%" }}>
          <Text textAlign={"start"} fontSize="sm">
            © Alkye Test.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
