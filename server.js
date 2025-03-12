// server.js
const express = require('express');
const app = express();
const port = 3000;

// Importar a função tempo
const tempo = require('./api/Data_atual'); // Remova .default se estiver usando CommonJS

// Importar a função obterDiaDaSemana   
const DiaDaSemana = require('./api/DiaDaSemana');

// Rota principal
app.get('/', (req, res) => {
    res.send(`
        <h1>Central de API</h1>
        <p>
            <a href="/data_atual" target="_blank">Clique aqui para ver a data atual</a>
        </p>
        <p>
            <a href="/DiaDaSemana?data=08/03/2025" target="_blank">Clique aqui para ver o dia da semana</a>
        </p>
    `);
});

// Rota para acessar a API tempo
app.get('/data_atual', tempo);

// Rota para acessar a API dia da semana
app.get('/DiaDaSemana', DiaDaSemana);

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
