import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home'
import { Processos } from './Pages/Processos'
import { Sobre } from './Pages/Sobre'
import { TabICMS } from './Pages/TabICMS'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Processos' element={<Processos />}></Route>
        <Route path='/Sobre' element={<Sobre />}></Route>
        <Route path='/TabICMS' element={<TabICMS />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
