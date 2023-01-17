import { Button, Link, TextField } from '@mui/material';
import React from 'react';
import { CustomForm } from '../styles/LoginForm';
import { CustomPaper } from '../styles/LoginPaper';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
function Register() {


  return (
    <CustomForm >
 
      <CustomPaper>
      <h1>Faça seu Cadastro!</h1>
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
      <Button variant="contained">Registrar</Button>
      <Link href="/">

<KeyboardReturnIcon />
</Link>
      </CustomPaper>
    </CustomForm>
  );
}

export default Register;
