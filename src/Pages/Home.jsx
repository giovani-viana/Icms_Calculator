import React from 'react'
import { Outlet } from 'react-router-dom';

import Calculadora from '../Components/Calculadora.jsx';

const Home = () => {
    return(
        <section>
            <Calculadora />
            <Outlet />
        </section>
    ); 
};

export default Home;