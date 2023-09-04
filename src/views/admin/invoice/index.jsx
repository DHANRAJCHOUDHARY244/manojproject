/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Balaji Transport Company - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Balaji Transport Company (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import { Box} from "@chakra-ui/react";
import ComplexTable from "views/admin/invoice/components/ComplexTable";
import {
  columnsDataComplex,
} from "views/admin/invoice/variables/columnsData";
import tableDataComplex from "views/admin/invoice/variables/tableDataComplex.json";
import React from "react";

export default function Settings() {
  // Chakra Color Mode
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }} w='100%' >
        <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
    </Box>
  );
}
