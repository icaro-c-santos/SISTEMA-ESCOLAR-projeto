import express from "express";
import { alterarProfessor, criarProfessor, obterProfessorCodigo, obterProfessores, obterProfessorNome } from "../../DAO/dao_professor.js";
import { baseUrl } from "../server.js";

import { body, validationResult } from "express-validator";
import { validacaoCamposProfessor, validate } from "../validacaoCampos.js";


const rotaProfessor = express.Router();


rotaProfessor.get("/professores", (req, res, next) => {

  try {
    obterProfessores.then(p => res.status(200).send(p));
  } catch (error) {
    res.status(400).send(error);
  }

});



rotaProfessor.post("/professores",validate,validacaoCamposProfessor,(req, res, next) => {

  try { 

      criarProfessor(req.body.nome, req.body.idade, req.body.sexo).then(professorCriado => {
      
        if (!professorCriado.dataValues) {
            res.status(500).send({codigo: "05", mensagem: "ERRO NO SERVIDOR!", detalhe:"PROFESSOR NÃO CRIADO!"});
        } else {
            res.status(201).location("").send(professorCriado.dataValues);
        }

      })

  }catch (erro) {
    res.status(500).send({codigo: "05", mensagem: "ERRO NO SERVIDOR!", detalhe: erro.message});
  }

});


export default rotaProfessor