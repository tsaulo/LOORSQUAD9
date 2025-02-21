import React, { useState } from 'react';
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
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Email:', email, 'Senha:', senha);
  };

  return (
    <Box bg="blue.600" minH="100vh" py={10}>
      <Container maxW="md">
        <Box
          bg="whiteAlpha.200"
          p={8}
          borderRadius="lg"
          boxShadow="lg"
          backdropFilter="blur(10px)"
        >
          <VStack spacing={6}>
            <Heading color="white" mb={4}>
              Acesse o sistema
            </Heading>

            <InputGroup>
              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                bg="whiteAlpha.100"
                color="white"
                _placeholder={{ color: 'whiteAlpha.700' }}
              />
            </InputGroup>

            <InputGroup>
              <Input
                type={mostrarSenha ? 'text' : 'password'}
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                bg="whiteAlpha.100"
                color="white"
                _placeholder={{ color: 'whiteAlpha.700' }}
              />
              <InputRightElement>
                <IconButton
                  icon={mostrarSenha ? <ViewOffIcon /> : <ViewIcon />}
                  variant="ghost"
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                  color="white"
                  _hover={{ bg: 'whiteAlpha.200' }}
                />
              </InputRightElement>
            </InputGroup>

            <Button
              w="100%"
              bg="white"
              color="blue.600"
              _hover={{ bg: 'whiteAlpha.900' }}
              onClick={handleSubmit}
            >
              Login
            </Button>

            <Text color="white">
              Não tem uma conta?{' '}
              <Link color="white" textDecoration="underline">
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
