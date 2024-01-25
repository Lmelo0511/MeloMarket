import { createContext } from "react";
import { useState } from "react";

export const ContextoTema = createContext();

const TemaProvider = ({children}) => {

    const [produtos, setProdutos] = useState([]);
    const [total, setTotal] = useState({
        quantidade: "",
        total: 0.00,
    });

    const mudarProdutos = (novosProdutos) => {
        setTotal(novosProdutos.reduce(
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
        ));
    };

    const adicionarAoCarrinho = (novoProduto) => {
        const novosProdutos = [...produtos];
        let encontrarProduto = produtos.findIndex(prod => prod.id === novoProduto.id);
        if(encontrarProduto !== -1){
            novosProdutos[encontrarProduto].quantidade++;
        } else {
            novosProdutos.push(novoProduto);
        }

        setProdutos(novosProdutos);
        mudarProdutos(novosProdutos);
    };

    const RemoverProduto = (index, full) => {
        const novosProdutos = [...produtos];
        if(novosProdutos[index].quantidade > 1 && !full){
            novosProdutos[index].quantidade--;
        } else {
            novosProdutos.splice(index, 1);
        }

        setProdutos(novosProdutos);
        mudarProdutos(novosProdutos);
    };

    const LimparCarrinho = () => {
        setProdutos([]);
        mudarProdutos([]);
    };

    return(
        <ContextoTema.Provider value={{produtos, total, RemoverProduto, LimparCarrinho, adicionarAoCarrinho}}>{children}</ContextoTema.Provider>
    );
}

export default TemaProvider;
