import Professor from "../SITE-ESCOLA/back-end/classes/professor.js";
import { alterarProfessor, criarProfessor, excluirProfessor, obterProfessorCodigo, obterProfessores, obterProfessorNome } from "../SITE-ESCOLA/back-end/DAO/dao_professor.js";


Professor.sync();




//criarProfessor("PEDRO",50,"FEMININO").then(e => console.log(e.dataValues)).catch(e => console.log("HOUVE UM ERRO! "+e.message));   ///CRIA UM PROFESSOR NO BD COM NOME PAULO IDADE 27 SEXO "MASCULINO" e RETORNA O OBJETO PROFESSOR.

//obterProfessores.then(e => e.map(p => console.log(p.dataValues))).catch(e => console.log(e.message));   ///RETORNA TODOS OS PROFESSORES DO BANCO DE DADOS!


criarProfessor("PEDRO",25,"MASCULINO").then(console.log);