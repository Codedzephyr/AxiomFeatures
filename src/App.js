import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./Components/HomePage";

function App() {
  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
