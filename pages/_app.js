import { ChakraProvider } from "@chakra-ui/react";

export default function App(props) {
  const { Component, pageProps } = props;
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
