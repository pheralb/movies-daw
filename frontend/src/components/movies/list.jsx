import React from "react";
import useFetchData from "@/hooks/useFetchData";
import { SimpleGrid } from "@chakra-ui/react";
import Card from "@/components/movies/card";
import Loading from "@/components/loading";

const List = () => {
  const apiURL = import.meta.env.VITE_ALL_LIST;
  const { data: data, loading, error } = useFetchData(apiURL);

  if (loading) return <Loading text="Loading..." />;

  if (error) return <p>Error</p>;

  return (
    <>
      <SimpleGrid minChildWidth="300px" column="4" spacing="10">
        {data?.map((movie) => {
          const { _id, title, rating, year, poster, plot, writer } = movie;
          return (
            <Card
              key={_id}
              id={_id}
              poster={poster}
              title={title}
              description={plot}
              year={year}
              writer={writer}
              rating={rating}
            />
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default List;
