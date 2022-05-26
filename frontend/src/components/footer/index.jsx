import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Flex
      w="full"
      as="footer"
      flexDirection={{ base: "column", sm: "row" }}
      align="center"
      justify="space-between"
      py="6"
    >
      <Text href="#" fontSize="sm">
        &copy; PlayMoviez 2022
      </Text>
      <Text
        href="#"
        fontSize="sm"
        textAlign={{ base: "center", md: "left" }}
        mt={{ base: "2", md: "0" }}
      >
        Created by josedec16, pheralb and jonatan0867
      </Text>
    </Flex>
  );
};

export default Index;
