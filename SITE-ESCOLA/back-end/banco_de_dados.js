import Aluno from "./classes/alunos_classe.js";


const al1 = new Aluno("ICARO",25,"MASCULINO");
const al2 = new Aluno("CAMILA",20,"FEMININO");
const al3 = new Aluno("MARIA",18,"FEMININO");

al1.matricula = "001";
al2.matricula = "002";
al3.matricula = "003";

export const ListaAlunos = [];


ListaAlunos.push(al1,al2,al3);

export function deletar(matricula){
   
  for(let i = 0; i<ListaAlunos.length;i++){
    
      if(ListaAlunos[i].matricula == matricula){
        console.log("ENTROU!");
         ListaAlunos.splice(i,i+1);
         break;
      }
  }

}

export function alterar(matricula,propiedade,valor){

  for(let i = 0; i<ListaAlunos.length;i++){
    if(ListaAlunos[i].matricula == matricula){
      
      if(!ListaAlunos[i].hasOwnProperty(propiedade)){
          throw new Error("A PROPIEDADE A SER ALTERADA NÃO EXISTE!");
      }else{
        ListaAlunos[i][propiedade] = valor;
        console.log(ListaAlunos[i]);
        break;
      }
       
    }
}
}

export default ListaAlunos;
