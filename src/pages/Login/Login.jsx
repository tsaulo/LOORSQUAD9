import React, { useState } from 'react';
import {
  Box,
  Input,
  Button,
  Flex,
  VStack,
  Text,
  Link,
  Container,
  InputGroup,
  InputRightElement,
  IconButton,
  Heading,
  FormControl,
  useToast
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const response = await fetch('http://127.0.0.1:3333/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password: senha }),
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ Salva token e ID do usuário no localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('usuario_id', data.userId);

        setMessage('Login bem-sucedido!');
        

        // ✅ Redireciona após salvar os dados
        navigate('/Step1');
      } else {
        setMessage(data.error || 'Erro ao fazer login');
        console.error('Erro na resposta do servidor:', data);
      }
    } catch (error) {
      setMessage("Erro na conexão com o servidor");
      toast({ title: "Erro de conexão", status: "error", duration: 3000 });
      console.error("Erro:", error);
    }
  };

   const handleEsqueciSenha = () => {
    toast({
      title: "Recuperação de Senha",
      description: "Um link de recuperação será enviado para o seu e-mail.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
    console.log("Esqueci minha senha clicado!");
  };

  return (
    <Box className="fundo">
      <Container maxW="55rem">
        <Box className="caixaPrincipal">
          <Text fontSize="3rem" fontWeight={"bold"} padding={"1.5rem"} textAlign="center" mb="6">
                        Bem-vindo ao Investor Report
                      </Text>
          <VStack spacing={8}>
        
            <FormControl>
              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="campos"
                bg="whiteAlpha.200"
                border="2px solid rgba(255, 255, 255, 0.5)"
                borderRadius="40px"
              />
            </FormControl>

            <FormControl>
              <div style={{ position: 'relative' }}>
              <Input
                type={mostrarSenha ? 'text' : 'password'}
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
               className="campos"
                bg="whiteAlpha.200"
                border="2px solid rgba(255, 255, 255, 0.5)"
                borderRadius="40px"
              />
<IconButton
          icon={mostrarSenha ? <ViewOffIcon /> : <ViewIcon />}
          variant="ghost"
          onClick={() => setMostrarSenha(!mostrarSenha)}
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
          aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
          // Estilos para posicionamento absoluto
          style={{
            position: 'absolute',
            right: '5.5rem', // Ajuste conforme necessário (pr do InputRightElement é 4, que é 1rem)
            top: '50%',
            transform: 'translateY(-50%)',
            height: 'full', // Ou ajuste para um valor fixo se preferir
            width: '3rem', // Largura do botão para ajudar no pr
          }}
        />
              </div>


              <Flex justify="flex-start" ml={20} mt={4}> 
                <Text // botao apenas visual
                  as="button"
                  onClick={handleEsqueciSenha}
                  color="white" 
                  _hover={{ textDecoration: 'underline', color: 'gray.200' }} // Efeito de hover
                  fontSize="sm" 
                  fontWeight="bold"
                  bg="transparent"
                  border="none" 
                  cursor="pointer"
                  p={0} 
                >
                  Esqueci minha senha
                </Text>
              </Flex>
              
            </FormControl>
            

            
          </VStack>

          <Button
              p={"1.5rem"}
              mt={"3rem"}
              w="30%"  // Alinhei o botão para ocupar a largura total
              bg= "#FAF9F6"  // Fundo branco
              color="#04124f"  // Texto 
              _hover={{ bg: "#e5e5e5" }}  // Efeito de hover com fundo cinza claro
              onClick={handleSubmit}
              borderRadius="40px"
              fontWeight={"bold"}
            >
              Login
            </Button>

            {message && <Text color="red" mt={4} fontWeight={"bold"} textAlign="center">{message}</Text>}

            <Text color="white" mt={4} textAlign="center">
              Não tem uma conta?{' '}
              <Link href="registro" color="white" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
                Cadastre-se
              </Link>
            </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default LoginPage;
