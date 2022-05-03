import React, { useState } from "react";
import useFetchData from "@/hooks/useFetchData";
import { Navigate, useParams } from "react-router-dom";
import Loading from "@/components/loading";
import Show from "@/animations/show";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";

const Movie = () => {
  let params = useParams();
  const apiURL = import.meta.env.VITE_ONE_FILM;
  const fetchOneMovie = `${apiURL}/${params.id}`;

  const { data: data, loading, error } = useFetchData(fetchOneMovie);
  if (loading) return <Loading text="Loading..." />;
  if (error) return <Navigate to="/404" />;

  return (
    <>
      <Flex direction={{ base: "column", md: "row" }} w="100%" rounded="lg">
        <Image
          rounded="md"
          h={{ base: 300, md: 400 }}
          fit="cover"
          src={data.poster}
          alt="Article"
        />
        <Box>
          <Box p={{ base: 0, md: 6 }}>
            <Box>
              <Show>
                <Text
                  mt={{ base: 6, md: 0 }}
                  fontSize={{ base: "5xl", md: "7xl" }}
                >
                  {data.title}
                </Text>
              </Show>
              <Text
                fontSize="xs"
                textTransform="uppercase"
                color="gray.500"
                mb={{ base: 5, md: 6 }}
              >
                {data.genre}
              </Text>
            </Box>
            <Text fontSize="16px" mb="6">
              {data.plot}
            </Text>
            <Breadcrumb separator="-" mb="3" color="gray.500">
              <BreadcrumbItem>
                <Text isTruncated>{data.director}</Text>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <Text isTruncated>{data.released}</Text>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Movie;
