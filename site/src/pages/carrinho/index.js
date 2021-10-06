import { Link } from "react-router-dom";
import { Container } from './styled';
import { useEffect, useState } from "react";
import Cookie from 'js-cookie';
import CarrinhoItem from "./carrinhoItem";
import { useHistory } from 'react-router-dom';


export default function Carrinho() {

    const [produtos, setProdutos] = useState([]);
    
    
    const navegation = useHistory()

    useEffect(carregarCarrinho, [] );

    function carregarCarrinho() {
        let r = Cookie.get('carrinho')
       
        
     
         r = r != undefined ? JSON.parse(r)
                       : []
                       
                       console.log(r)


        if( Cookie.get('carrinho') === undefined ) {
          navegation.push('/rota3')
        }

        
        setProdutos(r)
    }

    function remove(id) {
      
        //nessa parte a função filter retorna todos os itens do array, menos o item que foi selecionado par ser deletado localizado por seu id (:
        let r = produtos.filter(item => item.id !== id) // função filter, serve para filtrar todos os itens da lista
        //a variavel item criada nas funções map, filter, some são variaveis que acessam o json assim realizando as comparações com o json.
        
        // atualiza o valor do Cookie (:
        Cookie.set('carrinho', JSON.stringify(r))

        setProdutos([...r])

        if(Cookie.get('carrinho') === undefined)
        Cookie.remove('carrinho')
        
       
      
      
    }
    
    function alterarProduto(id, qtd) {
    
      let r = produtos.filter(item => item.id === id)[0];
      r.qtd = qtd;
  
      Cookie.set('carrinho', JSON.stringify(produtos));
   }


  return (
    <Container>
      <h1> Carrinho </h1>

      <div className="back"> <Link to="/" style={{color: "#000000", textDecoration:"none"}}> Voltar </Link> </div>

      <div className="itens">
        {produtos.map(item => 
        <CarrinhoItem key={item.id} // cada linha do map possuirá um id próprio
            info={item} 
            onUpdate={alterarProduto} 
            onRemove={remove} /> 
        )} 
      </div>

    </Container>
  )
}