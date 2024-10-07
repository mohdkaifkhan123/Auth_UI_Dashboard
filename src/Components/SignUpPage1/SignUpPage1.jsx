import React, { useState } from "react";
import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import logo1 from "../assets/Logo1.png";
import Footer from "../../Pages/Footer";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react"; 

const Signup1 = () => {
  const [username, setUserName] = useState("");
  const navigate = useNavigate();

  const [isMobile] = useMediaQuery("(max-width: 768px)"); // Checks if screen is mobile size

  const handleContinue = () => {
    if (username === "testadmin") {
      navigate("/signup2", { state: { username } });
    } else {
      alert("Please enter a valid Email.");
    }
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      bgColor="#f9f9f9"
    >
      <Flex
        w={{ base: "95%", md: "80%", lg: "90%" }} // Adjust width for mobile responsiveness
        h={{ base: "540px", md: "520px" }} // Set dynamic height for small and large screens
        my={{ base: "50px" }}
        p={{ base: "20px", sm: "40px", md: "60px", lg: "80px" }} // Adjust padding for mobile devices
        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
        flexDirection="column"
        borderRadius={{base:"70px", md:"70px",lg:"40px"}}
        bgColor="white"
        maxW="100%"
        justifyContent="center" // Center contents vertically
      >
        {/* Logo Section */}
        <Flex w="100%" justifyContent="flex-start" mb="40px">
          <Image src={logo1} boxSize="50px" objectFit="contain" />
          <Text fontSize="24px" fontWeight="bold" ml="10px">
            TEST
          </Text>
        </Flex>

        <Flex
          w="100%"
          justifyContent="space-between"
          alignItems="flex-start"
          flexDirection={{ base: "column", md: "row" }}
        >
          {/* Left-aligned text */}
          <Box
            w={{ base: "100%", md: "60%" }}
            textAlign="left"
            mb={{ base: "20px", md: "0" }}
          >
            <Text fontSize="14px" fontWeight="bold" color="gray.600">
              STEP 1
            </Text>
            <Text
              fontSize={{ base: "24px", sm: "28px", md: "34px" }}
              fontWeight="bold"
              color="black"
              lineHeight="1.2"
              mt="10px"
            >
              Enter your email
              <br />
              address to continue
            </Text>
            <Text
              fontSize={{ base: "16px", md: "18px" }}
              color="gray.600"
              mt="14px"
            >
              Log in to your account. If you don’t have
              <br />
              one, you will be prompted to create one.
            </Text>
          </Box>

          {/* Right-aligned input and button */}
          <Box w={{ base: "100%", md: "40%" }} textAlign="right">
            <Input
              type="email"
              placeholder="Email"
              size="lg"
              borderRadius="md"
              borderColor="gray.400"
              focusBorderColor="black"
              mb="20px"
              w="100%" // Full width on all devices
              onChange={(e) => setUserName(e.target.value)}
            />
            {/* Flex container to align "Have an account?" and the Continue button */}
            <Flex
              alignItems="center"
              justifyContent={{ base: "space-between", md:"space-between",lg: "end" }} // Align the text and button to opposite sides
              w="100%"
            >
              {isMobile && (
                <Text
                  fontSize="14px"
                  color="gray.600"
                  mt="10px" // Add some margin for spacing
                >
                  Have an account?
                </Text>
              )}
              <Button
                bgColor="black"
                color="white"
                size="lg"
                w={{ base: "auto", md: "30%" }} // Full width on mobile, auto for desktop
                borderRadius="md"
                _hover={{ bg: "gray.800" }}
                onClick={handleContinue}
                
              >
                Continue
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Flex>

      {/* Footer */}
      <Box w="100%" bgColor="black" color="white">
        <Footer />
      </Box>
    </Box>
  );
};

export default Signup1;
