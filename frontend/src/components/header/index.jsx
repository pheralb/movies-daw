import React from "react";
import {
  Box,
  Text,
  HStack,
  Image,
  useColorModeValue,
  Flex,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Change from "@/components/change";
import Search from "@/components/search";
import Categories from "@/components/categories";
import Tap from "@/animations/tap";
import IconBtn from "@/components/buttons/iconBtn";
import { IoLogoGithub } from "react-icons/io5";

const Index = () => {
  const bg = useColorModeValue("white.50", "dark.800");
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
        zIndex="1000"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Tap>
            <Link to="/">
              <HStack spacing={1} pr={3} cursor="pointer">
                <Image src="/images/logo_sin_texto.png" boxSize="14" />
                <Text
                  fontSize="2xl"
                  display={{ base: "none", md: "inline-flex" }}
                >
                  PlayMoviez
                </Text>
              </HStack>
            </Link>
          </Tap>
          <HStack spacing={2}>
            <Categories />
            <ChakraLink
              href="https://github.com/pheralb/movies-daw"
              isExternal
              tabIndex={-1}
            >
              <IconBtn title="Github" icon={<IoLogoGithub size="22" />} />
            </ChakraLink>
            <Search />
            <Change />
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Index;
