import Sequelize from "sequelize";
import ssequelize from "../database/database_escola.js";
import Professor from "./professor.js";

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
})

Turma.hasMany(Professor,{
    foreignKey: "idProfessor"
}); 

export default Turma;