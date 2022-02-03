import TokenAppRefresh from "./token_apps_refresh.js"


function  criarTokenRefresh(token){
      
    const promisse = new Promise((resolve,reject)=>{ 
         try{
           const novoToken =  TokenAppRefresh.create({ 
             token: token
         });
             resolve(novoToken);
         }catch(error){
           reject(error);           
         }
     })
     return promisse;
 }

 function obterTokenRefresh(tokenUsuario){

    const promisse = new Promise((resolve,reject)=>{
  
        try{
          const token = TokenAppRefresh.findAll({
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

 export {criarTokenRefresh,obterTokenRefresh}
 
   