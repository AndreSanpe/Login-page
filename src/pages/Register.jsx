import React from "react";

const Register = () => {
    return (
        <div>
            <h1>Cadastrar</h1>
            <div>
                <label htmlFor="name"> Nome: 
                <input type="text" id="name"/>
                </label>
                <label htmlFor="password"> Senha: 
                <input type="text" id="password"/>
                </label>
                <button>Entrar</button>
                <span>Registrar</span>
            </div>
        </div>
    )
}

export default Register;