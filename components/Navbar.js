import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  DarkMode,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Header = (props) => {
  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      {...props}
    >
      <Flex align="center"></Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}></Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Stack direction={["column", "row"]} spacing="24px">
          <Box spacing="24px" to="/">
            Home
          </Box>
          <Box spacing="24px" to="/how">
            How It works
          </Box>
          <Box spacing="24px" to="/faetures">
            Features
          </Box>

          <Box spacing="24px" to="/signup">
            <DarkMode>
              <Button onClick={toggleColorMode} size="sm" colorScheme="blue">
                Toggle Color Mode
              </Button>
            </DarkMode>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
};

export default Header;
