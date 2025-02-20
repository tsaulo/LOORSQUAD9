import React, { useState, useEffect } from 'react';
import {
  Flex,
  Box,
  Center,
  FormControl,
  Divider,
  Input,
  FormLabel,
  HStack,
  Button,
  Select,
  Text,
  Checkbox,
  CheckboxGroup,
  VStack,
  Textarea,
  RadioGroup,
  Radio,
  ChakraProvider,
  Stack,
  Tooltip,
  Circle,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { FaWhatsapp, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import axios from 'axios';


function App() {
  const [step, setStep] = useState(1);
  const [nome, setNome] = useState('');
  const [site, setSite] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [anoFundacao, setAnoFundacao] = useState('');
  const [cidade, setCidade] = useState('');


  const [modeloNegocio, setModeloNegocio] = useState([]);
  const [verticalAtuacao, setVerticalAtuacao] = useState([]);
  const [problema, setProblema] = useState('');
  const [solucao, setSolucao] = useState('');
  const [isOtherBusinessChecked, setIsOtherBusinessChecked] = useState(false);
  const [isOtherVerticalChecked, setIsOtherVerticalChecked] = useState(false);
  const [id, setId] = useState(null);


  const [ultimaResposta, setUltimaResposta] = useState('Carregando...');



  // Variáveis de estado para step 3
  const [clienteIdeal, setClienteIdeal] = useState('');
  const [propostaValor, setPropostaValor] = useState('');
  const [maturidade, setMaturidade] = useState('');
  const [qtdColaboradores, setQtdColaboradores] = useState('');

  // Variáveis de estado para step 4
  const [estrategiaAquisicao, setEstrategiaAquisicao] = useState('');
  const [baseClientes, setBaseClientes] = useState('');
  const [planoCrescimento, setPlanoCrescimento] = useState('');
  const [maiorDesafio, setMaiorDesafio] = useState('');

  // Variáveis de estado para step 5
  const [tecnologias, setTecnologias] = useState([]);
  const [impactoTecnologias, setImpactoTecnologias] = useState([0, 0, 0, 0, 0, 0, 0]);

  // Variáveis de estado para step 6
  const [mercado, setMercado] = useState('');
  const [concorrentes, setConcorrentes] = useState('');


  // Variáveis de estado para step 7
  const [fonteReceita, setFonteReceita] = useState("");
  const [recebeuInvestimento, setRecebeuInvestimento] = useState("");
  const [mrr, setMrr] = useState("");
  const [valorUltimaCaptacao, setValorUltimaCaptacao] = useState("");
  const [ticketMedio, setTicketMedio] = useState("");
  const [equityNegociado, setEquityNegociado] = useState("");


  // Variáveis de estado para o step 8
  const [valuation, setValuation] = useState('');
  const [capTableSocios, setCapTableSocios] = useState('');
  const [estrategiaSaida, setEstrategiaSaida] = useState('');
  const [alocacaoRecursos, setAlocacaoRecursos] = useState('');
  const [pitchLink, setPitchLink] = useState('');










  // Avançar para o próximo passo
  const nextStep = () => {
    const newStep = step + 1;
    setStep(newStep);
    localStorage.setItem('currentStep', newStep);
  };

  // Voltar ao passo anterior
  const prevStep = () => {
    const newStep = step - 1;
    setStep(newStep);
    localStorage.setItem('currentStep', newStep);
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
          {step === 1 ? 'Agora você está preenchendo os dados iniciais de sua Startup' :
            step === 2 ? 'Nessa etapa você vai adicionar os dados do negócio!' :
              step === 3 ? 'Nessa etapa você vai adicionar o perfil do cliente!' :
                step === 4 ? 'Estamos quase lá!' :
                  step === 5 ? 'Nessa etapa você vai adicionar as tecnologias que são utilizadas!' :
                    step === 6 ? 'Agora você vai colocar os dados do mercado!' :
                      step === 7 ? 'Agora são os dados financeiros da Startup!' :
                        step === 8 ? 'Ao completar os campos sobre os dados financeiros da Startup você chega ao fim!' :
                          step === 9 ? 'Muito obrigado por preencher o formulário!' : ''}
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

              <Text fontSize="lg" fontWeight="bold" mb={2}>
                Dados da Startup
              </Text>


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
                    <option value='AP'>AP</option>
                    <option value='AM'>AM</option>
                    <option value='BA'>BA</option>
                    <option value='CE'>CE</option>
                    <option value='DF'>DF</option>
                    <option value='ES'>ES</option>
                    <option value='GO'>GO</option>
                    <option value='MA'>MA</option>
                    <option value='MT'>MT</option>
                    <option value='MS'>MS</option>
                    <option value='MG'>MG</option>
                    <option value='PA'>PA</option>
                    <option value='PB'>PB</option>
                    <option value='PR'>PR</option>
                    <option value='PE'>PE</option>
                    <option value='PI'>PI</option>
                    <option value='RJ'>RJ</option>
                    <option value='RN'>RN</option>
                    <option value='RS'>RS</option>
                    <option value='RO'>RO</option>
                    <option value='RR'>RR</option>
                    <option value='SC'>SC</option>
                    <option value='SP'>SP</option>
                    <option value='SE'>SE</option>
                    <option value='TO'>TO</option>
                  </Select>
                </Box>
              </HStack>


              <Button marginTop={4} colorScheme="teal" onClick={nextStep} bg="blue" color="white" _hover={{ bg: "white", color: "blue", border: "2px solid blue" }}>
                Próximo
              </Button>
            </FormControl>
          )}


          {step === 2 && (
            <FormControl display="flex" flexDirection="column" gap="4">
              <HStack spacing="4">
                <Box width="50%">
                  <FormLabel>Qual é o seu modelo de negócio?</FormLabel>
                  <CheckboxGroup value={modeloNegocio} onChange={setModeloNegocio} >
                    <VStack align="start">
                      <Checkbox value="B2B">B2B</Checkbox>
                      <Checkbox value="B2C">B2C</Checkbox>
                      <Checkbox value="B2B2C">B2B2C</Checkbox>
                      <Checkbox value="B2G">B2G</Checkbox>

                    </VStack>
                  </CheckboxGroup>
                </Box>


                <Box width="50%">
                  <FormLabel>Qual sua vertical de atuação?</FormLabel>
                  <CheckboxGroup value={verticalAtuacao} onChange={setVerticalAtuacao} >
                    <VStack align="start">
                      <Checkbox value="Fintech">Fintech</Checkbox>
                      <Checkbox value="Govtech">Govtech</Checkbox>
                      <Checkbox value="Edtech">Edtech</Checkbox>
                      <Checkbox value="Mediatech">Mediatech</Checkbox>

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
                <Button marginTop={4} colorScheme="teal" onClick={() => setStep(step - 1)} bg="blue" color="white" _hover={{ bg: "white", color: "blue", border: "2px solid blue" }}>
                  Anterior
                </Button>
                <Button marginTop={4} colorScheme="teal" onClick={nextStep} bg="blue" color="white" _hover={{ bg: "white", color: "blue", border: "2px solid blue" }}>
                  Próximo
                </Button>
              </HStack>
            </FormControl>
          )}

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
                <Select placeholder="Selecione uma opção" value={qtdColaboradores} onChange={(e) => setQtdColaboradores(e.target.value)} >
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

          {step === 4 && (
            <FormControl display="flex" flexDirection="column" gap="4">
              <Box width="100%">
                <FormLabel>Qual sua estratégia de aquisição de clientes?</FormLabel>
                <Textarea
                  placeholder="Descreva sua estratégia de aquisição de clientes"
                  value={estrategiaAquisicao}
                  onChange={(e) => setEstrategiaAquisicao(e.target.value)} />
              </Box>

              <Box width="100%">
                <FormLabel>Qual o tamanho da sua base de clientes?</FormLabel>
                <Select
                  placeholder="Selecione uma opção"
                  value={baseClientes}
                  onChange={(e) => setBaseClientes(e.target.value)}
                >
                  <option value="0 à 10">0 à 10</option>
                  <option value="11 à 30">11 à 30</option>
                  <option value="31 à 40">31 à 40</option>
                  <option value="41 à 50">41 à 50</option>
                  <option value="51 à 60">51 à 60</option>
                  <option value="61 à 70">61 à 70</option>
                  <option value="71 à 80">71 à 80</option>
                  <option value="81 à 90">81 à 90</option>
                  <option value="91 à 100">91 à 100</option>
                  <option value="101 à 200">101 à 200</option>
                  <option value="201 à 300">201 à 300</option>
                  <option value="301 à 400">301 à 400</option>
                  <option value="401 à 500">401 à 500</option>
                  <option value="+500">+500</option>
                </Select>
              </Box>

              <Box width="100%">
                <FormLabel>Como está estruturado seu plano de crescimento?</FormLabel>
                <Textarea
                  placeholder="Descreva seu plano de crescimento"
                  value={planoCrescimento}
                  onChange={(e) => setPlanoCrescimento(e.target.value)}
                />
              </Box>

              <Box width="100%">
                <FormLabel>Qual seu maior desafio e como pretende resolvê-lo?</FormLabel>
                <Textarea
                  placeholder="Descreva seu maior desafio e como pretende resolvê-lo"
                  value={maiorDesafio}
                  onChange={(e) => setMaiorDesafio(e.target.value)}
                />
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

          {step === 5 && (
            <FormControl display="flex" flexDirection="column" gap="4">
              <Box width="100%">
                <FormLabel>Liste as 5 principais tecnologias desenvolvidas e utilizadas em seu modelo de negócios.</FormLabel>
                <Textarea
                  placeholder="Exemplo: campo de texto"
                  value={tecnologias}
                  onChange={(e) => setTecnologias(e.target.value)}
                />
              </Box>

              <Box width="100%">
                <FormLabel>Selecione tecnologias que apresentam sinergia com sua startup e defina o nível de impacto para o seu negócio hoje.</FormLabel>
              </Box>

              <ChakraProvider>
                <Stack spacing={4} p={4}>
                  {["Gateway de pagamento", "Realidade Aumentada", "Análise de dados", "IA", "BlockChain", "Cripto", "Tokenização"].map((item, index) => (
                    <Stack key={index} direction="row" align="center">
                      <Text flex="1" textAlign="left">{item}</Text>
                      <RadioGroup
                        value={impactoTecnologias[index]?.toString() || "0"}
                        onChange={(value) => handleImpactoTecnologiasChange(index, value)}
                      >
                        <Stack direction="row" spacing={4}>
                          {[0, 1, 2, 3, 4, 5].map((value) => (
                            <Radio key={value} value={value.toString()}>
                              {value}
                            </Radio>
                          ))}
                        </Stack>
                      </RadioGroup>
                    </Stack>
                  ))}
                </Stack>
              </ChakraProvider>

              <HStack spacing="4" marginTop={4}>
                <Button onClick={prevStep} bg="blue" color="white" _hover={{ bg: "white", color: "blue", border: "2px solid blue" }}>Anterior</Button>
                <Button onClick={nextStep} bg="blue" color="white" _hover={{ bg: "white", color: "blue", border: "2px solid blue" }}>Próximo</Button>
              </HStack>
            </FormControl>
          )}



          {step === 6 && (
            <FormControl display="flex" flexDirection="column" gap="4">
              <Box width="100%">
                <FormLabel>
                  Descreva o tamanho do seu mercado indicando seu TAM, SAM e SOM{' '}
                  <Tooltip
                    label={
                      <>
                        <strong>TAM</strong>: Total Addressable Market (Mercado Totalmente Endereçável). Refere-se ao tamanho total do mercado para um produto ou serviço, assumindo que não há restrições no alcance do negócio.
                        <br /><br />
                        <strong>SAM</strong>: Serviceable Available Market (Mercado Disponível Endereçável). É a parte do TAM que pode ser efetivamente alcançada e atendida pela empresa.
                        <br /><br />
                        <strong>SOM</strong>: Serviceable Obtainable Market (Mercado Disponível Obtível). É a porção do SAM que a empresa realmente espera capturar dentro de um período de tempo específico.
                      </>
                    }
                    aria-label="tooltip"
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        width: '20px',
                        height: '20px',
                        backgroundColor: 'gray',
                        borderRadius: '50%',
                        textAlign: 'center',
                        cursor: 'pointer',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        lineHeight: '20px'
                      }}
                    >
                      ?
                    </span>
                  </Tooltip>
                </FormLabel>
                <Textarea
                  placeholder="Texto de resposta longa"
                  value={mercado}
                  onChange={(e) => setMercado(e.target.value)} // Adicionado onChange
                />
              </Box>

              <Box width="100%">
                <FormLabel>Liste seus principais concorrentes</FormLabel>
                <Textarea
                  placeholder="Texto de resposta longa"
                  value={concorrentes}
                  onChange={(e) => setConcorrentes(e.target.value)} // Adicionado onChange
                />
              </Box>

              <HStack spacing="4">
                <Button
                  marginTop={4}
                  colorScheme="teal"
                  onClick={() => setStep(step - 1)}
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

          {step === 7 && (
            <FormControl display="flex" flexDirection="column" gap="4">
              <HStack spacing="4">
                <Box width="50%">
                  <FormLabel>Qual sua principal fonte de receita?</FormLabel>
                  <Textarea
                    placeholder="Texto de resposta longa"


                  />
                </Box>

                <Box width="50%">
                  <FormLabel>Já recebeu algum investimento antes?</FormLabel>
                  <RadioGroup  >
                    <HStack spacing="4">
                      <Radio value="sim">Sim</Radio>
                      <Radio value="nao">Não</Radio>
                    </HStack>
                  </RadioGroup>
                </Box>
              </HStack>

              <HStack spacing="4">
                <Box width="50%">
                  <FormLabel>Qual seu MRR?</FormLabel>
                  <Select
                    placeholder="Selecione uma opção"

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

                <Box width="50%">
                  <FormLabel>Qual o valor da sua última captação?</FormLabel>
                  <Select
                    placeholder="Selecione uma opção"

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
              </HStack>

              <HStack spacing="4">
                <Box width="50%">
                  <FormLabel>Qual seu ticket médio?</FormLabel>
                  <Textarea
                    placeholder="Texto de resposta longa"


                  />
                </Box>

                <Box width="50%">
                  <FormLabel>Qual percentual de equity negociado na última captação?</FormLabel>
                  <Select
                    placeholder="Selecione uma opção"


                  >
                    {[...Array(101).keys()].map((percent) => (
                      <option key={percent} value={percent}>
                        {percent}%
                      </option>
                    ))}
                  </Select>
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
                  Próximo
                </Button>
              </HStack>
            </FormControl>
          )}




          {step === 8 && (
            <FormControl display="flex" flexDirection="column" gap="4">
              <HStack spacing="4">
                <Box width="50%">
                  <FormLabel>
                    Qual seu valuation? <br /><br />
                  </FormLabel>
                  <Select placeholder="Selecione uma opção" value={valuation} onChange={(e) => setValuation(e.target.value)} >
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
                  <FormLabel>
                    Atualmente, qual o percentual de cap table dos sócios/founders?
                  </FormLabel>
                  <Select placeholder="Selecione uma opção" value={capTableSocios} onChange={(e) => setCapTableSocios(e.target.value)} >
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
                  <FormLabel>
                    Existe uma estratégia de saída da Startup? Qual?
                  </FormLabel>
                  <Textarea
                    placeholder="Texto de resposta longa"
                    value={estrategiaSaida}
                    onChange={(e) => setEstrategiaSaida(e.target.value)} />
                </Box>

                <Box width="50%">
                  <FormLabel>
                    Como serão alocados os recursos recebidos?
                  </FormLabel>
                  <Textarea
                    placeholder="Texto de resposta longa"
                    value={alocacaoRecursos}
                    onChange={(e) => setAlocacaoRecursos(e.target.value)} />
                </Box>
              </HStack>

              <HStack spacing="4">
                <Box width="50%">
                  <FormLabel>
                    Tem um pitch gravado ou PDF de apresentação? Informe o link aqui
                  </FormLabel>
                  <Textarea
                    placeholder="Texto de resposta longa"
                    value={pitchLink}
                    onChange={(e) => setPitchLink(e.target.value)} />
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


          {step === 9 && (
            <Box position="relative" minHeight="20vh" bg="#fff">
              <Center flexDirection="column" textAlign="center" bg="#fff" p={4} borderRadius={8} boxShadow="md">
                <CheckIcon color="#072AC8" boxSize={12} />
                <Text fontSize="2xl" fontWeight="bold" color="#072AC8" mt={4}>
                  Muito obrigado por preencher o formulário!
                </Text>
                <Text fontSize="lg" mt={4}>
                  Seu formulário foi enviado com sucesso. Nossa equipe entrará em contato em breve.
                </Text>

                {/* Status Tracker */}
                <Box mt={8} width="100%" maxWidth="600px">
                  <Flex justifyContent="space-between" alignItems="center">
                    {['Enviado', 'Em análise', 'Concluído'].map((statusName, index) => (
                      <React.Fragment key={statusName}>
                        {index !== 0 && <Box flex="1" height="2px" bg="gray.300" mx={2}></Box>}
                        <Flex direction="column" alignItems="center">
                          <Circle size="40px" bg="gray.300" color="white">
                            {status === statusName ? <CheckIcon color="white" /> : <Text color="white" fontSize="sm">{index + 1}</Text>}
                          </Circle>
                          <Text mt={2} fontSize="sm" fontWeight="bold" color="gray.300">
                            {statusName}
                          </Text>
                        </Flex>
                      </React.Fragment>
                    ))}
                  </Flex>
                </Box>

                {/* Botões */}
                <Flex mt={8} justifyContent="center" flexWrap="wrap" gap={6} p={4}>
                  <Button
                    as="a"
                    href="https://wa.me/5511935025094?text=Olá,%20sou%20Startup%20e%20gostaria%20de%20tirar%20algumas%20dúvidas!"
                    target="_blank"
                    rel="noopener noreferrer"
                    bg="green.500"
                    color="white"
                    _hover={{ bg: 'green.600' }}
                    leftIcon={<FaWhatsapp />}
                    size="lg"
                  >
                    Conversar com um consultor
                  </Button>

                  <Button
                    bgGradient="linear(to-r, #072AC8, #1E90FF)"
                    color="white"
                    _hover={{
                      bgGradient: 'linear(to-r, #1E90FF, #072AC8)',
                      transform: 'scale(1.05)',
                    }}
                    size="lg"
                    onClick={() => {
                      if (window.confirm("Tem certeza de que deseja reiniciar o formulário?")) {
                        window.location.href = 'http://localhost:5173/Perguntas';
                      }
                    }}
                  >
                    Pivotei (Reiniciar Formulário)
                  </Button>

                  {/* Investor Report e One Page lado a lado */}
                  <Flex direction="row">
                    <Button
                      bgGradient="linear(to-r, #072AC8, #1E90FF)"
                      color="white"
                      _hover={{
                        bgGradient: 'linear(to-r, #1E90FF, #072AC8)',
                        transform: 'scale(1.05)',
                      }}
                      size="lg"
                      px={12}
                      py={6}
                    >
                      Responder Investor Report
                    </Button>

                    <Button
                      bgGradient="linear(to-r, #072AC8, #1E90FF)"
                      color="white"
                      _hover={{
                        bgGradient: 'linear(to-r, #1E90FF, #072AC8)',
                        transform: 'scale(1.05)',
                      }}
                      size="lg"
                      px={20}
                      py={6}
                      ml={7}
                      onClick={() => handleVerMais(registro.id)}
                    >
                      Gerar One Page
                    </Button>
                  </Flex>
                </Flex>



                <p>Última resposta: {ultimaResposta}</p>

                {/* Links para Instagram e LinkedIn */}
                <Flex justifyContent="center" mt={4} gap={6}>
                  {[
                    { href: "https://www.instagram.com/loor.vc/", icon: <FaInstagramSquare color="#E4405F" size={20} />, text: "loor.vc", color: "#E4405F" },
                    { href: "https://www.linkedin.com/company/loor-venture-capital/", icon: <FaLinkedin color="#0077B5" size={20} />, text: "loor.vc", color: "#0077B5" }
                  ].map(({ href, icon, text, color }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                      <Flex alignItems="center">
                        {icon}
                        <Text ml={2} fontWeight="bold" color={color}>{text}</Text>
                      </Flex>
                    </a>
                  ))}
                </Flex>
              </Center>
            </Box>
          )}



        </Center>
      </Flex>
    </Box>
  );
}

export default App;