import React from 'react'
import '../Styles/Aplicativo.css'
import play from '../Imagens/GooglePlay.png'

const Aplicativo = () => {
    return (
    <div>
        <p>Se gostou do nosso site, teambém temos um aplicativo que pode tornar seu processo um pouco mais rápido</p>
        <button>Dowload</button>
        <img src={play} alt='Play' />
    </div>
    );
};

export default Aplicativo   