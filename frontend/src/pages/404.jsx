import React from "react";
import Helmet from "react-helmet";
import { Center, VStack, Text, Button } from "@chakra-ui/react";
import XDoodle from "@/icons/sad";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

const Error404 = () => {
  return (
    <>
      <Helmet>
        <title>Error 404</title>
      </Helmet>
      <Center>
        <VStack spacing={4} pr={3} mt="4">
          <XDoodle width="70" height="70" />
          <Text fontSize="4xl" fontWeight="bold">
            Error 404
          </Text>
          <Text fontSize="1xl">
            Lo sentimos, pero esta página no está disponible
          </Text>
          <Link to="/">
            <Button
              as="a"
              leftIcon={<IoHomeOutline />}
              fontWeight="light"
              variant="ghost"
              borderWidth="1px"
            >
              Ir al inicio
            </Button>
          </Link>
        </VStack>
      </Center>
    </>
  );
};

export default Error404;
