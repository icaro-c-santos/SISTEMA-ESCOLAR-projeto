import ssequelize from "../../database/database_escola.js";
import Usuario from "./usuario.js";



function buscarUsuario(loginUsuario){

    const promisse = new Promise((resolve,reject)=>{
        
        try{
             const usuario = Usuario.findAll({raw: true, where:{ login: loginUsuario }});
             resolve (usuario);
        }catch(error){
            reject(error);
        }

    })

    return promisse;
}



function criarUsuario(login,senha){

    const promisse = new Promise((resolve,reject)=>{
            buscarUsuario(login).then(usuarios =>{
                if(usuarios.length<=0){
                 const  novoUsuario = Usuario.create({
                        login: login,
                        senha: senha
                    });
                    resolve(novoUsuario);
                }else{
                   return reject(new Error("USUARIO JÁ EXISTE!"))
                }
            })
            

    })
    return promisse;
}


function deletarUsuario(login){
  
    const promisse = new Promise((resolve,reject)=>{

        buscarUsuario(login).then(usuarios =>{

            if(usuarios.length<=0){
               reject(new Error("USUARIO! NÃO EXISTENTE!"))
            }else{
               Usuario.destry({
                   where:{
                       login:login
                   }
               });
               resolve("USUARIO EXCLUIDO COM SUCESSO!");
            }
        })
        

    })
    return promisse;
}



export {criarUsuario,deletarUsuario,buscarUsuario}



