import Aluno from "./classes/alunos_classe.js";


const al1 = new Aluno("ICARO",25,"MASCULINO");
const al2 = new Aluno("CAMILA",20,"FEMININO");
const al3 = new Aluno("MARIA",18,"FEMININO");

al1.matricula = "001";
al2.matricula = "002";
al3.matricula = "003";

export const ListaAlunos = [];

ListaAlunos.push(al1,al2,al3);


const propiedade = {
    chave:"nome",
    valor: "PAULA"
};

const propiedade = "nome";


 console.log("TEM!");

//var isProperty =  (objectname.keyname || "") ? true : false;

ListaAlunos[1][propiedade.chave] = propiedade.valor;


