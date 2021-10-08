import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import './styles.css'


import Teste from "./InfoX/teste";
import Contador from "./InfoX/comunicacaoComps/contador";
import Pedido from "./InfoX/comunicacaoComps/finalizacaoPedido/pedido";
import ConclusaoPedido from "./InfoX/comunicacaoComps/finalizacaoPedido/conclusao";

//import App from "./infoA/destiny";
//import App from "./infoB/amaze";
import App from './InfoX/home'
import DetalheProduto from './InfoX/detalheProduto'
import Carrinho from './InfoX/carrinho'

import NTC from './infoC/NTC/home'
import NTCDenunciaDetalhada from './infoC/NTC/denunciaDetalhada'

import SWT from './infoD/SweetCherry'


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/detalhe" component={DetalheProduto} />
        <Route path="/carrinho" component={Carrinho} />
        
        <Route path="/infoD/swt" exact={true} component={SWT} />
        <Route path="/infoC/ntc" exact={true} component={NTC} />
        <Route path="/infoC/ntc/denunciaDetalhada" exact={true} component={NTCDenunciaDetalhada} />

        <Route path="/teste" component={Teste} />
        <Route path="/infoX/contador" exact={true} component={Contador} />
        <Route path="/infoX/pedido" component={Pedido} />
        <Route path="/infoX/conclusao" component={ConclusaoPedido} />

      </Switch>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
