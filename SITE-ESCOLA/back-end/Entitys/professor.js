import Sequelize from "sequelize";
import ssequelize from "../database/database_escola.js";


const Professor = ssequelize.define("professor",{
    codigo:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING(150),
        allowNull: false
    },
    idade: Sequelize.INTEGER,
    sexo: Sequelize.STRING(50)
    
});
 

export default Professor;