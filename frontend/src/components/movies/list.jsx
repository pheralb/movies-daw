import React from "react";
import axios from "axios";
import { Button, HStack, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { useInfiniteQuery } from "react-query";
import { IoAddOutline, IoWarningSharp } from "react-icons/io5";
import Card from "@/components/movies/card";
import Loading from "@/components/loading";
import Show from "@/animations/show";

const List = () => {
  const apiURL = import.meta.env.VITE_ALL_LIST;

  const fetchData = ({ pageParam = 1 }) => {
    return axios.get(`${apiURL}?page=${pageParam}`);
  };

  const {
    isLoading,
    isError,
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    error,
    status
  } = useInfiniteQuery(["movies"], fetchData, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
    retry:"false" 
  });
  console.log(isFetchingNextPage)

  if (isError) {
    return (
    <HStack mr="2" borderWidth="1px" borderRadius="10px" p="2">
      <Icon as={IoWarningSharp} size="22" color="red.500" />
      <Text color="red.500">Error fetching data</Text>
    </HStack>
    )
  }

  if(isLoading){
    return (<Loading></Loading>)
  }

  let loadMoreDisplay = "block"
  if(isLoading || error || !hasNextPage){
    loadMoreDisplay = "none"
  }

  return (
    <>
      {data?.pages.map((group, i) => {
        return (
          <>
            <div key={i}>
              <SimpleGrid minChildWidth="300px" column="2" spacing="5" mb="5">
                {group.data.map((movie) => (
                  <Show delay={0.3}>
                    <Card
                      key={movie._id}
                      id={movie._id}
                      poster={movie.poster}
                      title={movie.title}
                      description={movie.plot}
                      year={movie.year}
                      writer={movie.writer}
                      rating={movie.rating}
                    />
                  </Show>
                ))}
              </SimpleGrid>
            </div>
          </>
        );
      })}
      <Button
        display={loadMoreDisplay}
        variant="ghost"
        borderWidth="1px"
        isDisabled={!hasNextPage || error || isLoading || isFetchingNextPage}
        onClick={fetchNextPage}
        w="100%"
        fontWeight="light"
        leftIcon={<IoAddOutline />}
        isLoading={isFetchingNextPage}
        loadingText="Loading more..."
      >
        Load More
      </Button>
    </>
  )
};

export default List;
