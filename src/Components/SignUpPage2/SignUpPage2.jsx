import React, { useState } from "react";
import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import logo1 from "../assets/Logo1.png";
import eys from "../assets/eye-off.png";
import Footer from "../../Pages/Footer";
import { useNavigate, useLocation } from "react-router-dom";

const Signup1 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state?.username || "";

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleLogin = async () => {
    if (password) {
      try {
        const response = await fetch(
          "https://untitled-twkmuar27a-uc.a.run.app/api/login/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          }
        );

        if (response.ok) {
          navigate("/dashboard");
        } else {
          alert("Login failed. Please check your credentials.");
        }
      } catch (error) {
        alert("An error occurred. Please try again.");
      }
    } else {
      alert("Please enter your password.");
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
        w={{ base: "95%", md: "80%", lg: "90%" }}
        h={{ base: "690px", md: "520px" }}
        my={{ base: "50px" }}
        p={{ base: "20px", sm: "40px", md: "60px", lg: "80px" }}
        boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
        flexDirection="column"
        borderRadius={{ base: "70px", md: "70px", lg: "40px" }}
        bgColor="white"
        maxW="100%"
        justifyContent="center"
      >
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
          <Box
            w={{ base: "100%", md: "60%" }}
            textAlign="left"
            mb={{ base: "20px", md: "0" }}
          >
            <Text fontSize="14px" fontWeight="bold" color="gray.600">
              STEP 2
            </Text>
            <Text
              fontSize={{ base: "24px", sm: "28px", md: "34px" }}
              fontWeight="bold"
              color="black"
              lineHeight="1.2"
              mt="10px"
            >
              Create an account to
              <br />
              continue
            </Text>
            <Text
              fontSize={{ base: "16px", md: "18px" }}
              color="#000"
              mt="14px"
            >
              You’ll be able to log in to Dingoo with this
              <br />
              email address and password.
            </Text>
          </Box>
          <Box w={{ base: "100%", md: "40%" }} textAlign="left">
            <Text fontSize={{ base: "14px", lg: "18px" }} color="#000">
              Enter a password to create your account with
            </Text>
            <Input
              type="password"
              placeholder="Choose a password"
              size="lg"
              borderRadius="md"
              borderColor="gray.400"
              textColor="#636363"
              focusBorderColor="black"
              mb="20px"
              w="100%"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Image
              src={eys}
              position="absolute"
              right="220px"
              top="280px"
              transform="translateY(-50%)"
              cursor="pointer"
              onClick={togglePasswordVisibility}
              boxSize="20px"
              display={{ base: "none", md: "none", lg: "block" }}
            />
            <Flex
              alignItems="center"
              justifyContent={{
                base: "space-between",
                md: "space-between",
              }}
              w="100%"
            >
              <Text fontSize="14px" color="gray.600" mt="10px">
                Use a minimum of 6 characters (case sensitive)
                <br />
                with at least one number or special character.
              </Text>

              <Button
                bgColor="black"
                color="white"
                size="lg"
                w={{ base: "200px" }}
                fontSize={{ base: "10px", lg: "16px", md: "10px" }}
                borderRadius="md"
                _hover={{ bg: "gray.800" }}
                onClick={handleLogin}
              >
                Agree & Continue
              </Button>
            </Flex>
          </Box>
        </Flex>

        <Box w="100%" mt="20px" p="0px" textAlign="left">
          <Text
            fontSize={{ base: "8px", lg: "12px" }}
            marginY={{ base: "0", lg: "10px" }}
          >
            Dingoo will use your data to personalise and improve your Dingoo
            experience and to send you information about Dingoo. You can change
            your communication preferences anytime. We may use your data as
            described in our Privacy Policy, including sharing it with The Test
            of Companies. By clicking "Agree & Continue", you agree to
            our Subscriber Agreement and acknowledge that you have read
            our Privacy Policy and Collection Statement.
          </Text>
        </Box>
      </Flex>

      <Box w="100%" bgColor="black" color="white">
        <Footer />
      </Box>
    </Box>
  );
};

export default Signup1;
