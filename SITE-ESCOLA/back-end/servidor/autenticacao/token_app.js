import Sequelize from "sequelize";
import ssequelize from "../../database/database_escola.js";



const TokenApp = ssequelize.define("tokens",{
    codigo:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    token:{
        type: Sequelize.STRING,
        allowNull: false
    }
});


export default TokenApp;