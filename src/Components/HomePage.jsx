import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/provider";

const HomePage = () => {
  let containersfordata = {
    getContainer: true,
    postContainer: false,
  };
  const [containers, setContainersAppear] = useState(containersfordata);

  const showInfo = (e, key) => {
    e.preventDefault();
    setContainersAppear((prevState) => ({
      ...prevState,
      [key]: true,
    }));
    console.log("fire");
  };

  const hideInfo = (e, key) => {
    e.preventDefault();
    setContainersAppear((prevState) => ({
      ...prevState,
      [key]: true,
    }));
    console.log("very");
  };

  return (
    <ChakraProvider>
      <Box w="100%">
        <Text m="4rem" textAlign="center" fontSize="3rem">
          Axios Crash Course
        </Text>
        <Stack w="70%" m="0 auto" spacing={4} direction="row" align="center">
          <Button
            size="lg"
            backgroundColor="#0069d9"
            textTransform="uppercase"
            textAlign="center"
            color="white"
            onClick={(e) => {
              showInfo(e, "postContainer");
            }}
          >
            get
          </Button>
          <Button
            size="lg"
            backgroundColor="#17a2b8"
            textTransform="uppercase"
            textAlign="center"
            color="white"
          >
            post
          </Button>
          <Button
            size="lg"
            backgroundColor="#ffc107"
            textTransform="uppercase"
            textAlign="center"
            color="white"
          >
            put/patch
          </Button>
          <Button
            size="lg"
            backgroundColor="#dc3545"
            textTransform="uppercase"
            textAlign="center"
            color="white"
          >
            delete
          </Button>
          <Button
            size="lg"
            backgroundColor="#6c757d"
            textTransform="uppercase"
            textAlign="center"
            color="white"
          >
            sim request
          </Button>
          <Button
            size="lg"
            backgroundColor="#6c757d"
            textTransform="uppercase"
            textAlign="center"
            color="white"
          >
            custom header
          </Button>
          <Button
            size="lg"
            backgroundColor="#6c757d"
            textTransform="uppercase"
            textAlign="center"
            color="white"
          >
            transform
          </Button>
          <Button
            size="lg"
            backgroundColor="#6c757d"
            textTransform="uppercase"
            textAlign="center"
            color="white"
          >
            error handling
          </Button>
          <Button
            size="lg"
            backgroundColor="#6c757d"
            textTransform="uppercase"
            textAlign="center"
            color="white"
          >
            cancel
          </Button>
        </Stack>
        {containers["postContainer"] && <Box h="500px" bgColor="pink"></Box>}
      </Box>
    </ChakraProvider>
  );
};

export default HomePage;
