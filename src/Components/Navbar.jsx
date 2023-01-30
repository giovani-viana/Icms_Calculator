import React from 'react'
import '../Styles/Navbar.css'
import logo from '../Imagens/Logo.png'

import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className='navbar'>
            <Link to='/'><img src={logo} alt='ICMSCalculator' className='ImgLogo' /></Link>
            <ul className='list'>
                <li className='item'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='item'>
                    <Link to='/Aplicativo'>Aplicativo</Link>
                </li>
                <li className='item'>
                    <Link to='/Sobre'>Sobre</Link>
                </li>
                <li className='item'>
                    <Link to='/TabICMS'>Tabela ICMS</Link>
                </li>
            </ul>
        </nav>
    )
}
