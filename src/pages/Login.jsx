import { Button, Link, TextField } from '@mui/material';
import React from 'react';
import { CustomForm } from '../styles/LoginForm';
import { CustomPaper } from '../styles/LoginPaper';

function Login() {


  return (
    <CustomForm >
      <CustomPaper>
      <h1>Faça seu login!</h1>
      <TextField
          id="outlined-required"
          label="Name"
        />      
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      <Button variant="contained">Entrar</Button>
      <Link href="/register">Registrar</Link>
      </CustomPaper>
    </CustomForm>
  );
}

export default Login;
