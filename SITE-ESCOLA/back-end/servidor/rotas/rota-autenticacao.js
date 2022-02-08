import express from "express";
import erroApi from "../erroApi.js";
import { buscarUsuario, criarUsuario } from "../autenticacao/dao_usuario.js";
import { gerarToken, validarTokenRefresh } from "../autenticacao/middllewar_token.js";
import { validacaoCamposLogin, validateLogin } from "../validacao/validacaoRotaAutenticacao.js";

    const rotaAutenticacao = express.Router();

    rotaAutenticacao.post("/refreshtoken",validarTokenRefresh,(req,res,next)=>{
    
        if(res.locals.token.refresh){
            
            gerarToken(res.locals.token.userId,res.locals.token.adm)
            .then(token => res.status(200).json(token))
            .catch(error => next(error));
            
        }else{
            const erro = erroApi(50000,"ERRO","ERRO NO SERVIDOR!",500);
            next(erro);
        }   
    });

    rotaAutenticacao.post("/sing",validateLogin,validacaoCamposLogin,(req,res,next)=>{

        const login = req.body.login;
        const senha = req.body.senha;
            
        criarUsuario(login,senha)
        .then(user => { res.status(201).json(user)})
        .catch(erro => next(erro));
    })

    rotaAutenticacao.post("/login",validateLogin,validacaoCamposLogin,(req,res,next)=>{

  
        const login = req.body.login;
        const senha = req.body.senha;
    

        (async() =>{

       
            const user = await buscarUsuario(login);
            
            if(user.length>0 && user[0].login === login && user[0].senha === senha){
               
               const token = await gerarToken(user[0].login,user[0].administrador)
               res.status(200).json(token);
            
            }else{
               const erro = erroApi(46400,"ERROR","USUARIO OU SENHA INVALIDO!",400);
               next(erro);
            }

        })();

    

});



export default rotaAutenticacao