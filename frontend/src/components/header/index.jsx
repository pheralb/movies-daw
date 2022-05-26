import React from "react";
import {
  Box,
  Text,
  HStack,
  Image,
  useColorModeValue,
  Flex,
  Container,
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
      <Box bg={bg} w="100%" pos="sticky" py="6" top="0" zIndex="1000">
        <Container maxW="90%">
          <Flex alignItems="center" justifyContent="space-between">
            <Tap>
              <Link to="/">
                <HStack spacing={1} pr={3} cursor="pointer">
                  <Image src="/images/logo_sin_texto.png" boxSize="12" />
                  <Text
                    fontSize="24px"
                    display={{ base: "none", md: "inline-flex" }}
                    fontFamily="Inter-Semibold"
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
        </Container>
      </Box>
    </>
  );
};

export default Index;
