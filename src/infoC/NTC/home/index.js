import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Denuncia from '../denuncia'


export default function Index() {

  const [denuncias, setDenuncias] = useState([]);

  function listar() {
    const r = [
      {
        nome: 'Elza',
        mensagem: 'Aconteceu uma coisa comigo muito difícil.'
      },
      {
        nome: 'Maria',
        mensagem: 'Vou te contar a minha história..'
      }
    ]

    setDenuncias(r);
  }

  useEffect(listar, []);

  return (
    <div>
      <h1> NTC | Denúncia </h1>

      <p> Aqui você está protegida! </p>

      <div className="denuncias">
        
        {denuncias.map(item => 
          <Denuncia info={item} />
        )}

      </div>

    </div>
  )
}