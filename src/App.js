import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import AppRouter from './router/AppRouter';
import {HashRouter} from 'react-router-dom'
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
