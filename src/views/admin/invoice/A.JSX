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
const A = () => {
    return (
        <Box p={10} alignContent="center" alignItems="center">
            <Box
                width="80%"
                mt={12}
                borderStyle="double"
                borderWidth="10px"
                borderColor="rgb(14,6,82)"
                bg="#c9b873"
            >
                <Grid
                    h="500px"
                    templateRows="repeat(3, 1fr)"
                    templateColumns="repeat(4, 1fr)"
                    gap={1}
                    bg="#c9b873"
                    paddingTop="20px"
                >
                    <GridItem colSpan={1}>
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
                                        <Input type="text" placeholder="......................." />
                                    </Box>
                                </HStack>
                            </GridItem>
                        </Grid>
                    </GridItem>
                    <GridItem colSpan={1} border="1px solid rgb(14, 6, 82)">
                        <Grid rowSpan="repeat(2,1fr">
                            <GridItem>
                                {" "}
                                <Grid height="40%" templateRows="repeat(2, 1fr)">
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
                                </Grid>
                            </GridItem>
                            <GridItem>
                                {" "}
                                <Grid templateRows="repeat(2, 1fr)">
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
                            </GridItem>
                        </Grid>
                    </GridItem>
                   
                  
                    <GridItem colSpan={3}></GridItem>
                </Grid>
            </Box>
        </Box>
    );
};
export default A;
