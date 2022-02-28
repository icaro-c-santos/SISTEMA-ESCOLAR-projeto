import Sequelize from "sequelize";
import ssequelize from "../database/database_escola.js";


const Chamada_x_Turma = ssequelize.define("Chamada_x_Turma",{

    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})

export default Chamada_x_Turma;
