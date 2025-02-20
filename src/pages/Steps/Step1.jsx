import React, { useState } from 'react';
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
  Text
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [step, setStep] = useState(1);
  const [nome, setNome] = useState('');
  const [site, setSite] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [anoFundacao, setAnoFundacao] = useState('');
  const [cidade, setCidade] = useState('');
  const navigate = useNavigate(); // Navegação para a próxima rota

  // Função para enviar os dados para o backend
  const sendStep1Data = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:3333/formulario/save-step1', {
        nome,
        site,
        linkedin,
        ano_fundacao: anoFundacao.split('-')[0],
        cidade,
        usuario_id: 1 // Aqui você pode passar o id do usuário autenticado, se aplicável
      });

      if (response.status === 200) {
        console.log('Dados enviados com sucesso:', response.data);
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  // Avançar para o próximo passo
  const nextStep = async () => {
    await sendStep1Data(); // Envia os dados para o backend antes de avançar
    const newStep = step + 1;
    setStep(newStep);
    localStorage.setItem('currentStep', newStep);

    // Navegar para a próxima etapa
    if (newStep === 2) {
      navigate('/Step2');  // Navega para o Step2
    }
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
          Agora você está preenchendo os dados iniciais de sua Startup
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
          {step === 1 && (
            <FormControl display="flex" flexDirection="column" gap="4">
              <Text fontSize="lg" fontWeight="bold" mb={2}>Dados da Startup</Text>

              <HStack spacing="4">
                <Box width="100%">
                  <FormLabel htmlFor="nome">Nome da Startup</FormLabel>
                  <Input id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                </Box>

                <Box width="100%">
                  <FormLabel htmlFor="site">Site da Startup</FormLabel>
                  <Input id="site" value={site} onChange={(e) => setSite(e.target.value)} />
                </Box>
              </HStack>

              <HStack spacing="4">
                <Box width="100%">
                  <FormLabel htmlFor="linkedin">Linkedin da Startup</FormLabel>
                  <Input id="linkedin" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
                </Box>

                <Box width="100%">
                  <FormLabel htmlFor="ano_fundacao">Ano de fundação</FormLabel>
                  <Input id="ano_fundacao" type="date" value={anoFundacao} onChange={(e) => setAnoFundacao(e.target.value)} />
                </Box>
              </HStack>

              <HStack>
                <Box width="100%">
                  <FormLabel>Cidade onde a startup está localizada</FormLabel>
                  <Select id="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} placeholder='Selecione uma opção'>
                    <option value='AC'>AC</option>
                    <option value='AL'>AL</option>
                    {/* Coloque as outras opções aqui */}
                  </Select>
                </Box>
              </HStack>

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
            </FormControl>
          )}
        </Center>
      </Flex>
    </Box>
  );
}

export default App;
