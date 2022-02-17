import Sequelize from "sequelize";
import ssequelize from "../../database/database_escola.js";


const TokenAppRefresh = ssequelize.define("tokensRefresh",{
    codigo:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    refreshToken:{
        type: Sequelize.STRING,
        allowNull: false
    },
});

export default TokenAppRefresh