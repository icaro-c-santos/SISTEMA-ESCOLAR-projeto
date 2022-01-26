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
        const professor = Professor.findAll({
          raw:true,
          where: {codigo:codigo}
        });
        resolve(professor);
      }catch(error){
        reject(error);
      }
  })
  return promisse;
}

function alterarProfessor(codigo,nome,sexo,idade){
  
  const promisse = obterProfessorCodigo(codigo).then(p=>{
    
    if(!p.length>0){

      throw new Error("O CODIGO DIGITADO NÃO EXISTE NO BANCO DE DADOS!");
   
    }else{

     Professor.update({ nome: nome, sexo: sexo,idade: idade },{where:{codigo:codigo}});
     return "ALTERADO COM SUCESSO!";

    }

  })
  return promisse;
}


function excluirProfessor(codigo){
  
  
  const promisse = new Promise((resolve,reject)=>{
  
    obterProfessorCodigo(codigo).then(p=>{

        if(!p.length>0){
            reject({codigo: "06", mensage: "O CODIGO DIGITADO NÃO EXISTE NO BANCO DE DADOS!"});   
        }else{
            Professor.destroy({where:{codigo:codigo}});
            resolve("PROFESSOR EXCLUIDO COM SUCESSO!"); /// estou usando http 204 en~tao não retorna essa msg deixei aqui apenas para caso precise alterar.
        }
  }).catch(p => reject(p));
 
});

return promisse;
}


export {criarProfessor,obterProfessores,obterProfessorCodigo,obterProfessorNome,alterarProfessor,excluirProfessor}

