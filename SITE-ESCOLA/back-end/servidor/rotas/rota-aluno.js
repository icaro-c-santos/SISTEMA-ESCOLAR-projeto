import  express from "express";
import { todosalunos,alterarAluno,excluirAluno,buscarAlunoMatricula,buscarAlunoNome} from "../../DAO/dao_aluno.js";

const rota = express.Router();



rota.get("/aluno",(req,res)=>{

    try{
        const alunos = todosalunos();
        res.status(200).send(alunos);
    }catch(e){
        res.status(400).send("\n ACONTECEU UM ERRO!:"  + e);
    }

});

rota.get("/aluno/matricula/:matricula",(req,res)=>{
    
    try{
        const matricula = req.params.matricula;
        const alunos = todosalunos().filter(p => p.matricula.toUpperCase() === matricula.toUpperCase());
        res.status(200).send(alunos);
    }catch(e){
        res.status(400).send("\n ACONTECEU UM ERRO!:"  + e);
    }
});

rota.get("/aluno/nome/:nome",(req,res)=>{

    try{
        const nome = req.params.nome;
        const alunos = todosalunos().filter(p => p.nome.toUpperCase() == nome.toUpperCase());
        res.status(200).send(alunos);
    }catch(e){
        res.status(400).send("\n ACONTECEU UM ERRO!:"  + e);
    }

});

rota.delete("/aluno",(req,res)=>{

    try{    
        const matricula = req.body.matricula;
        excluirAluno(matricula);
        res.status(200).send("ALUNO EXCLUIDO COM SUCESSO!");
    }catch(e){
        res.status(400).send("\n ACONTECEU UM ERRO!: " + e);
    }

});

rota.patch("/aluno",(req,res)=>{

    try{
        const matricula = req.body.matricula;
        const propiedade = req.body.propiedade;
        const valor = req.body.valor;
        
        alterarAluno(matricula,propiedade,valor);
        res.status(200).send("ALUNO ALTERADO COM SUCESSO!");
    }catch(e){
        res.status(400).send("\n ACONTECEU UM ERRO!: " + e);
    }
});



export default rota;
