import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Box } from "@chakra-ui/react";

const Index = ({ children }) => {
  return (
    <>
      <Header />
      <Box mr={{ base: 6, md: 5, lg: "120px" }} ml={{ base: 6, md: 5, lg: "120px" }} p="3" mt="1">
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Index;
