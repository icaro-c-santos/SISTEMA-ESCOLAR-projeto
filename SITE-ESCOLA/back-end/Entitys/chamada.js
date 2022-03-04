import Sequelize from "sequelize";
import ssequelize from "../database/database_escola.js";


const Chamada = ssequelize.define("Chamada",{

    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },estado:{
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    data:{
        type: Sequelize.DATE,
         allowNull: false
    }
})

export default Chamada;