import  express from "express";
import  jwt  from "jsonwebtoken";
import {criarToken, obterToken}  from "./SITE-ESCOLA/back-end/servidor/autenticacao/dao_token.js";


const app = express();
export const baseUrl = "http://localhost:3000";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const senha = "icar123";
const senha2 = "icar";

app.get("/aluno",(req,res,next)=>{

});


const token =jwt.sign({userId: 5},senha,{expiresIn: 300});







app.listen(3009,() =>{
    console.log("SERVIDOR ATIVO!");
});




