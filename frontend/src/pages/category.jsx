import React from "react";
import { useParams } from "react-router-dom";
import Show from "@/animations/show";
import { Heading } from "@chakra-ui/react";
import ByCategory from "@/components/movies/byCategory";
import Helmet from "react-helmet";

const Catalogo = () => {
  let params = useParams();
  return (
    <>
      <Helmet>
        <title>PlayMoviez - {params.name}</title>
      </Helmet>
      <Show>
        <Heading
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="5xl"
          mb="6"
        >
          {params.name}
        </Heading>
      </Show>
      <Show delay={0.3}>
        <ByCategory category={params.name} />
      </Show>
    </>
  );
};

export default Catalogo;
