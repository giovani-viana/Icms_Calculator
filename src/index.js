import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/Index.css'
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './Pages/Home'
import Aplicativo from './Pages/Aplicativo'
import Sobre from './Pages/Sobre'
import TabICMS from './Pages/TabICMS'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Aplicativo' element={<Aplicativo />}></Route>
        <Route path='/Sobre' element={<Sobre />}></Route>
        <Route path='/TabICMS' element={<TabICMS />}></Route>
      </Routes>
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
