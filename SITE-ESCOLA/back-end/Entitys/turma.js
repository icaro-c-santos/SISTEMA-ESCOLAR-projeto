import Sequelize from "sequelize";
import ssequelize from "../database/database_escola.js";
import Professor from "./professor.js";
import Disciplina from "./disciplina.js";
import Aluno from "./aluno.js";
import Chamada from "./chamada.js";
import Aluno_x_Turma from "./aluno_x_turma.js"
import Chamada_x_Turma from "./chamada_x_turma.js";

const Turma = ssequelize.define("turma",{

    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    estado:{
        type: Sequelize.BOOLEAN,
        defaultValue: true
    },
    codigo:{
        type: Sequelize.STRING,
        allowNull: false,
    },
});

Disciplina.hasMany(Turma,{
    constraint: true,
    foreignKey: "idTurma"
});

Turma.belongsTo(Disciplina,{
    constraint: true,
    foreignKey: "idDisciplina"
});

Turma.belongsTo(Professor,{
    constraint: true,
    foreignKey: "idProfessor"
}); 

Professor.hasMany(Turma,{
    constraint: true,
    foreignKey: "idTurma"
});

Turma.hasMany(Aluno,{
    constraint: true,
    foreignKey: "idAluno"
});

Aluno.belongsToMany(Turma,{
    through:{
        model: Aluno_x_Turma
    },
    constraint: true,
    foreignKey: "idAluno"
})

Turma.hasMany(Chamada,{
    constraint: true,
    foreignKey: "idChamada"
})

Chamada.belongsToMany(Turma,{
    through:{
        model: Chamada_x_Turma
    },
    constraint: true,
    foreignKey: "idChamada"
})

export default Turma;