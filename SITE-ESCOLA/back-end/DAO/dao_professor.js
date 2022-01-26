import Professor from "../classes/professor.js";
import ssequelize from "../database/database_escola.js"


 function  criarProfessor(nome,idade,sexo){
      
   const promisse = new Promise((resolve,reject)=>{ 
         
        try{
          const novoprofessor =  Professor.create({
            nome: nome,
            idade: idade,
            sexo: sexo
        });
        resolve(novoprofessor);
        }catch(error){
          reject(error);           
        }
    })
    return promisse;
}

  


 const  obterProfessores = new Promise((resolve,reject)=>{

  try{
    const professores =  Professor.findAll({raw: true});
    resolve(professores);
  }catch(error){
    reject(error);  
  }
})


function obterProfessorNome(nome){
  

  const promisse = new Promise((resolve,reject)=>{

      try{
        const professores = Professor.findAll({raw: true},{ where:{ nome: nome }});
        resolve(professores);
      }catch(error){
        reject(error);
      }
  })
  return promisse;

}

function obterProfessorCodigo(codigo){

  const promisse = new Promise((resolve,reject)=>{

      try{
        const professor = Professor.findAll({raw: true},{where: {codigo:codigo}});
        resolve(professor);
      }catch(error){
        reject(error);
      }
  })
  return promisse;
}



function alterarProfessor(codigo,nome,sexo,idade){
  
  
  const b = obterProfessorCodigo(codigo).then(p=>{
    
    if(p.length>0){
      return p;
    }else{
      throw new Error("O CODIGO DIGITADO NÃO EXISTE NO BANCO DE DADOS!");
    }
  }).then(p=>{
    Professor.update({ nome: nome, sexo: sexo,idade: idade },{where:{codigo:codigo}});
    return "ALTERADO COM SUCESSO!";
  }).catch(erro => {
    throw erro;
  })
  return b;
}


function excluirProfessor(codigo){
  
  
  const b = obterProfessorCodigo(codigo).then(p=>{
    
    if(p.length>0){
      return p;
    }else{
      throw new Error("O CODIGO DIGITADO NÃO EXISTE NO BANCO DE DADOS!");
    }
  }).then(p=>{
    Professor.destry({where:{codigo:codigo}});
    return "PROFESSOR EXCLUIDO COM SUCESSO!";
  }).catch(erro => {
    throw erro;
  })
  return b;
}


export {criarProfessor,obterProfessores,obterProfessorCodigo,obterProfessorNome,alterarProfessor,excluirProfessor}

