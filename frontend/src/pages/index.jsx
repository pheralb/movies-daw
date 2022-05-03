import Layout from "@/components/layout";
import { Heading } from "@chakra-ui/react";
import Show from "@/animations/show";
import List from "@/components/movies/list";

function App() {
  return (
    <>
      <Show>
        <Heading
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="5xl"
          mb="6"
        >
          Amazing movies
        </Heading>
        <List />
      </Show>
    </>
  );
}

export default App;
