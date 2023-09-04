import React from "react";
import "./style.css";
import {
  Grid,
  GridItem,
  Box,
  Heading,
  Icon,
  Text,
  Input,
  HStack,
  Radio,
  Stack,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";
import { MdOutlinePhoneInTalk, MdEmail } from "react-icons/md";
import Logo from "./logo.png";

const AddChalan = () => {
  const inputStyle = {
    backgroundColor: "transparent",
    border: "none",
    width: "100px",
  };

  const placeholderStyle = {
    color: "rgb(14,6,82)",
    fontSize: "10px",
  };
  return (
    <Box p={10} alignContent="center" alignItems="center">
      <p class="rotingtxt" style={{ zIndex: "1" }}>
        B.T.C.M
      </p>
      <Box
        width="970px"
        mt={12}
        borderStyle="double"
        borderWidth="10px"
        borderColor="rgb(14,6,82)"
        bg="#c9b873"
        zIndex="1000"
        padding="10px"
      >
        <Grid
          h={900}
          templateRows="repeat(5, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={1}
          padding={0}
          margin={0}
        >
          {/*----------------------------------------------------------------------------- header row----------------------------------------------------------------------------- */}
          <GridItem colSpan={5} rowSpan={1} paddingTop="20px">
            <Grid
              h="200px"
              templateRows="repeat(3, 1fr)"
              templateColumns="repeat(5, 1fr)"
              gap={1}
            >
              {/* logo */}
              <GridItem rowSpan={2} width="120px" colSpan={1}>
                {" "}
                <img
                  src={Logo}
                  alt
                  style={{ height: "120px", width: "120px", margin: "20px" }}
                />
              </GridItem>
              {/* 2 */}
              <GridItem colSpan={1}>
                <Heading
                  as="h6"
                  color="rgb(14, 6, 82)"
                  padding="0px"
                  fontSize="10px"
                >
                  !! JAI VAISHNO DEVI !!
                </Heading>
              </GridItem>
              <GridItem colSpan={1}>
                <Heading
                  as="h6"
                  color="rgb(14, 6, 82)"
                  padding="0px"
                  fontSize="10px"
                >
                  !! JAI BAJRANG BALI
                </Heading>
              </GridItem>
              <GridItem colSpan={1}>
                <Heading
                  as="h6"
                  color="rgb(14, 6, 82)"
                  padding="0px"
                  fontSize="10px"
                >
                  II JAI BHERU JI MAHARAJ !!
                </Heading>
              </GridItem>
              {/* 5  teli section*/}
              <GridItem colSpan={1} rowSpan={2}>
                <Grid
                  h="150px"
                  width="180px"
                  templateRows="repeat(5, 1fr)"
                  templateColumns="60px 200px"
                  gap={0}
                >
                  <GridItem
                    rowSpan={4}
                    colSpan={1}
                    w="50px"
                    gap={0}
                    paddingBottom="30px"
                  >
                    <Icon
                      as={MdOutlinePhoneInTalk}
                      width="50px"
                      height="150px"
                      color="rgb(14, 6, 82)"
                      mt="-30px"
                    />
                  </GridItem>
                  <GridItem colSpan={1} rowSpan={0} p={0} m={0}>
                    <Heading
                      as="h6"
                      fontSize="10px"
                      color="rgb(14, 6, 82)"
                      padding="0px"
                    >
                      M:9166863725
                    </Heading>
                  </GridItem>
                  <GridItem colSpan={1} rowSpan={1}>
                    <Heading
                      as="h6"
                      fontSize="10px"
                      color="rgb(14, 6, 82)"
                      padding="0px"
                    >
                      M: 9783133725
                    </Heading>
                  </GridItem>
                  <GridItem colSpan={1} rowSpan={1}>
                    <Heading
                      as="h6"
                      fontSize="10px"
                      color="rgb(14, 6, 82)"
                      padding="0px"
                    >
                      M:7252903725
                    </Heading>
                  </GridItem>
                  <GridItem colSpan={1} rowSpan={1}>
                    <Heading
                      as="h6"
                      fontSize="10px"
                      color="rgb(14, 6, 82)"
                      padding="0px"
                    >
                      M: 9982770605
                    </Heading>
                  </GridItem>
                  <GridItem colSpan={2} rowSpan={1}>
                    <Heading
                      as="h6"
                      fontSize="10px"
                      color="rgb(14, 6, 82)"
                      paddingBottom="10px"
                      mt="-20px"
                    >
                      <Icon
                        as={MdEmail}
                        width="20px"
                        height="20px"
                        color="rgb(14, 6, 82)"
                      />
                      Email:opposhak145@gmill.com
                    </Heading>
                  </GridItem>
                </Grid>
              </GridItem>
              {/* 2nd row */}
              <GridItem colSpan={3}>
                <Heading
                  as="h6"
                  size="xs"
                  color="rgb(14, 6, 82)"
                  padding="0px"
                  style={{ textAlign: "center" }}
                  mt="-30px"
                >
                  ALL SUBJECT TO MAINPURI JURISDICTION ONLY
                </Heading>
                <Heading
                  as="h1"
                  fontSize="25px"
                  color="rgb(14, 6, 82)"
                  padding="0px"
                  style={{ textAlign: "center" }}
                >
                  BALAJI TRANSPORT COMPANY
                </Heading>{" "}
                <Heading
                  as="h1"
                  size="sm"
                  color="rgb(14, 6, 82)"
                  padding="0px"
                  style={{ textAlign: "center" }}
                >
                  (MAINPURI)
                </Heading>
                <Heading
                  as="h1"
                  size="md"
                  padding="10px"
                  style={{ textAlign: "center" }}
                  bg="rgb(14, 6, 82)"
                  color="#c2b274"
                >
                  TRANSPORTER & COMMISSION AGENT
                </Heading>
              </GridItem>
              {/* 3rd row */}
              <GridItem colSpan={5}>
                <Text
                  fontSize="xs"
                  style={{ textAlign: "center" }}
                  color="rgb(14, 6, 82)"
                >
                  B.O.: Krishna Dhaba, Near Sant Lal Rice Mills, Agra Road,
                  MAINPURI (U.P.)-205001, Mob.: 9783133725, 9982770605
                </Text>
                <Text
                  fontSize="xs"
                  style={{ textAlign: "center" }}
                  color="rgb(14, 6, 82)"
                >
                  H.O.: Anandpura, W. No. 4, Bhanwarpura 01, Kuchaman City,
                  Nagaur (Raj.) 341508, Mob.: 9887712795
                </Text>
              </GridItem>
            </Grid>
          </GridItem>
          {/* -----------------------------------------------------------------------------header row end----------------------------------------------------------------------------- */}

          {/* -----------------------------------------------------------------------------sidebar start -----------------------------------------------------------------------------*/}
          <GridItem rowSpan={4} colSpan={1}>
            <Grid
              templateRows="repeat(14, 1fr)"
              border="1px solid rgb(14, 6, 82)"
            >
              <GridItem>
                <Heading
                  fontSize="12px"
                  padding="10px"
                  textAlign="center"
                  bg="rgb(14, 6, 82)"
                  color="#c2b274"
                >
                  DAILY SERVICE
                </Heading>
              </GridItem>
              <GridItem>
                <Heading
                  as="h6"
                  fontSize="12px"
                  color="rgb(14, 6, 82)"
                  padding="0px"
                  textAlign="center"
                >
                  Rajasthan
                </Heading>
              </GridItem>
              <GridItem>
                <Heading
                  as="h6"
                  fontSize="12px"
                  color="rgb(14, 6, 82)"
                  padding="0px"
                  textAlign="center"
                >
                  Gujrat
                </Heading>
              </GridItem>
              <GridItem>
                <Heading
                  as="h6"
                  fontSize="12px"
                  color="rgb(14, 6, 82)"
                  padding="0px"
                  textAlign="center"
                >
                  Delhi
                </Heading>
              </GridItem>
              <GridItem>
                <Heading
                  as="h6"
                  fontSize="12px"
                  color="rgb(14, 6, 82)"
                  padding="0px"
                  textAlign="center"
                >
                  Hariyana
                </Heading>
              </GridItem>
              <GridItem>
                <Heading
                  as="h6"
                  fontSize="12px"
                  color="rgb(14, 6, 82)"
                  padding="0px"
                  textAlign="center"
                >
                  Punjab
                </Heading>
              </GridItem>
              <GridItem>
                <Heading
                  as="h6"
                  fontSize="12px"
                  color="rgb(14, 6, 82)"
                  padding="0px"
                  textAlign="center"
                >
                  Himanchal
                </Heading>
              </GridItem>
              <GridItem>
                <Heading
                  as="h6"
                  fontSize="12px"
                  color="rgb(14, 6, 82)"
                  padding="0px"
                  textAlign="center"
                >
                  J&K
                </Heading>
              </GridItem>
              <GridItem>
                <Heading
                  as="h6"
                  fontSize="12px"
                  color="rgb(14, 6, 82)"
                  padding="0px"
                  textAlign="center"
                >
                  & All Over India
                </Heading>
              </GridItem>
              <GridItem>
                <Heading
                  as="h6"
                  fontSize="10px"
                  padding="10px"
                  textAlign="center"
                  bg="rgb(14, 6, 82)"
                  color="#c2b274"
                >
                  BANK DETAILS BALAJI TRANSPORT COMPANY
                </Heading>
              </GridItem>
              <GridItem>
                <Heading
                  as="h6"
                  fontSize="11px"
                  color="rgb(14, 6, 82)"
                  padding="0px"
                  textAlign="center"
                >
                  ICICI Bank A/c: 671705603893
                </Heading>
              </GridItem>
              <GridItem>
                <Heading
                  as="h6"
                  fontSize="12px"
                  color="rgb(14, 6, 82)"
                  padding="0px"
                  textAlign="center"
                >
                  IFSC Code: ICIC0006717
                </Heading>
              </GridItem>
              <GridItem>
                <Heading
                  as="h6"
                  fontSize="12px"
                  color="rgb(14, 6, 82)"
                  padding="0px"
                  textAlign="center"
                >
                  Branch: Kuchaman City
                </Heading>
              </GridItem>
              <GridItem>
                <Heading
                  as="h6"
                  fontSize="12px"
                  color="rgb(14, 6, 82)"
                  padding="0px"
                  textAlign="center"
                >
                  Full Truck Load All Over India
                </Heading>
              </GridItem>
            </Grid>
          </GridItem>
          {/*----------------------------------------------------------------------------- sidebar end -----------------------------------------------------------------------------*/}

          {/*----------------------------------------------------------------------------- 2nd entry row start----------------------------------------------------------------------------- */}
          <GridItem colSpan={4} height="200px">
            <Grid templateColumns="repeat(3, 1fr)">
              <Grid
                templateRows="repeat(3, 1fr)"
                gap={1}
                bg="#c9b873"
                padding="20px"
                border="1px solid rgb(14, 6, 82)"
              >
                <GridItem>
                  <HStack spacing={1}>
                    <Box>
                      <Heading
                        as="h6"
                        color="rgb(14, 6, 82)"
                        padding="0px"
                        fontSize="12px"
                      >
                        Owner Name
                      </Heading>
                    </Box>
                    <Box>
                      <Input
                        type="text"
                        placeholder="............................"
                      />
                    </Box>
                  </HStack>
                </GridItem>{" "}
                <GridItem>
                  <HStack spacing={1}>
                    <Box>
                      <Heading
                        as="h6"
                        color="rgb(14, 6, 82)"
                        padding="0px"
                        fontSize="12px"
                      >
                        Driver Name
                      </Heading>
                    </Box>
                    <Box>
                      <Input
                        type="text"
                        placeholder="............................"
                      />
                    </Box>
                  </HStack>
                </GridItem>{" "}
                <GridItem>
                  <HStack spacing={1}>
                    <Box>
                      <Heading
                        as="h6"
                        color="rgb(14, 6, 82)"
                        padding="0px"
                        fontSize="12px"
                      >
                        Transport Attach
                      </Heading>
                    </Box>
                    <Box>
                      <Input
                        type="text"
                        placeholder="......................."
                      />
                    </Box>
                  </HStack>
                </GridItem>
              </Grid>
              <Grid templateRows="repeat(4, 1fr)" border="1px solid ">
                <GridItem>
                  <Heading
                    as="h6"
                    fontSize="12px"
                    padding="10px"
                    textAlign="center"
                    bg="rgb(14, 6, 82)"
                    color="#c2b274"
                    width="100%"
                  >
                    AT OWNER'S RISK
                  </Heading>
                </GridItem>
                <GridItem>
                  <HStack width="100%">
                    <Box width="100%">
                      <Heading
                        as="h6"
                        color="rgb(14, 6, 82)"
                        padding="0px"
                        fontSize="12px"
                      >
                        Transport Attach
                      </Heading>
                    </Box>
                    <Box width="100%" padding={0}>
                      <Input
                        padding={0}
                        type="text"
                        placeholder="......................."
                      />
                    </Box>
                  </HStack>
                </GridItem>
                <GridItem>
                  <Heading
                    as="h6"
                    fontSize="12px"
                    padding="10px"
                    textAlign="center"
                    bg="rgb(14, 6, 82)"
                    color="#c2b274"
                    width="100%"
                  >
                    SERVICETAX IS PAYABLE BY
                  </Heading>
                </GridItem>
                <GridItem>
                  <RadioGroup defaultValue="none">
                    <Stack spacing={0} direction="row">
                      <Radio
                        colorScheme="red"
                        value="consignor"
                        className="rad"
                      >
                        CONSIGNOR
                      </Radio>
                      <Radio
                        colorScheme="green"
                        value="consignee"
                        className="rad"
                      >
                        CONSIGNEE
                      </Radio>
                      <Radio
                        colorScheme="blue"
                        value="transporter"
                        className="rad"
                      >
                        TRANSPORTER
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </GridItem>
              </Grid>
              <VStack align="stretch" border="1px solid ">
                <Heading
                  fontSize="12px"
                  padding="10px"
                  textAlign="center"
                  bg="rgb(14, 6, 82)"
                  color="#c2b274"
                  width="100%"
                  fontWeight="bold"
                >
                  GST NO
                </Heading>
                <Box textAlign="center" color="rgb(14, 6, 82)" padding="5.1px">
                  08AULPP5805H1ZB
                </Box>
                <Heading
                  fontSize="12px"
                  padding="10px"
                  textAlign="center"
                  bg="rgb(14, 6, 82)"
                  color="#c2b274"
                  width="100%"
                  fontWeight="bold"
                >
                  PAN NO
                </Heading>
                <Box textAlign="center" color="rgb(14, 6, 82)">
                  AULPP5805H
                </Box>
              </VStack>
            </Grid>
          </GridItem>
          {/* -----------------------------------------------------------------------------2nd entry row end ----------------------------------------------------------------------------- */}
          {/* -----------------------------------------------------------------------------3rd entry section start----------------------------------------------------------------------------- */}
          <GridItem colSpan={4} height="150px" mt="-30px">
            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem colSpan={1}>
                <HStack
                  width="100%"
                  height="50%"
                  padding="0 20px"
                  border="1px solid rgb(14,6,82)"
                >
                  <Box width="100%">
                    <Heading
                      as="h6"
                      color="rgb(14, 6, 82)"
                      padding="0px"
                      fontSize="12px"
                    >
                      Consignor Name & Address
                    </Heading>
                  </Box>
                  <Box width="100%" padding={0}>
                    <Input
                      padding={0}
                      type="text"
                      placeholder="..........................................................................................................................................................................................."
                    />
                  </Box>
                </HStack>{" "}
                <HStack
                  width="100%"
                  height="50%"
                  padding="0 20px"
                  border="1px solid rgb(14,6,82)"
                >
                  <Box width="100%">
                    <Heading
                      as="h6"
                      color="rgb(14, 6, 82)"
                      padding="0px"
                      fontSize="12px"
                    >
                      Consignee Name & Address
                    </Heading>
                  </Box>
                  <Box width="100%" padding={0}>
                    <Input
                      padding={0}
                      type="text"
                      placeholder="......................................................................................................................................................"
                    />
                  </Box>
                </HStack>{" "}
              </GridItem>
              <GridItem colSpan={1}>
                <HStack
                  width="100%"
                  paddingLeft="10px"
                  border="1px solid rgb(14,6,82)"
                >
                  <Box width="100%">
                    <Heading
                      as="h6"
                      color="rgb(14, 6, 82)"
                      padding="0px"
                      fontSize="12px"
                    >
                      Date
                    </Heading>
                  </Box>
                  <Box width="100%" padding={0}>
                    <Input
                      padding={0}
                      type="date"
                      placeholder="......................."
                    />
                  </Box>
                </HStack>
                <HStack
                  width="100%"
                  paddingLeft="10px"
                  border="1px solid rgb(14,6,82)"
                >
                  <Box width="100%">
                    <Heading
                      as="h6"
                      color="rgb(14, 6, 82)"
                      padding="0px"
                      fontSize="12px"
                    >
                      From
                    </Heading>
                  </Box>
                  <Box width="100%" padding={0}>
                    <Input
                      padding={0}
                      type="text"
                      placeholder="......................."
                    />
                  </Box>
                </HStack>
                <HStack
                  width="100%"
                  paddingLeft="10px"
                  border="1px solid rgb(14,6,82)"
                >
                  <Box width="100%">
                    <Heading
                      as="h6"
                      color="rgb(14, 6, 82)"
                      padding="0px"
                      fontSize="12px"
                    >
                      TO
                    </Heading>
                  </Box>
                  <Box width="100%" padding={0}>
                    <Input
                      padding={0}
                      type="text"
                      placeholder="......................."
                    />
                  </Box>
                </HStack>
              </GridItem>
            </Grid>
          </GridItem>
          {/* -----------------------------------------------------------------------------3rd entry section end----------------------------------------------------------------------------- */}

          {/* -----------------------------------------------------------------------------4rd entry section start----------------------------------------------------------------------------- */}

          <GridItem colSpan={4} height="300px" rowSpan={1}>
            <table style={{ border: "1px solid" }}>
              <thead>
                <tr>
                  <th
                    style={{ fontSize: "12px", padding: "5px", width: "100px" }}
                  >
                    Packages
                  </th>
                  <th
                    style={{ fontSize: "12px", padding: "5px", width: "200px" }}
                  >
                    DESCRIPTION (Said to Contain)
                  </th>
                  <th
                    style={{ fontSize: "12px", padding: "5px", width: "100px" }}
                  >
                    WEIGHT
                  </th>
                  <th
                    style={{ fontSize: "12px", padding: "5px", width: "100px" }}
                  >
                    RATE
                  </th>
                  <th
                    style={{ fontSize: "12px", padding: "5px", width: "100px" }}
                  >
                    FREIGHT To Pay/Paid
                  </th>
                  <th
                    style={{ fontSize: "12px", padding: "5px", width: "100px" }}
                  >
                    ADVANCE
                  </th>
                  <th
                    style={{ fontSize: "12px", padding: "5px", width: "100px" }}
                  >
                    REMARKS
                  </th>{" "}
                </tr>
              </thead>
              <tbody>
                <tr style={{ height: "200px" }}>
                  <td style={{ border: "1px solid", width: "50px" }}>
                    <input
                      type="text"
                      style={inputStyle}
                      placeholderStyle={placeholderStyle}
                      placeholder=".........."
                    />
                  </td>
                  <td style={{ border: "1px solid" }}>
                    <input
                      type="text"
                      style={inputStyle}
                      placeholderStyle={placeholderStyle}
                      placeholder=".............................."
                    />
                    <Text fontSize="8px" mt={10} mb="-50px">
                      नोट: टूट-फूट लीकेज की जिम्मेदारी व्यापारी की होगी। पार्टी
                      को माल का बीमा कराना अनिवार्य है। GST देने की जिम्मेदारी
                      पार्टी की होगी।
                    </Text>
                  </td>
                  <td style={{ border: "1px solid" }}>
                    <input
                      type="text"
                      style={inputStyle}
                      placeholderStyle={placeholderStyle}
                      placeholder=".............................."
                    />
                  </td>
                  <td style={{ border: "1px solid" }}>
                    <input
                      type="text"
                      style={inputStyle}
                      placeholderStyle={placeholderStyle}
                      placeholder=".............................."
                    />
                  </td>
                  <td style={{ border: "1px solid" }}>
                    <input
                      type="text"
                      style={inputStyle}
                      placeholderStyle={placeholderStyle}
                      placeholder=".............................."
                    />
                  </td>
                  <td style={{ border: "1px solid" }}>
                    <input
                      type="text"
                      style={inputStyle}
                      placeholderStyle={placeholderStyle}
                      placeholder=".............................."
                    />
                  </td>
                  <td style={{ border: "1px solid" }}>
                    <input
                      type="text"
                      style={inputStyle}
                      placeholderStyle={placeholderStyle}
                      placeholder=".............................."
                    />
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3}>
                    S.C:
                    <input
                      type="text"
                      style={inputStyle}
                      placeholderStyle={placeholderStyle}
                      placeholder=".............................."
                    />{" "}
                  </td>
                  <td colSpan={4}>
                    TOTAL:
                    <input
                      type="text"
                      style={inputStyle}
                      placeholderStyle={placeholderStyle}
                      placeholder=".............................."
                    />{" "}
                  </td>
                </tr>
              </tfoot>
            </table>
          </GridItem>
          {/* -----------------------------------------------------------------------------4rd entry section end----------------------------------------------------------------------------- */}

          {/* -----------------------------------------------------------------------------footer row ----------------------------------------------------------------------------*/}
          <GridItem
            colSpan={5}
            height="100px"
            rowSpan={1}
            mt="-20px"
            paddingLeft="20px"
          >
            <Grid templateRows="repeat(2,1fr)">
              <GridItem colSpan={3}>
                <Text fontSize="xs" color="rgb(14, 6, 82)" fontWeight="bold">
                  1. The above fillup details are ture and has filled before us.
                  2. Sender or his agent has checked the papers of the vehicle
                  and fully satisfied.
                </Text>
                <Text fontSize="xs" fontWeight="bold" color="rgb(14, 6, 82)">
                  3. Sender or his agent is agreed to the terms and conditions
                  printed overleaf.
                </Text>
              </GridItem>
              <GridItem>
                <label
                  style={{
                    color: "rgb(14, 6, 82)",
                    fontWeight: "bold",
                    padding: "0px",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  Value:{" "}
                </label>
                <input
                  type="text"
                  style={inputStyle}
                  placeholderStyle={placeholderStyle}
                  placeholder=".............................."
                />
              </GridItem>
              <GridItem>
                <label
                  style={{
                    color: "rgb(14, 6, 82)",
                    fontWeight: "bold",
                    padding: "0px",
                    fontSize: "12px",
                  }}
                >
                  Sign Driver.:{" "}
                </label>
                <input
                  type="text"
                  style={inputStyle}
                  placeholderStyle={placeholderStyle}
                  placeholder=".............................."
                />
              </GridItem>
              <GridItem>
                <Heading
                  as="h6"
                  color="rgb(14, 6, 82)"
                  padding="0px"
                  fontSize="12px"
                >
                  For: BALAJI TRANSPORT COMPANY
                </Heading>
              </GridItem>
            </Grid>
          </GridItem>
          {/*--------------------------------------------------------------------------------- footer row end -----------------------------------------------------------------------*/}
        </Grid>
      </Box>
    </Box>
  );
};

export default AddChalan;
