import { Container } from './styled'


export default function Index(props) {


  function verMais() {
    alert('Estou vendo mais o evento ' + props.tipo);
  }


  return (
      <Container>
        <div className="Image-sc">
          <img src={props.imagem} height="200" alt="" />
        </div>
        <div className="Text-sc">
          {props.descricao}
        </div>
        <div className="Button-sc">
          <button onClick={verMais}> {props.tipo} </button>
        </div>
      </Container>
  );
}
