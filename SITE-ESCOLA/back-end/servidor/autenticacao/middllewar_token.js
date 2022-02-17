import { criarToken } from "./dao_token.js";
import { criarTokenRefresh } from "./dao_tokenRefresh.js";
import jwt  from "jsonwebtoken";
import erroApi from "../erroApi.js";

function obterSenha(){
    return "icaro123";
}

async function  gerarToken(idUsuario,admnistrador=false){
    
        const iss = "API-ESCOLA-1532";
        const exp = 1800;
        const expRefresh = 3600;
        const tokenCriado = jwt.sign({userId: idUsuario ,adm: admnistrador, refresh: false},obterSenha(),{ expiresIn: exp, issuer: iss, subject: idUsuario});
        const tokenRefreshCriado =  jwt.sign({userId: idUsuario,adm: admnistrador,refresh: true},obterSenha(),{ expiresIn: expRefresh, issuer: iss, subject: idUsuario});
       
        const token = await criarToken(tokenCriado);
        const tokenRefresh = await criarTokenRefresh(tokenRefreshCriado);
        
        return {Token: token,RefreshToken: tokenRefresh}
}



    const validarToken = (req,res,next)=>{
        
         jwt.verify(req.headers.bearer,obterSenha(),(error,resultado)=>{

             if(!error){
                 if(resultado.refresh){
                     const erro = erroApi(41401,"ERROR!","USUARIO NÃO AUTENTICADO!",401,"TOKEN INVALIDO: O TOKEN PASSADO É DE ATUALZAÇÃO E O ESPERADO É DE AUTENTICAÇÃO!");
                     next(erro);
                 }else{
                     res.locals.token = resultado;
                     next();
                 }
             }else{
                 const erro = erroApi(40401,"ERROR!","USUARIO NÃO AUTENTICADO!",401,error.message);
                 next(erro)
             }
        })

     }




const validarTokenRefresh = (req,res,next)=>{
   
            
          jwt.verify(req.headers.bearer,obterSenha(),(error,resultado)=>{

                if(!error){
                    if(!resultado.refresh){
                        const erro = erroApi(40401,"ERROR!","REFRESHTOKEN INVALIDO!",401,"O TOKEN PASSADO É DE AUTENTICAÇÃO E O ESPERADO É DE ATUALIZAÇÃO!");
                        next(erro);
                    }else{
                        res.locals.token = resultado;
                        next();
                    }
                }else{
                    const erro = erroApi(40401,"ERROR!","USUARIO NÃO AUTENTICADO!",401,error.message);
                    next(erro);
                
                }
          })
}
    



const autorizarToken = (req,res,next)=>{

    const adm = res.locals.token.adm;
    if(adm){
        next();
    }else{
        const erro = erroApi(40403,"ERROR!","USUARIO SEM PERMISSÃO",403);
        next(erro);   
    }
    
}

export {autorizarToken,validarToken,gerarToken,validarTokenRefresh}