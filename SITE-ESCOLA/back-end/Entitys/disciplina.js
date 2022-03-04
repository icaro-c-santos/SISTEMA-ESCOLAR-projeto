import Sequelize from "sequelize";
import ssequelize from "../database/database_escola.js";


const Disciplina = ssequelize.define("disciplina",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    codigo:{
        type: Sequelize.STRING,
        allowNull: false,
    },estado:{
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.JSON
    }
})


export default Disciplina;

