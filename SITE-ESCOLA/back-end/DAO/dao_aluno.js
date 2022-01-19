import  ListaAlunos, { alterar, deletar } from "../banco_de_dados.js";




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

function alterarAluno(matricula,propiedade,valor){
    alterar(matricula,propiedade,valor);
}


export { todosalunos,alterarAluno,excluirAluno,buscarAlunoMatricula,buscarAlunoNome};

