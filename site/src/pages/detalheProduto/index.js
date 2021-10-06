import { Container } from "./styled";
import Cookie from 'js-cookie';
import { useHistory, Link } from 'react-router-dom';

export default function DetalheProduto(props) {

    const nomePraReceberOProps = props.location.state;
    
    const naveagtion =  useHistory();

    function comprar() {
        let r = Cookie.get('carrinho')
        r = r !== undefined ? JSON.parse(r) // a função parse, converte o Cookie para array através do json (:
                       : [];
    
        //Função Some() filtra todos os itens do array retornando true ou false (:

        if(!r.some(x => x.id === nomePraReceberOProps.id))
        r.push({...nomePraReceberOProps, qtd: 1 })  // assim caso o produto não exista, ela será adicionado ao array. (:

        // esses ... representa o array todo, sendo adicionado por causa da função push (:

        Cookie.set('carrinho', JSON.stringify(r))

        // funcão set, está atualizando o valor do cookie.

        naveagtion.push('/rota2')
    }


    return (
        <Container>

        <div>
          <Link to="/" style={{color: '#000000', textDecoration: "none"}}> Voltar </Link>
          <h1> Detalhes do Produto </h1>
          <br /> <br />

          <div> <img src={nomePraReceberOProps.imagem} alt="" /> </div>
          <div> <h1> {nomePraReceberOProps.titulo} </h1> </div>
          <div> <h3> {nomePraReceberOProps.preco} </h3> </div>
        </div>

        <div>
          <h2> Descrição </h2>
          <div> {nomePraReceberOProps.descricao} </div>

          <h2> Especificações </h2>
          <div> {nomePraReceberOProps.especificacoes} </div>

          <div> <button onClick={comprar}> Comprar </button> </div>
        </div>

    </Container>
    )
}