import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box as="nav" bg="gray" p={10}>
        <Flex justifyContent="flex-end" gap={20}>
          <Link to={"/"}>Product List</Link>
          <Link to={"/"}>Product List</Link>
          <Link to={"/"}>Product List</Link>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
