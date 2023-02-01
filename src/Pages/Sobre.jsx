import React from 'react'
import '../Styles/Sobre.css'

import { Box, Container } from '@mui/system'

const Sobre = () => {
    return (
        <div>
             <Box m={11}/>
            <Container maxWidth='sm' className='wrap3'>
                <p className='text2'>
                    Olá! Primeiramente gostaria de agradecer por ter interesse neste projeto<br></br>
                    Me chamo Giovani e este é meu projeto de uma matéria Projeto Transversal de Redes
                </p>
            </Container>
        </div>
    );
};
export default Sobre    