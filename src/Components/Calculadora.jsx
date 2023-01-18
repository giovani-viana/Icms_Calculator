import React, { useState } from 'react'

import './Styles/Calculadora.css'
import { Container } from '@mui/system'
import { Box } from '@mui/material'


export default function Calculadora() {
    const [price, setPrice] = useState('');
    const [estado_O, setEstado_O] = useState('DF');
    const [estado_D, setEstado_D] = useState('AM');
    const [Resultado, setResultado] = useState();
    
    /*const handleSubmit = (e) => {
        e.preventDefaut();
        const ICMS = { price, estado_O, estado_D };

        console.log(ICMS);
    }*/
    

    function resultHandler(e){ //Form 1 "Preço da Compra"
        e.preventDefaut();
        var priceInput = e.target.value;
        setPrice(priceInput);
    }

    function Result(){
        var valEstadoD, valEstadoO;

        if (estado_D === 'DF') {
            setEstado_D(valEstadoD = 0,15)
        }

        else if (estado_D === 'AM') {
            setEstado_D(valEstadoD = 0,17)
        }

        if (estado_O === 'DF') {
            setEstado_O(valEstadoO = 0,15)
        }

        else if (estado_O === 'AM') {
            setEstado_O(valEstadoO = 0,17)
        }

        const aliquota = valEstadoD - valEstadoO;
        setResultado(aliquota * price)
    }

    return (
        <div>
            <h1 className='Title'>ICMS Calculator</h1>
            <Box m={10} />
            <Container maxWidth='sm'>
                <div className='wrapper'>
                    <form onSubmit={resultHandler}>
                        <input className='Compra'
                            placeholder='Preço da Compra'

                            type={'text'}
                            required
                            value={price}
                            onChange={(e) => setPrice(e.target.value)} />

                        <select className='botão_estado'
                            value={estado_O}
                            onChange={(e) => setEstado_O(e.target.value)}
                        >
                            <option value={'AC'}>AC</option> <option value={'AP'}>AP</option> <option value={'BA'}>BA</option>
                            <option value={'AL'}>AL</option> <option value={'AM'}>AM</option> <option value={'CE'}>CE</option>
                            <option value={'DF'}>DF</option> <option value={'ES'}>ES</option> <option value={'GO'}>GO</option>
                        </select>

                        <select className='botão_estado'
                            value={estado_D}
                            onChange={(e) => setEstado_D(e.target.value)}
                        >
                            <option value={'AC'}>AC</option> <option value={'AP'}>AP</option> <option value={'BA'}>BA</option>
                            <option value={'AL'}>AL</option> <option value={'AM'}>AM</option> <option value={'CE'}>CE</option>
                            <option value={'DF'}>DF</option> <option value={'ES'}>ES</option> <option value={'GO'}>GO</option>
                        </select>

                        <button onClick={ Result }>Calcular</button>
                        <h1 className='Resultado'>{Resultado}</h1>
                    </form>
                </div>
            </Container>
        </div>
    )
}
