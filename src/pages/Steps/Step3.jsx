import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  Button,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // Para enviar os dados para o backend

function Step3({ usuario_id }) {
  // Variáveis de estado para step 3
  const [clienteIdeal, setClienteIdeal] = useState('');
  const [propostaValor, setPropostaValor] = useState('');
  const [maturidade, setMaturidade] = useState('');
  const [qtdColaboradores, setQtdColaboradores] = useState('');
  const [step, setStep] = useState(3);
  const navigate = useNavigate();

  const nextStep = async () => {
    try {
      // Log dos dados para verificação
      const data = {
        usuario_id: 1,
        cliente_ideal: clienteIdeal,
        proposta_valor: propostaValor,
        maturidade,
        qtd_colaboradores: qtdColaboradores,
      };
      console.log('Dados a serem enviados:', data); // Verifique os dados aqui

      // Enviar dados para o backend
      const response = await axios.post('http://127.0.0.1:3333/step3', data);
      console.log(response.data);  // Exibe o resultado da resposta
      navigate('/Step4'); // Navega para o Step4 após enviar os dados
    } catch (error) {
      console.error('Erro ao salvar Step 3:', error.response ? error.response.data : error);
    }
  };

  const prevStep = () => {
    navigate('/Step2'); // Retorna para o Step2
  };

  return (
    <Box height="10vh">
      <Center
        as="header"
        height={176}
        bg="teal.500"
        color="white"
        backgroundColor={'#072AC8'}
        fontWeight="bold"
        fontSize="4xl"
        paddingBottom="8"
        flexDirection="column"
      >
        Investor Report
        <Text fontSize="2xl" fontWeight="normal" mt={2}>
          {step === 3 ? 'Nessa etapa você vai adicionar o perfil do cliente!' : ''}
        </Text>
      </Center>

      <Flex align="center" justify="center" bg="blackAlpha.200" height="calc(100vh - 150px)">
        <Center
          width="100%"
          maxWidth={840}
          bg="white"
          top={120}
          position="absolute"
          borderRadius={5}
          padding="6"
          boxShadow="0 1px 2px #ccc"
        >
          {step === 3 && (
            <FormControl display="flex" flexDirection="column" gap="4">
              <Box width="100%">
                <FormLabel>Quem é seu cliente ideal?</FormLabel>
                <Textarea placeholder="Descreva seu cliente ideal" value={clienteIdeal} onChange={(e) => setClienteIdeal(e.target.value)} />
              </Box>

              <Box width="100%">
                <FormLabel>Qual sua proposta de valor?</FormLabel>
                <Textarea placeholder="Descreva sua proposta de valor" value={propostaValor} onChange={(e) => setPropostaValor(e.target.value)} />
              </Box>

              <Box width="100%">
                <FormLabel>Qual o nível de maturidade da sua Startup?</FormLabel>
                <Select placeholder="Selecione uma opção" value={maturidade} onChange={(e) => setMaturidade(e.target.value)}>
                  <option value="Ideação">Ideação</option>
                  <option value="Desenvolvimento">Desenvolvimento</option>
                  <option value="Validação">Validação</option>
                  <option value="Operação">Operação</option>
                  <option value="Tração">Tração</option>
                  <option value="Scale-up">Scale-up</option>
                </Select>
              </Box>

              <Box width="100%">
                <FormLabel>Qual a quantidade de colaboradores por operação?</FormLabel>
                <Select placeholder="Selecione uma opção" value={qtdColaboradores} onChange={(e) => setQtdColaboradores(e.target.value)}>
                  {Array.from({ length: 100 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  ))}
                </Select>
              </Box>

              <HStack spacing="4">
                <Button marginTop={4} colorScheme="teal" onClick={prevStep} bg="blue" color="white" _hover={{ bg: "white", color: "blue", border: "2px solid blue" }}>
                  Anterior
                </Button>
                <Button marginTop={4} colorScheme="teal" onClick={nextStep} bg="blue" color="white" _hover={{ bg: "white", color: "blue", border: "2px solid blue" }}>
                  Próximo
                </Button>
              </HStack>
            </FormControl>
          )}
        </Center>
      </Flex>
    </Box>
  );
}

export default Step3;
