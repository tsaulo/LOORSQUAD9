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
    FormControl,
    FormLabel,
    useToast,
} from "@chakra-ui/react";
import "./Login.css";

const Registro = () => {
    const [nomeCompleto, setNomeCompleto] = useState("");
    const [numeroTelefone, setNumeroTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [message, setMessage] = useState("");
    let [hasError, setError] = useState(false);

    const toast = useToast();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(
                "http://localhost:2000/api/users/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        nomeCompleto,
                        numeroTelefone,
                        email,
                        senha,
                    }),
                }
            );

            if (response.ok) {
                const data = await response.json();
                setMessage("Cadastro bem-sucedido!");
                toast({
                    title: "Cadastro realizado!",
                    status: "success",
                    duration: 3000,
                });
                console.log("Usuário registrado com ID:", data.id);
            } else {
                setMessage("Erro ao registrar o usuário");
                toast({
                    title: "Erro ao registrar",
                    status: "error",
                    duration: 3000,
                });
                console.error("Erro na resposta do servidor");
            }
        } catch (error) {
            setError(true);

            setMessage("Erro na conexão com o servidor");
            toast({
                title: "Erro de conexão",
                status: "error",
                duration: 3000,
            });
            console.error("Erro:", error);
        }
    };

    const handlePhoneChange = (e) => {
        const phone = e.target.value;

        if (/^\d*$/.test(phone)) {
            setNumeroTelefone(phone);
        }
    };

    return (
        <Box
            bgImage="url('https://cdn.svgator.com/images/2022/06/use-svg-as-background-image-particle-strokes.svg')"
            bgBlendMode="overlay"
            bgColor={
                !hasError ? "rgba(43, 36, 123, 0.5)" : "rgba(146, 5, 9, 0.7)"
            }
            className="fundo">
            {" "}
            {/* SQUAD 9: classes em css */}
            <Container maxW="55rem">
                {" "}
                {/* Aumentei a largura do container */}
                <Box
                    bg="rgba(170, 184, 223, 0.16);"
                    boxShadow="0 8px 16px 0 rgba(42, 42, 46, 0.2)"
                    backdropFilter="blur(8px)"
                    p={8}
                    borderRadius="10px"
                    className="caixaPrincipal">
                    <Text
                        fontSize="3rem"
                        fontWeight={"bold"}
                        padding={"1.5rem"}
                        mb="6">
                        Crie sua conta
                    </Text>

                    <VStack spacing={9}>
                        {" "}
                        {/* Aumentei o spacing entre os campos */}
                        <FormControl isRequired>
                            <Input
                                id="nomeCompleto"
                                type="text"
                                _placeholder={{ color: "whiteAlpha.700" }}
                                placeholder="Nome Completo"
                                value={nomeCompleto}
                                onChange={(e) =>
                                    setNomeCompleto(e.target.value)
                                }
                                className="campos"
                                bg="whiteAlpha.200"
                                border="2px solid rgba(255, 255, 255, 0.2)"
                                borderRadius="10px"

                                // Ajustei para 100% da largura
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <Input
                                id="numeroTelefone"
                                type="tel"
                                _placeholder={{ color: "whiteAlpha.700" }}
                                placeholder="Número de Telefone"
                                value={numeroTelefone}
                                onChange={handlePhoneChange}
                                className="campos"
                                bg="whiteAlpha.200"
                                border="2px solid rgba(255, 255, 255, 0.2)"
                                borderRadius="10px" // Ajustei para 100% da largura
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <Input
                                id="email"
                                type="email"
                                _placeholder={{ color: "whiteAlpha.700" }}
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="campos"
                                bg="whiteAlpha.200"
                                border="2px solid rgba(255, 255, 255, 0.2)"
                                borderRadius="10px" // Ajustei para 100% da largura
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <Input
                                id="senha"
                                type="password"
                                placeholder="Senha"
                                _placeholder={{ color: "whiteAlpha.700" }}
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                className="campos"
                                bg="whiteAlpha.200"
                                border="2px solid rgba(255, 255, 255, 0.2)"
                                borderRadius="10px" // Ajustei para 100% da largura
                            />
                        </FormControl>
                    </VStack>

                    <Button
                        p={"1.5rem"}
                        mt={"3rem"}
                        w="30%" // Alinhei o botão para ocupar a largura total
                        bg="#2b247b"
                        color="whiteAlpha.900"
                        _hover={{ bg: "whiteAlpha.900", color: "#2b247b" }}
                        onClick={handleSubmit}
                        borderRadius="10px"
                        fontWeight={"bold"}>
                        Registrar
                    </Button>

                    {message && (
                        <Text
                            color="red"
                            fontWeight={"bold"}
                            m="10"
                            textAlign="center">
                            {message}
                        </Text>
                    )}

                    <Text color="white" mt={"2rem"} textAlign="center">
                        Já possui uma conta?{" "}
                        <Link
                            href="/"
                            color="white"
                            fontWeight="bold"
                            _hover={{ textDecoration: "underline" }}>
                            Faça Login
                        </Link>
                    </Text>
                </Box>
            </Container>
        </Box>
    );
};

export default Registro;
