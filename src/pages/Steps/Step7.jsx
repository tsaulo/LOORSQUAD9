import React, { useState } from 'react';
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
  RadioGroup,
  Radio,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importando o axios para fazer a requisição

function Step7() {
  // Variáveis de estado para step 7
  const [fonteReceita, setFonteReceita] = useState('');
  const [recebeuInvestimento, setRecebeuInvestimento] = useState('');
  const [mrr, setMrr] = useState('');
  const [valorUltimaCaptacao, setValorUltimaCaptacao] = useState('');
  const [ticketMedio, setTicketMedio] = useState('');
  const [equityNegociado, setEquityNegociado] = useState('');
  const [step, setStep] = useState(7);

  const navigate = useNavigate();

  // Função para enviar os dados do Step 7
  const submitStep7Data = async () => {
    const data = {
      usuario_id: 1,
      fonte_receita: fonteReceita, // Corrigido o nome da variável
      recebeu_investimento: recebeuInvestimento, // Corrigido o nome da variável
      mrr,
      valor_ultima_capta: valorUltimaCaptacao, // Corrigido o nome da variável
      ticket_medio: ticketMedio, // Corrigido o nome da variável
      percentual_equity_negociado: equityNegociado, // Corrigido o nome da variável
    };
    console.log("Enviando os dados:", data); // Verifique se os dados estão corretos
  
    try {
      const response = await axios.post('http://127.0.0.1:3333/formulario/step7', data);
      console.log('Dados enviados com sucesso:', response.data);
      navigate('/Step8'); // Navega para o Step8 após o sucesso
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  const nextStep = () => {
    submitStep7Data(); // Envia os dados antes de navegar para o próximo step
  };

  const prevStep = () => {
    navigate('/Step6'); // Retorna para o Step6
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
          Agora são os dados financeiros da Startup!
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
          {step === 7 && (
            <FormControl display="flex" flexDirection="column" gap="4">
              <Box width="100%">
                <FormLabel>Qual sua principal fonte de receita?</FormLabel>
                <Textarea
                  placeholder="Texto de resposta longa"
                  value={fonteReceita}
                  onChange={(e) => setFonteReceita(e.target.value)} // Corrigido o tratamento do evento
                />
              </Box>

              <Box width="100%">
                <FormLabel>Já recebeu algum investimento antes?</FormLabel>
                <RadioGroup value={recebeuInvestimento} onChange={setRecebeuInvestimento}>
                  <HStack spacing="4">
                    <Radio value="sim">Sim</Radio>
                    <Radio value="nao">Não</Radio>
                  </HStack>
                </RadioGroup>
              </Box>

              <Box width="100%">
                <FormLabel>Qual seu MRR?</FormLabel>
                <Select
                  placeholder="Selecione uma opção"
                  value={mrr}
                  onChange={(e) => setMrr(e.target.value)} // Corrigido o tratamento do evento
                >
                  <option value="0-10K">R$ 0 a R$ 10k</option>
                  <option value="11-30K">R$ 10k a R$ 30k</option>
                  <option value="31-40K">R$ 30k a R$ 40k</option>
                  <option value="41-50K">R$ 40k a R$ 50k</option>
                  <option value="51-60K">R$ 50k a R$ 60k</option>
                  <option value="61-70K">R$ 60k a R$ 70k</option>
                  <option value="71-80K">R$ 70k a R$ 80k</option>
                  <option value="81-90K">R$ 80k a R$ 90k</option>
                  <option value="91-100K">R$ 90k a R$ 100k</option>
                  <option value="101-200K">R$ 100k a R$ 200k</option>
                  <option value="201-300K">R$ 200k a R$ 300k</option>
                  <option value="301-400K">R$ 300k a R$ 400k</option>
                  <option value="401-500K">R$ 400k a R$ 500k</option>
                  <option value="501-700K">R$ 500k a R$ 700k</option>
                  <option value="701-1MM">R$ 700k a R$ 1MM</option>
                  <option value="+1MM">+R$ 1MM</option>
                </Select>
              </Box>

              <Box width="100%">
                <FormLabel>Qual o valor da sua última captação?</FormLabel>
                <Select
                  placeholder="Selecione uma opção"
                  value={valorUltimaCaptacao}
                  onChange={(e) => setValorUltimaCaptacao(e.target.value)} // Corrigido o tratamento do evento
                >
                  <option value="0">R$ 0</option>
                  <option value="1-10k">R$ 1 a R$ 10k</option>
                  <option value="11-20k">R$ 11k a R$ 20k</option>
                  <option value="21-30k">R$ 21k a R$ 30k</option>
                  <option value="31-40k">R$ 31k a R$ 40k</option>
                  <option value="41-50k">R$ 41k a R$ 50k</option>
                  <option value="51-100k">R$ 51k a R$ 100k</option>
                  <option value="101-200k">R$ 101k a R$ 200k</option>
                  <option value="201-300k">R$ 201k a R$ 300k</option>
                  <option value="301-400k">R$ 301k a R$ 400k</option>
                  <option value="401-500k">R$ 401k a R$ 500k</option>
                  <option value="501-1000k">R$ 501k a R$ 1MM</option>
                  <option value="+1MM">+R$ 1MM</option>
                </Select>
              </Box>

              <Box width="100%">
                <FormLabel>Qual seu ticket médio?</FormLabel>
                <Textarea
                  placeholder="Texto de resposta longa"
                  value={ticketMedio}
                  onChange={(e) => setTicketMedio(e.target.value)} // Corrigido o tratamento do evento
                />
              </Box>

              <Box width="100%">
                <FormLabel>Qual percentual de equity negociado na última captação?</FormLabel>
                <Select
                  placeholder="Selecione uma opção"
                  value={equityNegociado}
                  onChange={(e) => setEquityNegociado(e.target.value)} // Corrigido o tratamento do evento
                >
                  {[...Array(101).keys()].map((percent) => (
                    <option key={percent} value={percent}>
                      {percent}%
                    </option>
                  ))}
                </Select>
              </Box>

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

export default Step7;
