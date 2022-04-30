import React from "react";
import {
  Box,
  Text,
  HStack,
  Image,
  useColorModeValue,
  Button,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  IoHomeOutline,
  IoAlbumsOutline,
  IoSearchOutline,
} from "react-icons/io5";
import Change from "@/components/change";
import Tap from "@/animations/tap";
import Show from "@/animations/show";

const Index = () => {
  const bg = useColorModeValue("transparent", "dark.800");
  return (
    <>
      <Box
        bg={bg}
        w="100%"
        pos="sticky"
        top="0"
        pr={{ base: 6, md: 5, lg: "120px" }}
        pl={{ base: 6, md: 5, lg: "120px" }}
        py="4"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Show>
            <HStack spacing={1}>
              <Image src="/images/logo.png" boxSize="14" />
              <Text fontSize="2xl" >PlayMoviez</Text>
            </HStack>
          </Show>
          <Show delay={0.3}>
            <HStack spacing={2}>
              <Link to="/">
                <Tap>
                  <Button
                    as="a"
                    variant="ghost"
                    fontWeight="light"
                    leftIcon={<IoHomeOutline />}
                  >
                    Home
                  </Button>
                </Tap>
              </Link>
              <Link to="/catalogo">
                <Tap>
                  <Button
                    as="a"
                    fontWeight="light"
                    variant="ghost"
                    leftIcon={<IoAlbumsOutline />}
                  >
                    Categories
                  </Button>
                </Tap>
              </Link>
              <IconButton
                variant="ghost"
                aria-label="Search films"
                icon={<IoSearchOutline size="22" />}
              />
              <Change />
            </HStack>
          </Show>
        </Flex>
      </Box>
    </>
  );
};

export default Index;
