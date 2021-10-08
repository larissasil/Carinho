import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Local from './local'
import Mensagem from './mensagem'
import Caracteristicas from './caracteristicas'


export default function Index(props) {
  
  return (
    <div>
      <BrowserRouter>
        <div className="menu"> 
          <ul>
            <li> <Link to={{pathname: "/infoC/ntc/denunciaDetalhada", state: props.location.state}}> Mensagem </Link> </li>
            <li> <Link to={{pathname: "/infoC/ntc/denunciaDetalhada/caracteristica", state: props.location.state}}> Características </Link> </li>
            <li> <Link to={{pathname: "/infoC/ntc/denunciaDetalhada/local", state: props.location.state}}> Local </Link> </li>
          </ul>
        </div>

        <div className="conteudo">
          <Switch>
            <Route path="/infoC/ntc/denunciaDetalhada" exact={true} component={Mensagem} />
            <Route path="/infoC/ntc/denunciaDetalhada/caracteristica" exact={true} component={Caracteristicas} />
            <Route path="/infoC/ntc/denunciaDetalhada/local" exact={true} component={Local} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}