import React, { useState } from 'react'

import '../Styles/Calculadora.css'
import { Container } from '@mui/system'
import { Box } from '@mui/material'


export default function Calculadora() {
    const [price, setPrice] = useState();
    const [estado_O, setEstado_O] = useState('DF');
    const [estado_D, setEstado_D] = useState('AM');
    const [Resultado, setResultado] = useState();
    
    function resultHandler(e){ //Form 1 "Preço da Compra"
        var priceInput = e.target.value;
        setPrice(priceInput);
        setResultado(price * 2);
    }

    return (
        <div>
            <h1 className='Title'>ICMS Calculator</h1>
            <Box m={10} />
            <Container maxWidth='sm'>
                <div className='wrapper'>
                    <form>
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
                            <option value={'MA'}>MA</option> <option value={'MT'}>MT</option> <option value={'MS'}>MS</option>
                            <option value={'MG'}>MG</option> <option value={'PA'}>PA</option> <option value={'PB'}>PB</option>
                            <option value={'PR'}>PR</option> <option value={'PE'}>PE</option> <option value={'PI'}>PI</option>
                            <option value={'RJ'}>RJ</option> <option value={'RN'}>RN</option> <option value={'RS'}>RS</option>
                            <option value={'RO'}>RO</option> <option value={'RR'}>RR</option> <option value={'SC'}>SC</option>
                            <option value={'SP'}>SP</option> <option value={'SE'}>SE</option> <option value={'TO'}>TO</option>
                        </select>

                        <select className='botão_estado'
                            value={estado_D}
                            onChange={(e) => setEstado_D(e.target.value)}
                        >
                            <option value={'AC'}>AC</option> <option value={'AP'}>AP</option> <option value={'BA'}>BA</option>
                            <option value={'AL'}>AL</option> <option value={'AM'}>AM</option> <option value={'CE'}>CE</option>
                            <option value={'DF'}>DF</option> <option value={'ES'}>ES</option> <option value={'GO'}>GO</option>
                            <option value={'MA'}>MA</option> <option value={'MT'}>MT</option> <option value={'MS'}>MS</option>
                            <option value={'MG'}>MG</option> <option value={'PA'}>PA</option> <option value={'PB'}>PB</option>
                            <option value={'PR'}>PR</option> <option value={'PE'}>PE</option> <option value={'PI'}>PI</option>
                            <option value={'RJ'}>RJ</option> <option value={'RN'}>RN</option> <option value={'RS'}>RS</option>
                            <option value={'RO'}>RO</option> <option value={'RR'}>RR</option> <option value={'SC'}>SC</option>
                            <option value={'SP'}>SP</option> <option value={'SE'}>SE</option> <option value={'TO'}>TO</option>
                        </select>

                        <button onClick={resultHandler}>Calcular</button>
                        <h1 className='Resultado'>{Resultado}</h1>
                    </form>
                </div>
            </Container>
        </div>
    )
}
