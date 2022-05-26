import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Container } from "@chakra-ui/react";

const Index = ({ children }) => {
  return (
    <>
      <Header />
      <Container maxW="90%" mt="2">
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Index;
