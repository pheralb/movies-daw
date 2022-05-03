import { Text, Box, Center, Spinner } from "@chakra-ui/react";
import React from "react";

const Index = ({ text }) => {
  return (
    <Box>
      <Center>
        <Text mb="2">{text}</Text>
      </Center>
      <Center>
        <Spinner />
      </Center>
    </Box>
  );
};

export default Index;
