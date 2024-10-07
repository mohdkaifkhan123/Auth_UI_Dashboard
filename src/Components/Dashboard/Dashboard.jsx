import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

import elipse1 from "../assets/Ellipse 5.png";
import elipse2 from "../assets/Ellipse 6.png";
import lock from "../assets/Rectangle 32.png";
import lock2 from "../assets/Rectangle 33.png";
import man from "../assets/Rectangle 34.png";
import lock3 from "../assets/Rectangle 39.png";
import logo1 from "../assets/Logo_white.png";
import Footer from "../../Pages/Footer";

const images = [lock, lock2, man, lock3];
const slideInterval = 2000;

const Dashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, slideInterval);
    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);

  return (
    <Box minH="100vh" bgColor="black" color="white" overflow="hidden" px="20px">
      <Flex
        w="100%"
        flexDirection="column"
        alignItems="flex-start"
        p={{ base: "0", md: "20px" }}
      >
        
        <Box w="100%" mb="20px" textAlign="left">
          <Image src={logo1} boxSize="100px" objectFit="contain" />
        </Box>

      
        <Flex
          direction="column"
          w="100%"
          textAlign="left"
        >
          <Text
            fontSize={{ base: "24px", md: "36px", lg: "48px" }}
            mb={{ base: "10px", md: "10px" }}
            lineHeight="1.2"
          >
            Welcome Test
          </Text>
          <Text
            fontSize={{ base: "16px", md: "24px" }}
            color="white"
            mb="20px"
          >
            Hope you are having a good day!
          </Text>
        </Flex>

       
        <Box w="100%" mt={{ base: "4rem", md: "2rem" }} h={{ base: "230px", md: "500px" }} mb={{ base: "5rem", md: "10rem" }}>
          <Box
            fontSize={{ base: "24px", md: "36px", lg: "48px" }}
            mb="20px"
            textAlign="left"
          >
            <Text>Photography</Text>
          </Box>
          <Flex width="100%" height="100%" overflow="hidden" position="relative" justifyContent="flex-start">
            <Flex
              width={`${images.length * 300}px`}
              transform={`translateX(-${currentIndex * 300}px)`}
              transition="transform 0.5s ease-in-out"
            >
              {images.map((image, index) => (
                <Box key={index} flexShrink="0" width={{ base: "212px", md: "350px" }} height="100%" paddingRight="1rem">
                  <Image src={image} alt={`Slide ${index + 1}`} width="100%" height="100%" objectFit="cover" borderRadius="20px"/>
                </Box>
              ))}
            </Flex>
          </Flex>
          <Flex w="100%" mt="2rem" justifyContent="center" alignItems="center">
            <Box>
              <Image src={elipse1} m="4px" boxSize={{ base: "15px", md: "30px" }} objectFit="contain" />
            </Box>
            <Box>
              <Image src={elipse2} m="4px" boxSize={{ base: "15px", md: "30px" }} objectFit="contain" />
            </Box>
            <Box>
              <Image src={elipse2} m="4px" boxSize={{ base: "15px", md: "30px" }} objectFit="contain" />
            </Box>
          </Flex>
        </Box>

        
        <Box w="100%" mt="2rem" h={{ base: "230px", md: "500px" }} mb={{ base: "5rem", md: "10rem" }}>
          <Box
            fontSize={{ base: "24px", md: "36px", lg: "48px" }}
            mb="20px"
            textAlign="left"
          >
            <Text>Learning</Text>
          </Box>
          <Flex width="100%" height="100%" overflow="hidden" position="relative" justifyContent="flex-start">
            <Flex
              width={`${images.length * 300}px`}
              transform={`translateX(-${currentIndex * 300}px)`}
              transition="transform 0.5s ease-in-out"
            >
              {images.map((image, index) => (
                <Box key={index} flexShrink="0" width={{ base: "212px", md: "350px" }} height="100%" paddingRight="1rem">
                  <Image src={image} alt={`Slide ${index + 1}`} width="100%" height="100%" objectFit="cover" borderRadius="20px" />
                </Box>
              ))}
            </Flex>
          </Flex>
          <Flex w="100%" mt="2rem" justifyContent="center" alignItems="center">
            <Box>
              <Image src={elipse1} m="4px"boxSize={{ base: "15px", md: "30px" }} objectFit="contain" />
            </Box>
            <Box>
              <Image src={elipse2} m="4px" boxSize={{ base: "15px", md: "30px" }} objectFit="contain" />
            </Box>
            <Box>
              <Image src={elipse2} m="4px" boxSize={{ base: "15px", md: "30px" }} objectFit="contain" />
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Box w="100%" bgColor="black" color="white">
        <Footer />
      </Box>
    </Box>
  );
};

export default Dashboard;
