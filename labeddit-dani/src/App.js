import Header from "./components/Header/Header";
import Router from "./routes/Router"
import { ChakraProvider } from '@chakra-ui/react'
import {GlobalContext} from "./contexts/GlobalContext"
import { useEffect, useState } from "react";
import GlobalState from "./contexts/GlobalState";

function App() {
  const context = GlobalState();

  return (
  
      <GlobalContext.Provider value={context}>
      
      <ChakraProvider>
        <Router />
        

      </ChakraProvider>


      </GlobalContext.Provider>
  


  );
}

export default App;
