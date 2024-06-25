const conexao = require('../conexao/conexaoBanco');

const testarConexao = () => {
    conexao.getConnection((err, connection) => {
        if(err){
            console.log('Erro ao conectar ao Banco', err);
        }
        console.log('Conexão sucedida');

        connection.release();
    });
}

export default testarConexao;