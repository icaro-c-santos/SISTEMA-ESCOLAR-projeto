import ssequelize from "./SITE-ESCOLA/back-end/database/database_escola.js";
import { buscarUsuario } from "./SITE-ESCOLA/back-end/servidor/autenticacao/dao_usuario.js";
import { gerarToken } from "./SITE-ESCOLA/back-end/servidor/autenticacao/middllewar_token.js";



async function f1() {
    throw new Error("erro feio na F1");
    console.log("PRIMEIRA FUNÇÃO!");
}


async function f2(){
    try {
       await f1();
    } catch (error) {
        console.log(error.message);
    }
    console.log("erro antes!");
}



f2();

