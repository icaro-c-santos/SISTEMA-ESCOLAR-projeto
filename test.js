import  express from "express";
import  jwt  from "jsonwebtoken";
import { autorizarToken, gerarToken, validarToken, validarTokenRefresh } from "./SITE-ESCOLA/back-end/servidor/autenticacao/middllewar_token.js";


const app = express();
export const baseUrl = "http://localhost:3000";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const senha = "icar123";
const senha2 = "icar";

async function obter(x){
    if(x>0){
        throw new Error("É MAIOR QUE ZERO!");
    }
        return "É MENOR QUE ZERO!";
    
}

app.get("/token/:numero",(req,res,next)=>{
    

      obter(req.params.numero).then(a => res.send(a)).catch(erro=> res.send(erro.message));

});

app.listen(3002,() =>{
    console.log("SERVIDOR ATIVO! 3002");
});





