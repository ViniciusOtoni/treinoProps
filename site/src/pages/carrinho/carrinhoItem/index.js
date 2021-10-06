
import { useState } from 'react';
import Contador from '../contador'
import { Container, RemoverIcon } from './styled'


export default function CarrinhoItem(props) {
    
    // variavel de estado, tem como valor o parametro recebido da tela do carrinho (:

    const [produto, setProduto] = useState(props.info);

     

    function alterarQtd(qtd1) {
        
        setProduto({...produto, qtd1 });
        props.onUpdate(produto.id, qtd1)
      }
    

    function remover() {
        props.onRemove(produto.id)
    }
    
    return (
        <Container>
          
          <div>
            <img className="capa" src={produto.imagem} alt="" />
             <Contador onChange={alterarQtd} value={produto.qtd} /> 
          </div>
    
          <div className="titulo"> 
            {produto.titulo} 
          </div>
          
          <div className="preco"> 
            <span>Preço unitário</span> <br /> 
            {produto.preco} 
          </div>
    
          <div className="qtd"> 
            <span>Qtd</span> <br /> 
            {produto.qtd} 
          </div>
    
          <div className="remover"> <RemoverIcon onClick={remover} /> </div>
    
        </Container>
      )
}