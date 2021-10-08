import { Link } from "react-router-dom";



export default function Index(props) {
  return (
    <div>
          <h2> {props.info.nome} </h2>
          <p> {props.info.mensagem} </p>
          <Link to={{
            pathname: '/infoC/ntc/denunciaDetalhada',
            state: props.info
          }}> 
            <button> Ver denúncia </button>
          </Link>
          <br /> <br />
    </div>
  )
}