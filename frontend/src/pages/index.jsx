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
      <Show>
        <Heading
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="5xl"
          mb="6"
        >
          Amazing movies
        </Heading>
      </Show>
      <Show delay={0.3}>
        <List />
      </Show>
    </>
  );
}

export default App;
