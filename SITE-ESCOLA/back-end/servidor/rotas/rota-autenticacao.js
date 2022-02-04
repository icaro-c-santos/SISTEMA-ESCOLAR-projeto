import express from "express";
import { buscarUsuario, criarUsuario } from "../autenticacao/dao_usuario.js";
import { gerarToken, validarTokenRefresh } from "../autenticacao/middllewar_token.js";
import { validacaoCamposLogin, validateLogin } from "../validacao/validacaoRotaAutenticacao.js";

const rotaAutenticacao = express.Router();

rotaAutenticacao.post("/refreshtoken",validarTokenRefresh,(req,res,next)=>{
    if(res.locals.token.refresh){
        gerarToken(res.locals.token.userId,res.locals.token.adm)
        .then(token => res.status(200).send(token))
        .catch(error => res.status(500).send("ERRO NO SERVIDOR!"+error));
    }else{
        res.status(498).send("TOKEN INVALIDO: TOKEN ESPERADO É DO TIPO TOKEN REFRESH!");
    }   
});

rotaAutenticacao.post("/sing",validateLogin,validacaoCamposLogin,(req,res,next)=>{

    try{
        const login = req.body.login;
        const senha = req.body.senha;
        
        criarUsuario(login,senha,true).then(user => {
            res.send(user);
        }).catch(error => res.send(error.message))
    }catch(error){
        res.send(error.message)
    }
})

rotaAutenticacao.post("/login",validateLogin,validacaoCamposLogin,(req,res,next)=>{
    
        const login = req.body.login;
        const senha = req.body.senha;
    
        buscarUsuario(login).then(user=>{
            
            if(user.length>0 && user[0].login === login && user[0].senha === senha){
               
                gerarToken(user[0].login,user[0].administrador)
                .then(token => res.status(200).send(token))
                .catch(error => res.status(500).send("ERRO NO SERVIDOR!"));

            }else{
                res.status(400).send("USUARIO OU SENHA INVALIDO!");
            }
        }).catch(error => res.status(500).send("ERRO NO SERVIDOR!"));
    
    
    

});


export default rotaAutenticacao