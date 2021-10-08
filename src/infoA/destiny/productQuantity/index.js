
import { useState } from 'react'
import { Container } from './styled'


export default function ProductQuantity() {
  const [qtd, setQtd] = useState(0);

  function incrementar() {
    if (qtd >= 10)
      return;
    setQtd(qtd+1)
  }

  function decrementar() {
    if (qtd === 0) 
      return;
    setQtd(qtd-1)
  }

  return (
    <Container>
      <div className="menos" onClick={decrementar}>
        -
      </div>

      <div className="quantidade">
        {qtd}
      </div>

      <div className="mais" onClick={incrementar}>
        +
      </div>
    </Container>
  )
}