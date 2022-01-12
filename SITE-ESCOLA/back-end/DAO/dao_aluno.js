import  ListaAlunos from "../banco_de_dados.js";
import deletar from "../banco_de_dados.js";
import alterar from "../banco_de_dados.js";



function todosalunos(){
    return ListaAlunos;
}

function buscarAlunoNome(nome){
    return ListaAlunos.filter(a => a.nome == nome);
}

function buscarAlunoMatricula(matricula){
    return ListaAlunos.filter(a => a.matricula == matricula);
}

function excluirAluno(matricula){
    deletar(matricula);
}

function alterarAluno(matricula){
    alterar(matricula);
}


export { todosalunos,alterarAluno,excluirAluno,buscarAlunoMatricula,buscarAlunoNome};