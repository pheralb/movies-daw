import React from "react";
import useFetchData from "@/hooks/useFetchData";
import { SimpleGrid, Text } from "@chakra-ui/react";
import Card from "@/components/movies/card";
import Loading from "@/components/loading";
import { Navigate } from "react-router-dom";

const ByCategory = ({ category }) => {
  const apiURL = import.meta.env.VITE_FILMS_BY_CATEGORY;
  const fetchMoviesByCategory = `${apiURL}/${category}`;
  const { data: data, loading, error } = useFetchData(fetchMoviesByCategory);

  if (loading) return <Loading text="Loading..." />;

  if (error) return <Navigate to="/404" />;

  return (
    <>
      <SimpleGrid minChildWidth="300px" column="4" spacing="5">
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

export default ByCategory;
