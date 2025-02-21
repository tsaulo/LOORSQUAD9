import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
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

const Login = () => {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [message, setMessage] = useState(""); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Tentando login com:", { username, password });

    try {
      const response = await fetch("http://127.0.0.1:3333/loginAdm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: username, password: password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Salvar o token de autenticação no localStorage
        localStorage.setItem("token", data.token);

        setMessage("Login bem-sucedido!");
        console.log("Token recebido:", data.token);

        // Redirecionar para a página inicial
        window.location.href = "http://localhost:5173/";
      } else {
        setMessage(data.error || "Erro ao fazer login");
        console.error("Erro na resposta do servidor:", data);
      }
    } catch (error) {
      setMessage("Erro na conexão com o servidor");
      console.error("Erro:", error);
    }
  };

  return (
    
    <><Box height="10vh">
      <Center></Center>
    </Box><div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Acesse o sistema de Administrador</h1>
          <div className="input-field">
            <input
              type="text"
              placeholder="E-mail"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)} />
            <FaUser className="icon" />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <FaLock className="icon" />
          </div>

          <button className="bg-red" type="submit">Login</button>
          {message && <p className="message">{message}</p>}

        </form>
      </div></>
  );
};

export default Login;