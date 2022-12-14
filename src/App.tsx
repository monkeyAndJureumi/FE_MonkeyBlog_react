import React from 'react';
import './App.css';
import RootRouter from "./router/RootRouter";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <RootRouter />
      </BrowserRouter>
  );
}

export default App;
