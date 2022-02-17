import erroApi from "../erroApi.js";
import Usuario from "./usuario.js";


    async function buscarUsuario(loginUsuario){

        const usuario = await Usuario.findAll({ where:{ login: loginUsuario }});
        return usuario;
    }



    async function criarUsuario(login,senha){
    
        const usuario = await buscarUsuario(login);

        if(usuario.length>0){
            const erro = erroApi(45404,"ERROR","USUARIO JÁ EXISTENTE!",409);
            throw (erro);
        }else{

            const  novoUsuario = await Usuario.create({
                login: login,
                senha: senha,
                administrador: false
            });
            return novoUsuario;
        }

    }


    async function deletarUsuario(login){
  
        const usuario = await buscarUsuario(login);

            if(usuario.length>0){
                await  Usuario.destry({ where:{ login:login }});
                 return true
            }else{
                throw(erroApi(46404,"ERROR","USUARIO JÁ EXISTENTE!",404));
            }
    }



export {criarUsuario,deletarUsuario,buscarUsuario}



