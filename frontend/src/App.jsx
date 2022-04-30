import Layout from "@/components/layout";
import { Heading } from "@chakra-ui/react";
import Show from "@/animations/show";

function App() {
  return (
    <>
      <Show>
        <Heading
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="5xl"
        >
          Amazing movies
        </Heading>
      </Show>
    </>
  );
}

export default App;
