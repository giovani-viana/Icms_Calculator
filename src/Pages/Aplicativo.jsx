import React from 'react'
import '../Styles/Aplicativo.css'

import { Box, Container } from '@mui/system'
import { DiAndroid } from 'react-icons/di'

const Aplicativo = () => {
    return (
        <div>
            <Container maxWidth='sm' className='wrap2'>
            <Box m={11}/>
            <div className='wrap'>
                <p className='text'>Se gostou do nosso site, também temos um aplicativo que pode tornar seu processo um pouco mais rápido</p>
            </div>
            <DiAndroid className='AndroidIcon' />
                <button className='Download'>Dowload</button>
            </Container>
        </div>

    );
};

export default Aplicativo   