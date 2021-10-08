
import { useState } from 'react'
import Carrinho from '../assets/images/carrinho.svg'
import Lixeira from '../assets/images/lixeira.svg'

import { Container } from './styled'


export default function CardProduct(props) {
  const [qtd, setQtd] = useState(0);

  function verMais() {
    setQtd(qtd +1);
    alert('Estou vendo mais sobre o doce ' + props.nome);
  }


  return (
    <Container>
        <div className="img-doce"><img src={props.imagem} alt="" /></div>
        <div className="sobre-fav">
            <div className="nm-doce"> {props.nome} </div>
            <div className="icones">
                <div className="icone-carrinho"><img src={Carrinho} alt="" /> </div>
                <div className="icone-lixeira"><img src={Lixeira} alt="" /> </div>
            </div>
        </div>

        <div className="preco"> {props.preco} </div>
        <button onClick={verMais}>Ver mais {qtd} </button>
    </Container>
  )
}