import jwt from "jsonwebtoken";
import { obterProfessores, obterProfessorNome } from "./SITE-ESCOLA/back-end/DAO/dao_professor.js";
import ssequelize from "./SITE-ESCOLA/back-end/database/database_escola.js";
import { criarToken } from "./SITE-ESCOLA/back-end/servidor/autenticacao/dao_token.js";
import { criarTokenRefresh } from "./SITE-ESCOLA/back-end/servidor/autenticacao/dao_tokenRefresh.js";
import { buscarUsuario, criarUsuario, deletarUsuario } from "./SITE-ESCOLA/back-end/servidor/autenticacao/dao_usuario.js";


function obterSenha(){
    return "icaro123";
}

function  gerarToken(idUsuario,admnistrador){
    
    const promisse = new Promise((resolve,reject)=>{
   
        const iss = "API-ESCOLA-1532";
        const exp = 1800;
        const expRefresh = 3600;
        const token = jwt.sign({userId: idUsuario ,adm: admnistrador, refresh: false},obterSenha(),{ expiresIn: exp, issuer: iss, subject: idUsuario});
        const tokenResfresh = jwt.sign({userId: idUsuario,adm: admnistrador,refresh: true},obterSenha(),{ expiresIn: expRefresh, issuer: iss, subject: idUsuario});
        
        criarToken(token).then(token => {
            criarTokenRefresh(tokenResfresh).
            then(tokenRefresh => resolve({token: token.dataValues.token, tokenRefresh: tokenRefresh.dataValues.token})).
            catch(error => reject(error))
        }).catch( error => reject(error))
    })
    
    return promisse;
}


   



gerarToken("ICARO",false)
.then(token => console.log(token))
.catch(error => console.log(error.message));

