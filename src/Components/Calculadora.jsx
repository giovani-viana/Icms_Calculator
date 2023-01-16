import React from 'react'
import './Calculadora.css'
import { Container } from '@mui/system'
import { Box } from '@mui/material'


export default function Calculadora() {
    return(
        <div>
            <h1 className='Title'>ICMS Calculator</h1>
            <Box m={10}/>
            <Container maxWidth='sm'>
                <div className='wrapper'>
                <input className='Compra'
                placeholder='Preço da Compra'
                onChange={() => {}}/>
                <input className='botão_estado'
                placeholder='Estado de Origem'
                onChange={() => {}}/>
                <input className='botão_estado'
                placeholder='Estado de Destino'
                onChange={() => {}}/>    
                </div>
            </Container>
        </div>
    )
}
