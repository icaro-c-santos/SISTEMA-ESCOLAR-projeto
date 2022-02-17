import express from "express";
import { alterarProfessor, criarProfessor, excluirProfessor, obterProfessorCodigo, obterProfessores, obterProfessorNome } from "../../DAO/dao_professor.js";
import { autorizarToken, validarToken } from "../autenticacao/middllewar_token.js";
import erroApi from "../erroApi.js";
import { baseUrl } from "../server.js";
import { validacaoCamposProfessor, validatePostProfessor, validateProfessorCodigo } from "../validacao/validacaoCampos.js";

const rotaProfessor = express.Router();

rotaProfessor.get("/professores",validarToken, (req, res,next) => {
  
  obterProfessores()
  .then(professores => res.status(200).json(professores))
  .catch(error => next(error));

});

rotaProfessor.get("/professores/:nome",validarToken,(req, res,next) => {

  obterProfessorNome(req.params.nome)
  .then(professores => res.status(200).json(professores))
  .catch(error => next(error));
   
});

rotaProfessor.get("/professores/codigo/:codigo",validarToken, (req, res,next) => {

  obterProfessorCodigo(req.params.codigo)
  .then(professores => res.status(200).json(professores))
  .catch(error => next(error));
   
});

rotaProfessor.delete("/professores/:codigo",validarToken,autorizarToken,(req, res,next) => {
  
  excluirProfessor(45).then(res.status(201)).catch(error => next(error))

})


rotaProfessor.post("/professores", validarToken,autorizarToken, validatePostProfessor, validacaoCamposProfessor, (req, res,next) => {
  
  (async() =>{

    try {

         const professorCriado = await criarProfessor(req.body.nome, req.body.idade, req.body.sexo);
         if(!professorCriado){
               throw(erroApi(47400,"ERROR","ERRO NO SERVIDOR!",500,"PROFESSOR NÃO CRIADO!"));
          
         }else{
               res.status(201).location(baseUrl + "/professores/codigo/" + professorCriado.codigo).json(professorCriado);
         }

    } catch(error){
        next(error);
    }
    

  })();

});

rotaProfessor.put("/professores/:codigo", validarToken,autorizarToken,validatePostProfessor, validacaoCamposProfessor, (req, res,next) => {
     
  (async() =>{

    try {

         const professorAlterado = await alterarProfessor(req.params.codigo,req.body.nome, req.body.idade, req.body.sexo);
         if(!professorAlterado){
               throw(erroApi(47400,"ERROR","ERRO NO SERVIDOR!",500,"PROFESSOR NÃO CRIADO!"));
          
         }else{
               res.status(204).location(baseUrl + "/professores/codigo/" + req.params.codigo).json();
         }

    } catch(error){
        next(error);
    }
    

  })();

});




export default rotaProfessor