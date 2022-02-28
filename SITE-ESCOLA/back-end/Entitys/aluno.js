import Sequelize, { AsyncQueueError } from "sequelize";
import ssequelize from "../database/database_escola.js";


const Aluno = ssequelize.define("Aluno",{

    matricula:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    idade: Sequelize.INTEGER,
    sexo: Sequelize.STRING,
    serie:Sequelize.STRING,
    cpf: Sequelize.STRING
});

export default Aluno;