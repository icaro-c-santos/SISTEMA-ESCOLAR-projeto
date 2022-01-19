import Professor from "../classes/professor.js";
import ssequelize from "../database/database_escola.js"

(async () => {

    const database = ssequelize;
    const professor = Professor;
    await database.sync();

    const novoprofessor = await Professor.create({
        nome: "ICARO",
        codigo: "001",
        idade: 27,
        sexo: "MASCULINO"
    });



})();