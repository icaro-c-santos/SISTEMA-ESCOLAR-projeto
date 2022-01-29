import  express from "express";
import  jwt  from "jsonwebtoken";
import { criarToken } from "./dao_token.js";



function obterSenha(){
    return "icaro123";
}




function gerarToken(idUsuario,admnistrador){
    
    const promisse = new Promise((resolve,reject)=>{
   
        const iss = "API-ESCOLA-1532";
        const exp = 36;
        const token = jwt.sign({userId: idUsuario ,adm: admnistrador},obterSenha(),{ expiresIn: exp, issuer: iss, subject: idUsuario});
        criarToken(token).then(resolve(token)).catch( error => reject(error));
        
    })

    
    return promisse;
}




function validarToken(token){


        const promisse = new Promise((resolve,reject) => {
            
          jwt.verify(token,obterSenha(),(error,resultado)=>{

                if(!error){
                    resolve(resultado);
                }else{
                    reject(error.message);
                }
          });
            
        })


        return promisse; 

}

