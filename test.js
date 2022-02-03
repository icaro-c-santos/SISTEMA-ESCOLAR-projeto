import  express from "express";
import  jwt  from "jsonwebtoken";
import { autorizarToken, gerarToken, validarToken, validarTokenRefresh } from "./SITE-ESCOLA/back-end/servidor/autenticacao/middllewar_token.js";


const app = express();
export const baseUrl = "http://localhost:3000";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const senha = "icar123";
const senha2 = "icar";


app.get("/token",validarTokenRefresh,(req,res,next)=>{
     
    gerarToken(res.locals.userId,false).then(p => res.send(p));
    

});
app.listen(3001,() =>{
    console.log("SERVIDOR ATIVO!");
});





