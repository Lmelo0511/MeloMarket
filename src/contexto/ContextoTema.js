import { createContext } from "react";
import { useState, useEffect } from "react";

export const ContextoTema = createContext();

const TemaProvider = ({produtosNoCarrinho}) => {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        if(produtosNoCarrinho) {

            setProdutos(produtosNoCarrinho.map(produto => ({...produto, quantidade: 0})));
        }
    }, [produtosNoCarrinho]);

    const AdicionarQuantia = (index) => {
        const novosProdutos = [...produtos];
        novosProdutos[index].quantidade++;

        setProdutos(novosProdutos);
    };

    const RemoverQuantia = (index) => {
        const novosProdutos = [...produtos];
        novosProdutos[index].quantidade--;

        setProdutos(novosProdutos);
    };

    const { total } = produtos.reduce(
        (acumulador, item) => {
            return {
                quantidade: acumulador.quantidade + item.quantidade,
                total: acumulador.total + item.preco * item.quantidade,
            };
        },
        {
            quantidade: 0,
            total: 0.00,
        }
    );

    const RemoverProduto = (index) => {
        const novosProdutos = [...produtos];
        novosProdutos.splice(index, 1);
        setProdutos(novosProdutos);
    };

    const LimparCarrinho = () => {
        setProdutos([]);
    };

    return(
        <ContextoTema.Provider value={{produtos, AdicionarQuantia, RemoverQuantia, total, RemoverProduto, LimparCarrinho}}></ContextoTema.Provider>
    )
}

export default TemaProvider;
