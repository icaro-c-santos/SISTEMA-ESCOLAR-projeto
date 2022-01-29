import TokenApp from "./token_app.js";



function  criarToken(token){
      
    const promisse = new Promise((resolve,reject)=>{ 
         try{
           const novoToken =  TokenApp.create({ 
             token: token
         });
             resolve(novoToken);
         }catch(error){
           reject(error);           
         }
     })
     return promisse;
 }

 function obterToken(tokenUsuario){

    const promisse = new Promise((resolve,reject)=>{
  
        try{
          const token = TokenApp.findAll({
            raw:true,
            where: {token:tokenUsuario}
          });
          resolve(token);
        }catch(error){
          reject(error);
        }
    })
    return promisse;
  }

 export {criarToken,obterToken}
 
   