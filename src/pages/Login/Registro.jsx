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
        <Box className="fundo">
            {" "}
            {/* SQUAD 9: classes em css */}
            <Container maxW="55rem">
                {" "}
                {/* Aumentei a largura do container */}
                <Box className="caixaPrincipal">
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
                                placeholder="Nome Completo"
                                value={nomeCompleto}
                                onChange={(e) =>
                                    setNomeCompleto(e.target.value)
                                }
                                className="campos"
                                bg="whiteAlpha.200"
                                border="2px solid rgba(255, 255, 255, 0.5)"
                                borderRadius="40px"

                                // Ajustei para 100% da largura
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <Input
                                id="numeroTelefone"
                                type="tel"
                                placeholder="Número de Telefone"
                                value={numeroTelefone}
                                onChange={handlePhoneChange}
                                className="campos"
                                bg="whiteAlpha.200"
                                border="2px solid rgba(255, 255, 255, 0.5)"
                                borderRadius="40px" // Ajustei para 100% da largura
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <Input
                                id="email"
                                type="email"
                                placeholder="E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="campos"
                                bg="whiteAlpha.200"
                                border="2px solid rgba(255, 255, 255, 0.5)"
                                borderRadius="40px" // Ajustei para 100% da largura
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <Input
                                id="senha"
                                type="password"
                                placeholder="Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                className="campos"
                                bg="whiteAlpha.200"
                                border="2px solid rgba(255, 255, 255, 0.5)"
                                borderRadius="40px" // Ajustei para 100% da largura
                            />
                        </FormControl>
                    </VStack>

                    <Button
                        p={"1.5rem"}
                        mt={"3rem"}
                        w="30%" // Alinhei o botão para ocupar a largura total
                        bg="#FAF9F6" // Fundo branco
                        color="#072AC8" // Texto preto
                        _hover={{ bg: "#e5e5e5" }} // Efeito de hover com fundo cinza claro
                        onClick={handleSubmit}
                        borderRadius="40px"
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
