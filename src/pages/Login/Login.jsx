import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [message, setMessage] = useState(""); 
  const navigate = useNavigate();  // Adicionado para navegação

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Tentando login com:", { username, password });

    try {
      const response = await fetch("http://127.0.0.1:3333/login", {
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

        // Redirecionar para a página Step1
        navigate("/step1");  // Modificado para usar o React Router
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
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <button type="submit">Login</button>
        {message && <p className="message">{message}</p>} 
        <div className="signup-link">
          <p>
            Não tem uma conta? <Link to="/Registro">Cadastre-se</Link>
          </p>
        </div>
      </form>
    </div>
    
  );
};

export default Login;
