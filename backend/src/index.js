const express = require("express"); //importando o modulo chamado express para dentro da variavel express
const cors = require("cors");
const routes = require("./routes");

//instanciando a variavel que armazena a app, app que vai ter as rotas e funcionalidades
const app = express();

app.use(cors());
//falando pro express ir no corpo da requisição e converter o json em um objeto do JS
app.use(express.json());
app.use(routes);

//criando a primeira rota, a rota raiz
//agr no arquivo routes.js

//mandando a app ouvir a porta 3333
app.listen(3333);
