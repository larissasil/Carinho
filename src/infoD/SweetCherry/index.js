
import { useState } from 'react'
import CardProduct from './cardProduct'
import { Container } from './styled'


export default function Index() {
  const [produtos, setProdutos] = useState([]);

  function listar() {

    const apiResponse = [
      {
        nome:"Brigadeiro", preco:"R$ 19,99", imagem:"/assets/images/brigadeiro.png"
      },
      {
        nome:"Red Velvet", preco:"R$ 25,99", imagem:"/assets/images/bolovermelho.png"
      },
      {
        nome:"Kit Kat Cake", preco:"R$ 90,99", imagem:"/assets/images/kitkat.png"
      }
    ]

    setProdutos(apiResponse);
    
  }


  return (
    <Container>
      <h1> Sweet Cherry </h1>
      <p> Sejam bem vindos a nossa lojinha linda </p>

      <button onClick={listar}> Listar </button>

      <div className="produtos">

        {produtos.map(item => 
          <CardProduct nome={item.nome} preco={item.preco} imagem={item.imagem} />
        )}

      </div>
    </Container>
  )
}