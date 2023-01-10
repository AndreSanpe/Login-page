import AppRoutes from "./routes/AppRoutes";
import React from "react";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>      
    </BrowserRouter>
  );
}

export default App;
