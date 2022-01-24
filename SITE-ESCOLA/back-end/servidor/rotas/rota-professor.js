import express from "express";
import { alterarProfessor, criarProfessor, obterProfessorCodigo, obterProfessores, obterProfessorNome } from "../../DAO/dao_professor.js";
import { baseUrl } from "../server.js";

import { body, validationResult } from "express-validator";

const rotaProfessor = express.Router();

const validacaoPutProfessores = [
  body("nome").isString().notEmpty().withMessage("CAMPO NOME INVALIDO!"),  
  body("sexo").isString().notEmpty().withMessage("CAMPO SEXO INVALIDO!"),
  body("idade").isInt({min: 1 , max: 160}).withMessage("INTERVALO INVALIDO!").notEmpty().withMessage("CAMPO IDADE INVALIDO!")];


rotaProfessor.get("/professores", (req, res, next) => {

  try {
    obterProfessores.then(p => res.status(200).send(p));
  } catch (error) {
    res.status(400).send(error);
  }

});


rotaProfessor.put("/professores", validacaoPutProfessores, (req, res, next) => {

  try{

    const erros = validationResult(req);

    if (erros.isEmpty()) {
      res.status(201).send("OK");
    } else {
      res.status(400).send({ erros: erros.array() });
    }

  }catch(erro){
      res.status(500).send("ACONTECEU UM ERRO! : " +erro.message);
  }

});

rotaProfessor.put("")







export default rotaProfessor;