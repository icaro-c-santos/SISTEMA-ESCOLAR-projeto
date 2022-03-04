import { criarDisciplina,alterarDisciplina, excluirDisciplina,obterDisciplinasNome,obterDisciplinaCodigo,obterDisciplinas } from "../SITE-ESCOLA/back-end/DAO/dao_disciplina.js";
import ssequelize from "../SITE-ESCOLA/back-end/database/database_escola.js";


async function testeCriar(){ 
    const jsonDados = {
        modelo: "SEMIPRESENCIAL",
        sistema: "AVA",
        gradeCurricular:"PORTUGUES 1,LEITURA E INTEPRETAÇÃO DE TEXTO."
    }
    const disciplina = await criarDisciplina("P24","PORTUGUÊS",jsonDados);
    console.log(disciplina);
}

async function testeObter(){
    const disciplinas = await obterDisciplinas();
    console.log(disciplinas);
}

async function testeExcuir(){
    const booleano = await excluirDisciplina("M45");
    console.log(booleano);
}

async function testeAlterar(){
    const disciplina = await alterarDisciplina("P24","PORTUGUES");
    console.log(disciplina);
}

async function testeObterCodigo(){
    const disciplina = await obterDisciplinaCodigo("P24");
    console.log(disciplina);
}

async function testeObterNome(){
    const disciplina = await obterDisciplinasNome("PORTUGUES");
    console.log(disciplina);
}
