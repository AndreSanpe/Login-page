import React from "react";
import { Link } from "react-router-dom";
import Register from "./Register";

const Login = () => {
    return (
        <div>
            <h1>Faça seu login!</h1>
            <div>
                <label htmlFor="name"> Nome: 
                <input type="text" id="name"/>
                </label>
                <label htmlFor="password"> Senha: 
                <input type="text" id="password"/>
                </label>
                <button>Entrar</button>
                <Link to="/register">Registrar</Link>
            </div>
        </div>
    )
}

export default Login;