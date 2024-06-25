const mysql = require('mysql');

const conexao = mysql.createPool({
    host: 'localhost',
    port: '3306',
    database: 'Melo_Market',
    user: 'root',
    password: 'Lmelo345%',
});

module.exports = conexao;

