import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Button,
  Select,
  Text,
  Textarea,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';

function App() {
  // Variáveis de estado para o step 8
  const [valuation, setValuation] = useState('');
  const [capTableSocios, setCapTableSocios] = useState('');
  const [estrategiaSaida, setEstrategiaSaida] = useState('');
  const [alocacaoRecursos, setAlocacaoRecursos] = useState('');
  const [pitchLink, setPitchLink] = useState('');
  const [step, setStep] = useState(8);

  // Variável nome, para exibir no cabeçalho
  const nome = "Usuário"; // Altere conforme necessário

  const navigate = useNavigate();

  const nextStep = () => {
    navigate('/Step9'); // Navega para o Step3
  };

  const prevStep = () => {
    navigate('/Step7'); // Retorna para o Step1
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
        Bem-vindo{nome && ','} {nome}, ao Investor Report
        <Text fontSize="2xl" fontWeight="normal" mt={2}>
          {step === 8 ? 'Ao completar os campos sobre os dados financeiros da Startup você chega ao fim!' : ''}
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
          {step === 8 && (
            <FormControl display="flex" flexDirection="column" gap="4">
              <HStack spacing="4">
                <Box width="50%">
                  <FormLabel>Qual seu valuation?</FormLabel>
                  <Select placeholder="Selecione uma opção" value={valuation} onChange={(e) => setValuation(e.target.value)}>
                    <option value="1-4">R$ 1MM a R$ 4MM</option>
                    <option value="5-9">R$ 5MM a R$ 9MM</option>
                    <option value="10-11">R$ 10MM a R$ 11MM</option>
                    <option value="12-13">R$ 12MM a R$ 13MM</option>
                    <option value="14-15">R$ 14MM a R$ 15MM</option>
                    <option value="16-17">R$ 16MM a R$ 17MM</option>
                    <option value="18-19">R$ 18MM a R$ 19MM</option>
                    <option value="20">Mais de R$ 20MM</option>
                  </Select>
                </Box>

                <Box width="50%">
                  <FormLabel>Atualmente, qual o percentual de cap table dos sócios/founders?</FormLabel>
                  <Select placeholder="Selecione uma opção" value={capTableSocios} onChange={(e) => setCapTableSocios(e.target.value)}>
                    <option value="0-10">0% a 10%</option>
                    <option value="10-20">10% a 20%</option>
                    <option value="20-30">20% a 30%</option>
                    <option value="30-40">30% a 40%</option>
                    <option value="40-50">40% a 50%</option>
                    <option value="50-60">50% a 60%</option>
                    <option value="60-70">60% a 70%</option>
                    <option value="70-80">70% a 80%</option>
                    <option value="80-90">80% a 90%</option>
                    <option value="90-100">90% a 100%</option>
                  </Select>
                </Box>
              </HStack>

              <HStack spacing="4">
                <Box width="50%">
                  <FormLabel>Existe uma estratégia de saída da Startup? Qual?</FormLabel>
                  <Textarea
                    placeholder="Texto de resposta longa"
                    value={estrategiaSaida}
                    onChange={(e) => setEstrategiaSaida(e.target.value)}
                  />
                </Box>

                <Box width="50%">
                  <FormLabel>Como serão alocados os recursos recebidos?</FormLabel>
                  <Textarea
                    placeholder="Texto de resposta longa"
                    value={alocacaoRecursos}
                    onChange={(e) => setAlocacaoRecursos(e.target.value)}
                  />
                </Box>
              </HStack>

              <HStack spacing="4">
                <Box width="50%">
                  <FormLabel>Tem um pitch gravado ou PDF de apresentação? Informe o link aqui</FormLabel>
                  <Textarea
                    placeholder="Texto de resposta longa"
                    value={pitchLink}
                    onChange={(e) => setPitchLink(e.target.value)}
                  />
                </Box>
              </HStack>

              <HStack spacing="4">
                <Button
                  marginTop={4}
                  colorScheme="teal"
                  onClick={prevStep}
                  bg="blue"
                  color="white"
                  _hover={{ bg: "white", color: "blue", border: "2px solid blue" }}
                >
                  Anterior
                </Button>
                <Button
                  marginTop={4}
                  colorScheme="teal"
                  onClick={nextStep}
                  bg="blue"
                  color="white"
                  _hover={{ bg: "white", color: "blue", border: "2px solid blue" }}
                >
                  Finalizar e enviar!
                </Button>
              </HStack>
            </FormControl>
          )}
        </Center>
      </Flex>
    </Box>
  );
}

export default App;
