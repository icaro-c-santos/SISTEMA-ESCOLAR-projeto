import  express from "express";
import rotaAutenticacao from "./rotas/rota-autenticacao.js";
import rotaProfessor from "./rotas/rota-professor.js";

const app = express();
export const baseUrl = "http://localhost:3000";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(rotaProfessor,rotaAutenticacao);


app.listen(3001,() =>{
    console.log("SERVIDOR ATIVO!");
});


