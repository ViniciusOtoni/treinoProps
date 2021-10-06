import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import DetalheProduto from './pages/detalheProduto';
import Carrinho from './pages/carrinho';
import CarrinhoSemItem from './pages/carrinhoSemItem';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/rota1" component={DetalheProduto} />
                <Route path="/rota2" component={Carrinho} />
                <Route path="/rota3" component={CarrinhoSemItem} />
            </Switch>
        </BrowserRouter>
    )
}