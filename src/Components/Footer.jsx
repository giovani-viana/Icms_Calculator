import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

import '../Styles/Footer.css'

export default function Footer(){
    return (
        <footer className='footer'>
            <ul>
                <li className='item'>
                    <a href='https://www.linkedin.com/in/giovaniviana/' target='blank'><FaLinkedin /> </a> 
                </li>
                <li>
                <a href='https://github.com/giovani-viana' target='blank'><FaGithub /> </a>
                </li>
            </ul>
            <p>
                <span>Giovani Viana</span> &copy; 2023
            </p>
        </footer>
    )
}