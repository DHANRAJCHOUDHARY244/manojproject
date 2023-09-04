import React from "react";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import Logo from "../../../views/admin/invoice/logo.png"
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      <img src={Logo} style={{
        height: "100px",
        width: "100px",
        margin: "20px"
      }} />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
