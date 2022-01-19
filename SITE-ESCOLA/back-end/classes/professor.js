import Sequelize from "sequelize";
import ssequelize from "../database/database_escola.js";



const Professor = ssequelize.define("professor",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    codigo:{
        type: Sequelize.STRING(50),
        allowNull: false
    },
    nome:{
        type: Sequelize.STRING(150),
        allowNull: false
    },
    idade: Sequelize.INTEGER,
    sexo: Sequelize.STRING(50),

});

export default Professor;