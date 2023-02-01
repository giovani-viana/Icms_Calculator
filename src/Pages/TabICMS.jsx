import React from 'react'
import '../Styles/Tab_Icms.css'

import tab from '../Imagens/Tab_2022.png'
import { Container } from '@mui/system'

const TabICMS = () => {
    return (
    <Container>
        <img src={tab} alt='Tab' width="800" className='Tab2' />
    </Container>

    );
};

export default TabICMS; 