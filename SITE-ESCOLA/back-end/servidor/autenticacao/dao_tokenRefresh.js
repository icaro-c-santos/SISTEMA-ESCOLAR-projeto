import TokenAppRefresh from "./token_apps_refresh.js"


async function  criarTokenRefresh(token){
      
     const novoToken =  await TokenAppRefresh.create({   refreshToken: token  });
     return novoToken;
 }

async  function obterTokenRefresh(tokenUsuario){

    const token = await  TokenAppRefresh.findAll({where: { token:tokenUsuario }});
    return token;
  }

 export {criarTokenRefresh,obterTokenRefresh}
 
   