


import { Container } from './styled'


export default function Index(props) {
  return (
    <Container>
          <div class="prod"> <img alt="" src={props.imagem} /> </div>
          <div class="nome-produto"> {props.nome} </div>
          <div class="valor"> {props.preco} </div>
          <div class="parcelamento"> {props.parcelamento} </div>
          <div class="adc-carrinho"> <button> Adicionar ao carrinho </button> </div>
    </Container> 
  )
}
