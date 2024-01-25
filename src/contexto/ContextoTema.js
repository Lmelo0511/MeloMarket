import { createContext } from "react";
import { useState } from "react";

export const ContextoTema = createContext();

const TemaProvider = ({children}) => {

    const [produtos, setProdutos] = useState([]);

    const adicionarAoCarrinho = (novoProduto) => {
        const novosProdutos = [...produtos];
        novosProdutos.push(novoProduto);
        setProdutos(novosProdutos);
    };

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
        <ContextoTema.Provider value={{produtos, AdicionarQuantia, RemoverQuantia, total, RemoverProduto, LimparCarrinho, adicionarAoCarrinho}}>{children}</ContextoTema.Provider>
    )
}

export default TemaProvider;
