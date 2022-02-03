import Sequelize from "sequelize";
import ssequelize from "../../database/database_escola.js";



const Usuario = ssequelize.define("usuario",{

    id:{
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true 
    },
    login:{
        type: Sequelize.STRING(45),
        allowNull: false,
        unique: true
    },
    senha:{
        type: Sequelize.STRING(45),
        allowNull: false,
    }


});

export default Usuario;