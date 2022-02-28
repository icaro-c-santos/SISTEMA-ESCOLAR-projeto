


import Sequelize from "sequelize";
import ssequelize from "../database/database_escola.js";
import Turma from "./teste.js";
import Aluno from "./aluno.js";




async function a() {

    const turma = await Turma.findByPk(2);
    const aluno = await turma.getAlunos();
    console.log(aluno);


};

async function b() {

    const aluno = await Aluno.findByPk(1);
    const turma = await aluno.getTurma();
    console.log(turma);

};

function lala() {

    Turma.create({
        codigo: "MATA22"
    });

    Aluno.create({
        nome: "CAMILA",
        idade: 25,
        sexo: "FEMININO",
        serie: "9",
        cpf: "07018332563"
    })
}

a();