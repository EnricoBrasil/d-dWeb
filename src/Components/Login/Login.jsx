import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";
import "./Login.css";

const Login = () => {
    const [username, setUsename] = useState("");
    const [password, setPassword] = useState("");

    const hacndleSubmit = (event) => {
        event.preventDefault();
        alert("Enviando os dados: " +username + " - " +password);
    };

  return (
    <div className="container">
      <form onSubmit={hacndleSubmit}>
        <h1>Acesse a sua conta</h1>
        <div className="input-field">
          <input type="email" placeholder="E-mail" 
          onChange={(e) => setUsename(e.target.value)}/>
          <FaUser className="icon"/>
        </div>
        
        <div className="input-field">
          <input type="password" placeholder="Senha" 
          onChange={(e) => setPassword(e.target.value)}/>
          <FaLock className="icon"/>
        </div>

        <div className="recall-forget">
            <label>
                <input type="checkbox" />
                Lembrar de mim!
            </label>
            <a href="#"> Esqueceu a senha?</a>
        </div>

        <button>Entar</button>

        <div className="signup-link">
            <p>
                Não tem uma conta? <a href="#">Registrar</a>
            </p>

        </div>
      </form>
    </div>
  );
};

export default Login;
