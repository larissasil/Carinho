import { Container } from './styled'

import CardEventType from '../cardEventType'
import { useState } from 'react';


export default function Index() {
  const [eventos, setEventos] = useState([]);


  function listarEventos() {
    
    const apiResponse = [
      {
        tipo:"PEÇAS", descricao:"As peças de teatro são muito legais da vida.", imagem:"/assets/images/mask.svg"
      },
      {
        tipo:"SHOWS", descricao:"Os shows são legais quando são de pessoas legais.", imagem:"/assets/images/music.svg" 
      },
      {
        tipo:"MUSEUS", descricao:"Os museus são lugares muito legais para se estar.", imagem:"/assets/images/art.svg"
      }
    ]

    setEventos(apiResponse);
  }


  return (
    <Container>
      <button onClick={listarEventos}> Listar </button>

      <div className="Specific-search">
        {eventos.map(item => 
          <CardEventType tipo={item.tipo} descricao={item.descricao} imagem={item.imagem} />  
        )}
      </div>
    </ Container>
  );
}
