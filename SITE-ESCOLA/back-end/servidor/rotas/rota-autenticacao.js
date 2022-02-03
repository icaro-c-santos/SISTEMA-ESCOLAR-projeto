import express from "express";
import { criarUsuario } from "../autenticacao/dao_usuario.js";
import { autorizarToken, gerarToken, validarToken, validarTokenRefresh } from "../autenticacao/middllewar_token.js";
import { baseUrl } from "../server.js";
import { validacaoCamposProfessor, validateDeleteProfessor, validatePostProfessor } from "../validacaoCampos.js";



const rotaAutenticacao = express.Router();

rotaAutenticacao.get("/token",validarTokenRefresh,(req,res,next)=>{
     console.log("entrou!");
    gerarToken(res.locals.userId,false).then(p => res.send(p));
    

});

rotaAutenticacao.post("/login",(req,res,next)=>{

    const login = req.body.login;
    const senha = req.body.senha;

    
    criarUsuario(login,senha).then(p => {
        res.send(p);
    }).catch(error => res.send(error.message))
    
})


export default rotaAutenticacao