import { useState } from 'react';
import Aval from '../assets/aval.png'

import {Container} from './styled'


export default function Index(props) {
  const [qtd, setQtd] = useState(0);

  function saibaMais() {
    alert('Essa é a denúncio do ' + props.nome);
    setQtd(qtd + 1);
  }


  return (
    <Container>
      <div className="titulob"> {props.nome} </div>
      <div className="aval"><img alt="" src={Aval} /></div>
      <div className="descr"> {props.tipo} </div>
      <div className="date"> {props.data} </div>
      <div className="botao"><button onClick={saibaMais}>Saiba Mais {qtd}</button></div>
    </Container>
  )
}
