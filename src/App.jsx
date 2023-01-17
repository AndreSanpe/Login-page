import { ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import theme from './styles/Theme.jsx';

function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      
      <AppRoutes />
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
