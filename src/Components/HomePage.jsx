import React, { useState } from "react";
import { Box, transform } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/provider";

const HomePage = () => {
  let containersfordata = {
    getContainer: false,
    postContainer: false,
    putOrPatchContainer: false,
    deleteContainer: false,
    simRequestContainer: false,
    customHeaderContainer: false,
    transformContainer: false,
    errorHandlingContainer: false,
    cancelContainer: false,
  };

  const baseURL = "https://jsonplaceholder.typicode.com/todos?_limit=15";

  const [containers, setContainersAppear] = useState(containersfordata);
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  });

  const showInfoForGet = (e, key) => {
    e.preventDefault();
    const allFalse = Object.assign(
      ...Object.keys(containers).map((key) => ({ [key]: false }))
    );

    setContainersAppear(allFalse);
    setContainersAppear((prevState) => ({
      ...prevState,
      [key]: !containers[key],
    }));
  };

  const showInfoForPost = (e, key) => {
    e.preventDefault();
    const allFalse = Object.assign(
      ...Object.keys(containers).map((key) => ({ [key]: false }))
    );

    setContainersAppear(allFalse);
    setContainersAppear((prevState) => ({
      ...prevState,
      [key]: !containers[key],
    }));
  };

  const showInfoForPutOrPatch = (e, key) => {
    e.preventDefault();
    const allFalse = Object.assign(
      ...Object.keys(containers).map((key) => ({ [key]: false }))
    );

    setContainersAppear(allFalse);
    setContainersAppear((prevState) => ({
      ...prevState,
      [key]: !containers[key],
    }));
  };

  const showInfoForDelete = (e, key) => {
    e.preventDefault();
    const allFalse = Object.assign(
      ...Object.keys(containers).map((key) => ({ [key]: false }))
    );

    setContainersAppear(allFalse);
    setContainersAppear((prevState) => ({
      ...prevState,
      [key]: !containers[key],
    }));
  };

  const showInfoForSimRequest = (e, key) => {
    e.preventDefault();
    const allFalse = Object.assign(
      ...Object.keys(containers).map((key) => ({ [key]: false }))
    );

    setContainersAppear(allFalse);
    setContainersAppear((prevState) => ({
      ...prevState,
      [key]: !containers[key],
    }));
  };

  const showInfoForCustomHeader = (e, key) => {
    e.preventDefault();
    const allFalse = Object.assign(
      ...Object.keys(containers).map((key) => ({ [key]: false }))
    );

    setContainersAppear(allFalse);
    setContainersAppear((prevState) => ({
      ...prevState,
      [key]: !containers[key],
    }));
  };

  const showInfoForTransform = (e, key) => {
    e.preventDefault();
    const allFalse = Object.assign(
      ...Object.keys(containers).map((key) => ({ [key]: false }))
    );

    setContainersAppear(allFalse);
    setContainersAppear((prevState) => ({
      ...prevState,
      [key]: !containers[key],
    }));
  };

  const showInfoForErrorHandling = (e, key) => {
    e.preventDefault();
    const allFalse = Object.assign(
      ...Object.keys(containers).map((key) => ({ [key]: false }))
    );

    setContainersAppear(allFalse);
    setContainersAppear((prevState) => ({
      ...prevState,
      [key]: !containers[key],
    }));
  };

  const showInfoForCancel = (e, key) => {
    e.preventDefault();
    const allFalse = Object.assign(
      ...Object.keys(containers).map((key) => ({ [key]: false }))
    );

    setContainersAppear(allFalse);
    setContainersAppear((prevState) => ({
      ...prevState,
      [key]: !containers[key],
    }));
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
              showInfoForGet(e, "getContainer");
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
            onClick={(e) => {
              showInfoForPost(e, "postContainer");
            }}
          >
            post
          </Button>
          <Button
            size="lg"
            backgroundColor="#ffc107"
            textTransform="uppercase"
            textAlign="center"
            color="white"
            onClick={(e) => {
              showInfoForPutOrPatch(e, "putOrPatchContainer");
            }}
          >
            put/patch
          </Button>
          <Button
            size="lg"
            backgroundColor="#dc3545"
            textTransform="uppercase"
            textAlign="center"
            color="white"
            onClick={(e) => {
              showInfoForDelete(e, "deleteContainer");
            }}
          >
            delete
          </Button>
          <Button
            size="lg"
            backgroundColor="#6c757d"
            textTransform="uppercase"
            textAlign="center"
            color="white"
            onClick={(e) => {
              showInfoForSimRequest(e, "simRequestContainer");
            }}
          >
            sim request
          </Button>
          <Button
            size="lg"
            backgroundColor="#6c757d"
            textTransform="uppercase"
            textAlign="center"
            color="white"
            onClick={(e) => {
              showInfoForCustomHeader(e, "customHeaderContainer");
            }}
          >
            custom header
          </Button>
          <Button
            size="lg"
            backgroundColor="#6c757d"
            textTransform="uppercase"
            textAlign="center"
            color="white"
            onClick={(e) => {
              showInfoForTransform(e, "transformContainer");
            }}
          >
            transform
          </Button>
          <Button
            size="lg"
            backgroundColor="#6c757d"
            textTransform="uppercase"
            textAlign="center"
            color="white"
            onClick={(e) => {
              showInfoForErrorHandling(e, "errorHandlingContainer");
            }}
          >
            error handling
          </Button>
          <Button
            size="lg"
            backgroundColor="#6c757d"
            textTransform="uppercase"
            textAlign="center"
            color="white"
            onClick={(e) => {
              showInfoForCancel(e, "cancelContainer");
            }}
          >
            cancel
          </Button>
        </Stack>
        {containers["getContainer"] && (
          <Box h="500px" bgColor="pink">
            {post &&
              post.map((postData) => {
                return (
                  <Box key={postData.id}>
                    <Text>{postData.title}</Text>
                  </Box>
                );
              })}
          </Box>
        )}
        {containers["postContainer"] && <Box h="500px" bgColor="blue"></Box>}
        {containers["putOrPatchContainer"] && (
          <Box h="500px" bgColor="green"></Box>
        )}
        {containers["deleteContainer"] && <Box h="500px" bgColor="black"></Box>}
        {containers["simRequestContainer"] && (
          <Box h="500px" bgColor="orange"></Box>
        )}
        {containers["customHeaderContainer"] && (
          <Box h="500px" bgColor="brown"></Box>
        )}
        {containers["transformContainer"] && (
          <Box h="500px" bgColor="pink"></Box>
        )}
        {containers["errorHandlingContainer"] && (
          <Box h="500px" bgColor="#ffd700"></Box>
        )}
        {containers["cancelContainer"] && (
          <Box h="500px" bgColor="tomato"></Box>
        )}
      </Box>
    </ChakraProvider>
  );
};

export default HomePage;
