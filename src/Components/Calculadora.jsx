import React, { useState } from 'react'

import '../Styles/Calculadora.css'
import { Container } from '@mui/system'
import { Box } from '@mui/material'


export default function Calculadora() {
    const [price, setPrice] = useState(0);
    const [estado_O, setEstado_O] = useState('DF');
    const [estado_D, setEstado_D] = useState('AM');
    const [Resultado, setResultado] = useState(0);

    const [aliquota, setAliquota] = useState(1);
    const [origem, setOrigem] = useState(1);
    const [destino, setDestino] = useState(1);
    //const [aliquotaTest, setTest] = useState();


    function resultHandler(e) { //Form 1 "Preço da Compra"
        var priceInput = e.target.value;

        setPrice(priceInput);
        doAliquota()
        setResultado(price * aliquota);
        e.preventDefault();
    }

    function doAliquota() {

       /* switch (setTest()) {
            case estado_D === 'AC' && estado_O === 'Al':
                setAliquota(0.12)
                console.log(aliquotaTest)
                break;

            case destino === origem:
                setAliquota(destino)
                setResultado(price + aliquota)
                console.log(aliquota)
                break;
            default:
                break;
        }*/

        if (estado_D === 'AC') {
            setDestino(0.17)
        }
        else if (estado_D === 'AL') {
            setDestino(0.18)
        }
        else if (estado_D === 'AP') {
            setDestino(0.18)
        }
        else if (estado_D === 'AM') {
            setDestino(0.18)
        }
        else if (estado_D === 'BA') {
            setDestino(0.18)
        }
        else if (estado_D === 'CE') {
            setDestino(0.18)
        }
        else if (estado_D === 'DF') {
            setDestino(0.18)
        }
        else if (estado_D === 'ES') {
            setDestino(0.17)
        }
        else if (estado_D === 'GO') {
            setDestino(0.17)
        }
        else if (estado_D === 'MA') {
            setDestino(0.18)
        }
        else if (estado_D === 'MT') {
            setDestino(0.17)
        }
        else if (estado_D === 'MS') {
            setDestino(0.17)
        }
        else if (estado_D === 'MG') {
            setDestino(0.18)
        }
        else if (estado_D === 'PA') {
            setDestino(0.17)
        }
        else if (estado_D === 'PB') {
            setDestino(0.18)
        }
        else if (estado_D === 'PR') {
            setDestino(0.18)
        }
        else if (estado_D === 'PE') {
            setDestino(0.18)
        }
        else if (estado_D === 'PI') {
            setDestino(0.18)
        }
        else if (estado_D === 'RJ') {
            setDestino(0.18)
        }
        else if (estado_D === 'RN') {
            setDestino(0.18)
        }
        else if (estado_D === 'RS') {
            setDestino(0.17)
        }
        else if (estado_D === 'RO') {
            setDestino(0.20)
        }
        else if (estado_D === 'RR') {
            setDestino(0.175)
        }
        else if (estado_D === 'SC') {
            setDestino(0.17)
        }
        else if (estado_D === 'SP') {
            setDestino(0.18)
        }
        else if (estado_D === 'SE') {
            setDestino(0.18)
        }
        else if (estado_D === 'TO') {
            setDestino(0.18)
        }

        if (estado_O === 'AC') {
            setOrigem(0.17)
        }
        else if (estado_O === 'AL') {
            setOrigem(0.18)
        }
        else if (estado_O === 'AP') {
            setOrigem(0.18)
        }
        else if (estado_O === 'AM') {
            setOrigem(0.18)
        }
        else if (estado_O === 'BA') {
            setOrigem(0.18)
        }
        else if (estado_O === 'CE') {
            setOrigem(0.18)
        }
        else if (estado_O === 'DF') {
            setOrigem(0.18)
        }
        else if (estado_O === 'ES') {
            setOrigem(0.17)
        }
        else if (estado_O === 'GO') {
            setOrigem(0.17)
        }
        else if (estado_O === 'MA') {
            setOrigem(0.18)
        }
        else if (estado_O === 'MT') {
            setOrigem(0.17)
        }
        else if (estado_O === 'MS') {
            setOrigem(0.17)
        }
        else if (estado_O === 'MG') {
            setOrigem(0.17)
        }
        else if (estado_O === 'PA') {
            setOrigem(0.18)
        }
        else if (estado_O === 'PB') {
            setOrigem(0.17)
        }
        else if (estado_O === 'PR') {
            setOrigem(0.18)
        }
        else if (estado_O === 'PE') {
            setOrigem(0.18)
        }
        else if (estado_O === 'PI') {
            setOrigem(0.18)
        }
        else if (estado_O === 'RJ') {
            setOrigem(0.18)
        }
        else if (estado_O === 'RN') {
            setOrigem(0.18)
        }
        else if (estado_O === 'RS') {
            setOrigem(0.18)
        }
        else if (estado_O === 'RO') {
            setOrigem(0.2)
        }
        else if (estado_O === 'RR') {
            setOrigem(17.5)
        }
        else if (estado_O === 'SC') {
            setOrigem(0.17)
        }
        else if (estado_O === 'SP') {
            setOrigem(0.18)
        }
        else if (estado_O === 'SE') {
            setOrigem(0.18)
        }
        else if (estado_O === 'TO') {
            setOrigem(0.18)
        }

        parseFloat(origem)
        parseFloat(destino)

        if (destino === origem) {
            setAliquota(destino)
            setResultado(price + aliquota)
            console.log(aliquota)
        }
        else if (origem !== destino) {
            setAliquota(destino)
            setResultado(price + aliquota);
            console.log(aliquota)
        }
    }

    return (
        <div>
            <h1 className='Title'>ICMS Calculator</h1>
            <Box m={10} />
            <Container maxWidth='xl'>
                <div className='wrapper'>
                    <form>
                        <input className='Compra'
                            placeholder='Preço da Compra'


                            type={'text'}
                            required
                            value={price}
                            onChange={(e) => setPrice(e.target.value)} />

                        <select className='botão_estado'
                            defaultValue=''
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
                            defaultValue=''
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

                        <button className='bResultado' onClick={resultHandler}>Calcular</button>
                        <Box className='Resultado'>R${Resultado},00</Box>
                    </form>
                </div>
            </Container>
        </div>
    )
}
