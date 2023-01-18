import React from 'react'
import './Styles/Navbar.css'

import { Container } from '@mui/system'
import { BrowserRouter as Route, Routes, Link } from "react-router-dom";

import { Home } from './Pages/Home'
import { Processos } from './Pages/Processos'
import { Sobre } from './Pages/Sobre'
import { TabICMS } from './Pages/TabICMS'

<Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='./Processos' element={<Processos />}></Route>
    <Route path='./Sobre' element={<Sobre />}></Route>
    <Route path='./TabICMS' element={<TabICMS />}></Route>
</Routes>


export default function Navbar() {
    return(
    <nav>
        <Container>
            <ul>
                <li className='styles.item'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='styles.item'>
                    <Link to='/Processos'>Processos</Link>
                </li>
                <li className='styles.item'>
                    <Link to='/Sobre'>Sobre</Link>
                </li>
                <li className='styles.item'>
                    <Link to='/TabICMS'>Tabela ICMS</Link>
                </li>
            </ul>
        </Container>
    </nav>
    )
}
