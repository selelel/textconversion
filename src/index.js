import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './App';
import { Provide } from './Components/context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provide>
      <Header />  
    </Provide>
  </StrictMode>
);
