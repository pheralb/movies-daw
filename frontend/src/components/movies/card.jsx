import React from "react";
import { Badge, Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import Hover from "@/animations/hover";

const Card = ({ poster, title, description, year, writer }) => {
  return (
    <Hover>
      <Box
        maxW={{ base: "100%", md: "md", lg: "sm"}}
        cursor="pointer"
        borderWidth="1px"
        rounded="lg"
        opacity= {0.8}
        _hover={{ shadow: "md", opacity: 1 }}
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
          <Heading fontSize="2xl" isTruncated>{title}</Heading>
          <Text isTruncated mb="4" color="gray.500">
            {description}
          </Text>
          <HStack spacing={1}>
            <Badge
              variant="ghost"
              fontWeight="light"
              borderWidth="1px"
              borderRadius="5px"
            >
              {year}
            </Badge>
            <Badge
              variant="ghost"
              fontWeight="light"
              borderWidth="1px"
              borderRadius="5px"
              isTruncated
            >
              {writer}
            </Badge>
          </HStack>
        </Box>
      </Box>
    </Hover>
  );
};

export default Card;
