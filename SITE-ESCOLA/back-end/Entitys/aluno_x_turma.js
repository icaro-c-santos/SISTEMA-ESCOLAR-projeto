import Sequelize from "sequelize";
import ssequelize from "../database/database_escola.js";


const Aluno_x_Turma = ssequelize.define("Aluno_x_Turma",{

    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})

export default Aluno_x_Turma;