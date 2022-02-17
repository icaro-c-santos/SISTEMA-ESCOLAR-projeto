import TokenApp from "./token_app.js";

  async function  criarToken(token){
      
  
      const novoToken =  await TokenApp.create({ token: token });
      return novoToken;
  }


  async function obterToken(tokenUsuario){
   
    const token = await  TokenApp.findAll({ where: {token:tokenUsuario}});
    return token;
  }

 export {criarToken,obterToken}
 
   

