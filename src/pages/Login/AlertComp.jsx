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
    const refreshPage = () => {
        location.replace(location.href);
    };

    return (
        <Box
            transition="all 0.5s ease-in-out"
            zIndex="999"
            position="absolute"
            width="100%"
            bg="rgba(0,0,0,0.2)"
            backdropFilter="blur(4.1px)"
            minH="100vh"
            py={10}
            display="flex"
            justifyContent="center"
            alignItems="center">
            <Container maxW="550">
                <Box
                    textAlign="center"
                    bg="white"
                    p={8}
                    borderRadius="10"
                    boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)">
                    <h1>Ops! Algo deu errado</h1>
                    <p>Por favor, verifique o e-mail e a senha inseridos </p>
                    <br />
                    <Button
                        w="100%"
                        bg="#2b247b"
                        color="white"
                        _hover={{ bg: "whiteAlpha.900", color: "#2b247b" }}
                        borderColor="#2b247b"
                        onClick={refreshPage}
                        borderRadius="10px">
                        Refresh
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default AlertComp;
