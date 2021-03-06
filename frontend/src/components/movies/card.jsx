import React from "react";
import {
  Flex,
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Hover from "@/animations/hover";
import { Link } from "react-router-dom";
import { IoStarOutline } from "react-icons/io5";
import Tap from "@/animations/tap";

const Card = ({ id, poster, title, rating, year, writer }) => {
  const opacity = useColorModeValue(1, 0.8);
  return (
    <Tap>
      <Link to={`/movie/${id}`}>
        <Box
          maxW={{ base: "100%", md: "md", lg: "sm" }}
          cursor="pointer"
          borderWidth="2px"
          rounded="lg"
          opacity={opacity}
          _hover={{ shadow: "0 0 5px black", opacity: 1 }}
          transition="all 0.2s"
        >
          <Image
            src={poster}
            alt={title}
            roundedTop="lg"
            w="full"
            fit="cover"
            h={56}
          />
          <Box p="6">
            <Heading fontSize="2xl" isTruncated>
              {title}
            </Heading>
            <Text isTruncated mb="4" color="gray.500">
              by {writer}
            </Text>
            <Flex direction={"row"} justifyContent="space-between" spacing={2}>
              <HStack spacing={1} mr="2">
                <Icon as={IoStarOutline} mr="1" color="yellow.500" />
                <Text>{rating}</Text>
              </HStack>
              <Text color="gray.500">{year}</Text>
            </Flex>
          </Box>
        </Box>
      </Link>
    </Tap>
  );
};

export default Card;
