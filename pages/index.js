import {
  Flex,
  Heading,
  Input,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Hero from "./Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <div h="100vh" alignItems="center" justifyContent="center">
      <Navbar />
      <Hero />
    </div>
  );
}
