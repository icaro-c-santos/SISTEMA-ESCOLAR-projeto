import Sequelize, { HasMany, HasOne } from "sequelize";
import ssequelize from "../database/database_escola.js";
import Professor from "./professor.js";
import Disciplina from "./disciplina.js";
import Aluno from "./aluno.js";
import Chamada from "./chamada.js";
import Aluno_x_Turma from "./aluno_x_turma.js"
import Chamada_x_Turma from "./chamada_x_turma.js";

const Turma = ssequelize.define("turma",{

    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    codigo:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
});


UMA TURMA TEM 1 DISICPLINA => HasOne
UMA DISCIPLINA PERTENCE A MUITAS

Turma.hasMany(Aluno,{
})

Aluno.belongsTo(Turma,{
})


export default Turma;