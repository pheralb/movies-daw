import React from "react";
import { useParams } from "react-router-dom";
import Show from "@/animations/show";
import { Heading } from "@chakra-ui/react";
import ByName from "@/components/movies/byName";
import Helmet from "react-helmet";

const Search = () => {
  let params = useParams();
  return (
    <>
      <Helmet>
        <title>PlayMoviez - Search - {params.name}</title>
      </Helmet>
      <Show>
        <Heading
          //bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgGradient="linear(to-l, #766df2, #ec53a6)"
          bgClip="text"
          fontSize="5xl"
          mb="6"
        >
          Searching: "{params.name}"
        </Heading>
      </Show>
      <Show delay={0.3}>
        <ByName name={params.name} />
      </Show>
    </>
  );
};

export default Search;
