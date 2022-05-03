import React from "react";
import useFetchData from "@/hooks/useFetchData";
import { SimpleGrid } from "@chakra-ui/react";
import Card from "@/components/movies/card";

const List = () => {
  const apiURL = import.meta.env.VITE_ALL_LIST;
  const { data: data, loading, error } = useFetchData(apiURL);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  return (
    <>
      <SimpleGrid minChildWidth="300px" column="4" spacing="5">
        {data?.map((movie) => {
          const { _id, title, year, poster, plot, writer } = movie;
          return (
            <Card
              key={_id}
              poster={poster}
              title={title}
              description={plot}
              year={year}
              writer={writer}
            />
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default List;
