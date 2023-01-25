import React from 'react'
import '../Styles/Navbar.css'

import { Container } from '@mui/system'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
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
