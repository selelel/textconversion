import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/App';
import {Provide}  from './Components/Context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provide>
    <Header />  
  </Provide>
);
