import { createContext } from "react";
import { useState } from "react";

export const ContextoTema = createContext();

const TemaProvider = ({children}) => {

    const [produtos, setProdutos] = useState([]);
    const [total, setTotal] = useState({
        quantidade: 0,
        total: 0.00,
    });
    
    const onChangeProducts = (novosProdutos) => {
        
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
    }

    const adicionarAoCarrinho = (novoProduto) => {
        const novosProdutos = [...produtos];
        let findProduct = produtos.findIndex(prod => prod.id == novoProduto.id);
        if(findProduct != -1) {
            novosProdutos[findProduct].quantidade++;
        } else {
            novosProdutos.push(novoProduto);
        }
        
        setProdutos(novosProdutos);
        onChangeProducts(novosProdutos);
    };

    const RemoverProduto = (index, full) => {
        const novosProdutos = [...produtos];
        if(novosProdutos[index].quantidade > 1 && !full) {
            novosProdutos[index].quantidade--;
        } else {
            novosProdutos.splice(index, 1);
        }
        setProdutos(novosProdutos);
        onChangeProducts(novosProdutos);
    };

    const LimparCarrinho = () => {
        setProdutos([]);
        onChangeProducts([]);
    };

    return(
        <ContextoTema.Provider value={{produtos, total, RemoverProduto, LimparCarrinho, adicionarAoCarrinho}}>{children}</ContextoTema.Provider>
    )
}

export default TemaProvider;
