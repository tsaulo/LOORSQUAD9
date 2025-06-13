import React, { useState } from "react";
import {
    Box,
    Input,
    Button,
    VStack,
    Text,
    Link,
    Container,
    InputGroup,
    InputRightElement,
    IconButton,
    Heading,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const AlertComp = () => {
    return (
        <Container maxW="600">
            <Box
                bg="white"
                p={8}
                borderRadius="10"
                boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
                backdropFilter="blur(4.1px)">
                <h1 _color="white">Ops! Algo deu errado</h1>

                <br />
                <Button
                    w="100%"
                    bg="#2b247b"
                    color="white"
                    _hover={{ bg: "whiteAlpha.900", color: "#2b247b" }}
                    borderColor="#2b247b"
                    borderRadius="10px">
                    Fechar
                </Button>
            </Box>
        </Container>
    );
};

export default AlertComp;
