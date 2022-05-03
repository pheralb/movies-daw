import React from "react";
import { useParams } from "react-router-dom";
import Show from "@/animations/show";
import { Heading } from "@chakra-ui/react";
import ByCategory from "@/components/movies/byCategory";

const Catalogo = () => {
  let params = useParams();
  return (
    <>
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
