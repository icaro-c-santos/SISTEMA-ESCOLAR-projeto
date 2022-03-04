import Professor from "../Entitys/professor.js";
import erroApi from "../servidor/erroApi.js";


  async function criarProfessor(nome,idade,sexo){

      return await Professor.create({
          nome: nome,
          idade: idade,
          sexo: sexo
      })
  }


  async function obterProfessores(){

      const professores = await Professor.findAll({where:{estado:true}});
      return professores;
  }
  

    async function obterProfessorNome(nome){
    
    const professores = await Professor.findAll({ where:{ nome: nome, estado:true}});  
    return professores;

  }


  async function obterProfessorCodigo(codigo){

      const professor = await Professor.findAll({ where: {codigo:codigo, estado:true}});
      return professor;
  }



  async function alterarProfessor(codigo,nome,idade,sexo){
  
      const professor = await obterProfessorCodigo(codigo);
        if(!professor.length>0){
          throw(erroApi(40404,null,"CODIGO NÃO EXISTE!",404));
        }else{ 
          return await Professor.update({ nome: nome, sexo: sexo,idade: idade },{where:{codigo:codigo}});
        }
   }


   async function excluirProfessor(codigo){
    
 
      const professor = await obterProfessorCodigo(codigo);

        if(!professor.length>0){
          throw(erroApi(41404,"ERRO!","CODIGO NÃO EXISTE!",404)); 
        }else{
           return await Professor.update({estado:false},{where:{codigo:codigo}});
        }
  
        

  }


export {criarProfessor,obterProfessores,obterProfessorCodigo,obterProfessorNome,alterarProfessor,excluirProfessor}

