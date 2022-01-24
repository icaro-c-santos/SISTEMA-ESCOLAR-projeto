import Sequelize from "sequelize";

const ssequelize = new Sequelize("bdescola","root","12345",{

    dialect: "mysql",
    host: "localhost",
    port: 3306

});

export default ssequelize;


