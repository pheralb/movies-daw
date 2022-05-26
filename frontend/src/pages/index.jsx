import { Heading } from "@chakra-ui/react";
import Show from "@/animations/show";
import List from "@/components/movies/list";
import Helmet from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>PlayMoviez</title>
      </Helmet>
      <Show delay={0}>
        <Heading
        bgGradient="linear(to-l, purple.400, pink.400)"
          bgClip="text"
          fontSize="5xl"
          mb="6"
        >
          Amazing movies
        </Heading>
      </Show>
      <List />
    </>
  );
}

export default App;
