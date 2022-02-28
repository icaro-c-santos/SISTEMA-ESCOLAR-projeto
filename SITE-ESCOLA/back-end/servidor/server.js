import  express from "express";
import rotaAutenticacao from "./rotas/rota-autenticacao.js";
import rotaProfessor from "./rotas/rota-professor.js";

const app = express();
const porta = 3001;
export const baseUrl = "http://localhost:"+porta;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(rotaProfessor,rotaAutenticacao);

app.use((error,req,res,next)=>{
    res.status(error.status || 500).json(error.show || error.message);
})

app.use("/",(req,res,next)=>{
    res.status(400).json("ROTA INVALIDA!");
})

app.listen(porta,() =>{
    console.log("SERVIDOR ATIVO!");
});


