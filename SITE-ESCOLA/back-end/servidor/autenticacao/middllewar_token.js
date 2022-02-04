import { criarToken } from "./dao_token.js";
import { criarTokenRefresh } from "./dao_tokenRefresh.js";
import jwt  from "jsonwebtoken";

function obterSenha(){
    return "icaro123";
}


function gerarToken(idUsuario,admnistrador){
    
    const promisse = new Promise((resolve,reject)=>{
   
        const iss = "API-ESCOLA-1532";
        const exp = 1800;
        const expRefresh = 3600;
        const token = jwt.sign({userId: idUsuario ,adm: admnistrador, refresh: false},obterSenha(),{ expiresIn: exp, issuer: iss, subject: idUsuario});
        const tokenResfresh = jwt.sign({userId: idUsuario,adm: admnistrador,refresh: true},obterSenha(),{ expiresIn: expRefresh, issuer: iss, subject: idUsuario});
        
        criarToken(token).then(token => {
            criarTokenRefresh(tokenResfresh).then(tokenRefresh => resolve({token: token.dataValues.token, tokenRefresh: tokenRefresh.dataValues.token})).catch(error => reject(error))
        }).catch( error => reject(error))
        
    })

    
    return promisse;
}



const validarToken = (req,res,next)=>{
   
    try{
            
          jwt.verify(req.headers.bearer,obterSenha(),(error,resultado)=>{

                if(!error){
                    if(resultado.refresh){
                        res.status(401).send({erro: "error", mensagem:"USUARIO NÃO AUTENTICADO!", detalhe: "TOKEN INVALIDO: O TOKEN PASSADO É DE ATUALZAÇÃO E O ESPERADO É DE AUTENTICAÇÃO!"});
                    }else{
                        res.locals.token = resultado;
                        next();
                    }
                }else{
                    res.status(401).send({erro: "error", mensagem:"USUARIO NÃO AUTENTICADO!", detalhe: error.message});
                }
          })

        }catch(error){
            res.status(500).send({error: "error", mensagem:"PROBLEMA NO SERVIDOR!"});
        }
}




const validarTokenRefresh = (req,res,next)=>{
   
    try{
            
          jwt.verify(req.headers.bearer,obterSenha(),(error,resultado)=>{

                if(!error){
                    if(!resultado.refresh){
                        res.status(401).send({erro: "error", mensagem:"USUARIO NÃO AUTENTICADO!", detalhe: "TOKEN INVALIDO: O TOKEN PASSADO É DE AUTENTICAÇÃO E O ESPERADO É DE ATUALIZAÇÃO!"});
                    }else{
                        res.locals.token = resultado;
                        next();
                    }
                }else{
                    res.status(401).send({erro: "error", mensagem:"USUARIO NÃO AUTENTICADO!", detalhe: error.message});
                }
          })

        }catch(error){
            res.status(500).send({error: "error", mensagem:"PROBLEMA NO SERVIDOR!"});
        }
}



const autorizarToken = (req,res,next)=>{

    const adm = res.locals.token.adm;
    if(adm){
        next();
    }else{
        res.status(403).send({erro: "error", mensagem:"USUARIO SEM PERMISSÃO PARA ESTA REQUISIÇÃO!"});
    }
    
}

export {autorizarToken,validarToken,gerarToken,validarTokenRefresh}