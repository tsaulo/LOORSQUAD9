import React, { useState } from "react";
import AlertComp from "./Alert.jsx";
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
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:3333/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password: senha }),
            });

            const data = await response.json();

            if (response.ok) {
                // ✅ Salva token e ID do usuário no localStorage
                localStorage.setItem("token", data.token);
                localStorage.setItem("usuario_id", data.userId);

                setMessage("Login bem-sucedido!");

                // ✅ Redireciona após salvar os dados
                navigate("/Step1");
            } else {
                setMessage(data.error || "Erro ao fazer login");
                console.error("Erro na resposta do servidor:", data);
            }
        } catch (error) {
            setMessage("Erro na conexão com o servidor");
            console.error("Erro:", error);
        }
    };

    return (
        <Box
            bg="#2b247b"
            bgImage="url('https://cdn.svgator.com/images/2022/06/use-svg-as-background-image-particle-strokes.svg')"
            bgBlendMode="overlay"
            minH="100vh"
            py={10}
            display="flex"
            justifyContent="center"
            alignItems="center">
            <AlertComp display="none" z-index="999" position="fixed" />
            <Container maxW="600">
                <Box
                    bg="rgba(162, 194, 255, 0.27)"
                    p={8}
                    borderRadius="10"
                    boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
                    backdropFilter="blur(4.1px)">
                    <VStack spacing={8}>
                        <Heading
                            color="white"
                            mb={6}
                            textAlign="center"
                            fontSize="28">
                            Bem-vindo ao relatorio do Investidor
                        </Heading>

                        <InputGroup>
                            <Input
                                type="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                bg="whiteAlpha.100"
                                color="white"
                                border="2px solid rgba(255, 255, 255, 0.2)"
                                borderRadius="10px"
                                _placeholder={{ color: "whiteAlpha.700" }}
                                py={6}
                                px={4}
                                w="100%"
                            />
                        </InputGroup>

                        <InputGroup>
                            <Input
                                type={mostrarSenha ? "text" : "password"}
                                placeholder="Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                bg="whiteAlpha.100"
                                color="white"
                                border="2px solid rgba(255, 255, 255, 0.2)"
                                borderRadius="10px"
                                _placeholder={{ color: "whiteAlpha.700" }}
                                py={6}
                                px={4}
                                w="100%"
                            />
                            <InputRightElement h="full" pr={4}>
                                <IconButton
                                    icon={
                                        mostrarSenha ? (
                                            <ViewOffIcon />
                                        ) : (
                                            <ViewIcon />
                                        )
                                    }
                                    variant="ghost"
                                    onClick={() =>
                                        setMostrarSenha(!mostrarSenha)
                                    }
                                    color="white"
                                    _hover={{ bg: "whiteAlpha.200" }}
                                />
                            </InputRightElement>
                        </InputGroup>

                        <Button
                            w="100%"
                            bg="#2b247b"
                            color="white"
                            _hover={{ bg: "whiteAlpha.900", color: "#2b247b" }}
                            onClick={handleSubmit}
                            borderRadius="10px">
                            Entrar
                        </Button>

                        {message && (
                            <Text color="white" mt={4} textAlign="center">
                                {message}
                            </Text>
                        )}

                        <Text color="white" mt={4} textAlign="center">
                            Não tem uma conta?{" "}
                            <Link
                                href="#"
                                color="white"
                                fontWeight="bold"
                                _hover={{ textDecoration: "underline" }}>
                                Cadastre-se
                            </Link>
                        </Text>
                    </VStack>
                </Box>
            </Container>
        </Box>
    );
};

export default LoginPage;
