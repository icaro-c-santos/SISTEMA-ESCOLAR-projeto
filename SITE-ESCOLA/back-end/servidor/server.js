import  express from "express";
import rotaProfessor from "./rotas/rota-professor.js";

const app = express();
export const baseUrl = "http://localhost:3000";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(rotaProfessor);

app.listen(8084,() =>{
    console.log("SERVIDOR ATIVO!");
});