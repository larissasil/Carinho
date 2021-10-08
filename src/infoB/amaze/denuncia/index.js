import { Container } from './styled'
import DenunciaItem from '../denunciaItem'

import Fechar from '../assets/Fechar 5.png'
import { useState } from 'react'


export default function Index(){
    const [denuncias, setDenuncias] = useState([]);

    function listar() {
        const apiResponse = [
            {
                nome:"Fulano", tipo:"Latrocínio", data:"01/08/2021"
            },
            {
                nome:"Erik", tipo:"Assalto", data:"15/09/2021"
            },
            {
                nome:"Alan", tipo:"Briga", data:"25/09/2021"
            },
            {
                nome:"Matheus", tipo:"Desacato", data:"01/10/2021"
            }
        ]

        setDenuncias(apiResponse);
    }

    return(
        <Container>
            <div className="abox">
                <button onClick={listar}> Listar </button>

                <div className="Cabecalho">
                    <div className="txt">Deununcias, Jardim Colonial</div>
                    <div className="x"><img src={Fechar} alt="" /></div>
                </div>
            
                <div className="denuncs" id="style-2">

                    {denuncias.map(item => 
                        <DenunciaItem nome={item.nome} tipo={item.tipo} data={item.data} />
                    )}
                        
                </div>
            </div>
        </Container>
    )
} 