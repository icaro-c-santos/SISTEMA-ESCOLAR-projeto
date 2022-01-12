import  express from "express";
import rota from "./rotas/rota-aluno.js";


const app = express();


app.use(rota);

app.listen(3000,() =>{

    console.log("SERVIDOR ATIVO!");
});