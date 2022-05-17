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
        //bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgGradient="linear(to-l, #766df2, #ec53a6)"
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
