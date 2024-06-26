const express = require('express');

const mysql = require('mysql');

const app = express();

const conexao = mysql.createPool({
    host: 'localhost',
    port: '3306',
    database: 'Melo_Market',
    user: 'root',
    password: 'Lmelo345%'
});

conexao.connect(err => {
    if(err){
        console.log('Erro ao conectar ao Banco', err);
        return;
    }
    console.log('Conexão sucedida');
})

app.post('http://localhost:3006', (req, res) => {
    const {nome, email, mensagem} = req.body;

    if(!nome || !email || !mensagem){
        return res.status(400).send({message: "Por favor preencha os campos resquisitados"});
    }

    conexao.query('INSERT INTO Melo_Market (nome) VALUES ()', (err, resultado) => {
        if(err){
            console.error('Erro ao executlar a query: ', err);
            res.status(500).json({ error: 'Erro ao buscar dados.' });
        }
        res.json(resultado);
    });
});
