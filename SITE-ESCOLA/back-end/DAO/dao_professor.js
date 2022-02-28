import Professor from "../Entitys/professor.js";
import erroApi from "../servidor/erroApi.js";


  async function criarProfessor(nome,idade,sexo){

      const novoprofessor = await Professor.create({
          nome: nome,
          idade: idade,
          sexo: sexo
      });
      return novoprofessor;
  }


  async function obterProfessores(){

      const professores = await Professor.findAll();
      return professores;
  }
  

    async function obterProfessorNome(nome){
    
    const professores = await Professor.findAll({ where:{ nome: nome }});  
    return professores;

  }


  async function obterProfessorCodigo(codigo){

      const professor = await Professor.findAll({ where: {codigo:codigo}});
      return professor;
  }



  async function alterarProfessor(codigo,nome,idade,sexo){
  
      const professor = await obterProfessorCodigo(codigo);
        if(!professor.length>0){
          throw(erroApi(40404,null,"CODIGO NÃO EXISTE!",404));
        }else{ 
          return  await Professor.update({ nome: nome, sexo: sexo,idade: idade },{where:{codigo:codigo}});
        }
   }


   async function excluirProfessor(codigo){
    
 
      const professor = await obterProfessorCodigo(codigo);

        if(!professor.length>0){
          throw(erroApi(41404,"ERRO!","CODIGO NÃO EXISTE!",404)); 
        }else{
           await Professor.destroy({where:{codigo:codigo}});
           return true;
        }
  
        

  }

export {criarProfessor,obterProfessores,obterProfessorCodigo,obterProfessorNome,alterarProfessor,excluirProfessor}

