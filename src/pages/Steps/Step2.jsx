import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Center, FormControl, Input, FormLabel, HStack, Button, Text, Checkbox, CheckboxGroup, VStack, Textarea, Flex
} from '@chakra-ui/react'; // Adicione Flex aqui
import axios from 'axios'; // Certifique-se de importar o axios para enviar os dados para o backend


function Step2({ nome }) {
  const [modeloNegocio, setModeloNegocio] = useState([]);
  const [verticalAtuacao, setVerticalAtuacao] = useState([]);
  const [problema, setProblema] = useState('');
  const [solucao, setSolucao] = useState('');
  const [outroModelo, setOutroModelo] = useState('');
  const [outroVertical, setOutroVertical] = useState('');
  const navigate = useNavigate();

  const nextStep = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:3333/steps/2', {
        modelo_negocio: modeloNegocio.includes('Outro') ? [...modeloNegocio, outroModelo] : modeloNegocio,
        vertical_atuacao: verticalAtuacao.includes('Outro') ? [...verticalAtuacao, outroVertical] : verticalAtuacao,
        problema,
        solucao,
        usuario_id: 1 // Substitua por um ID de usuário real
      });

      console.log(response.data);
      navigate('/Step3'); // Navega para o Step3 após sucesso
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Houve um erro ao salvar os dados. Tente novamente.');
    }
  };

  const prevStep = () => {
    navigate('/Step1'); // Retorna para o Step1
  };

  return (
    <Box height="10vh">
      <Center as="header" height={176} bg="#072AC8" color="white" fontWeight="bold" fontSize="4xl" paddingBottom="8" flexDirection="column">
        Bem-vindo{nome && ','} {nome}, ao Investor Report
        <Text fontSize="2xl" fontWeight="normal" mt={2}>Nessa etapa você vai adicionar os dados do negócio!</Text>
      </Center>

      <Flex align="center" justify="center" bg="blackAlpha.200" height="calc(100vh - 150px)">
        <Center width="100%" maxWidth={840} bg="white" top={120} position="absolute" borderRadius={5} padding="6" boxShadow="0 1px 2px #ccc">
          <FormControl display="flex" flexDirection="column" gap="4">
            <HStack spacing="4">
              <Box width="50%">
                <FormLabel>Qual é o seu modelo de negócio?</FormLabel>
                <CheckboxGroup value={modeloNegocio} onChange={setModeloNegocio}>
                  <VStack align="start">
                    <Checkbox value="B2B">B2B</Checkbox>
                    <Checkbox value="B2C">B2C</Checkbox>
                    <Checkbox value="B2B2C">B2B2C</Checkbox>
                    <Checkbox value="B2G">B2G</Checkbox>
                    <Checkbox value="Outro" onChange={(e) => setOutroModelo(e.target.checked ? '' : outroModelo)}>
                      Outro
                    </Checkbox>
                    {modeloNegocio.includes('Outro') && (
                      <Input placeholder="Especifique" value={outroModelo} onChange={(e) => setOutroModelo(e.target.value)} />
                    )}
                  </VStack>
                </CheckboxGroup>
              </Box>

              <Box width="50%">
                <FormLabel>Qual sua vertical de atuação?</FormLabel>
                <CheckboxGroup value={verticalAtuacao} onChange={setVerticalAtuacao}>
                  <VStack align="start">
                    <Checkbox value="Fintech">Fintech</Checkbox>
                    <Checkbox value="Govtech">Govtech</Checkbox>
                    <Checkbox value="Edtech">Edtech</Checkbox>
                    <Checkbox value="Mediatech">Mediatech</Checkbox>
                    <Checkbox value="Outro" onChange={(e) => setOutroVertical(e.target.checked ? '' : outroVertical)}>
                      Outro
                    </Checkbox>
                    {verticalAtuacao.includes('Outro') && (
                      <Input placeholder="Especifique" value={outroVertical} onChange={(e) => setOutroVertical(e.target.value)} />
                    )}
                  </VStack>
                </CheckboxGroup>
              </Box>
            </HStack>

            <Box width="100%">
              <FormLabel>Qual problema você se propõe a resolver?</FormLabel>
              <Textarea placeholder="Descreva o problema" value={problema} onChange={(e) => setProblema(e.target.value)} />
            </Box>

            <Box width="100%">
              <FormLabel>Que solução você entrega para o problema apresentado?</FormLabel>
              <Textarea placeholder="Descreva a solução" value={solucao} onChange={(e) => setSolucao(e.target.value)} />
            </Box>

            <HStack spacing="4">
              <Button marginTop={4} colorScheme="blue" onClick={prevStep}>
                Anterior
              </Button>
              <Button marginTop={4} colorScheme="blue" onClick={nextStep}>
                Próximo
              </Button>
            </HStack>
          </FormControl>
        </Center>
      </Flex>
    </Box>
  );
}

export default Step2;
