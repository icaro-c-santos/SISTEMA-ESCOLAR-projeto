import express from "express";
import { param, body, validationResult } from "express-validator";


const validatePostProfessor = [

body("nome").isString().withMessage({ codigo: "01" , mensagem: "CAMPO NOME POSSUI O FORMATO INVALIDO!"}).notEmpty().withMessage({codigo: "02", mensagem: "CAMPO NOME VAZIO!"}),
body("sexo").isString().withMessage({codigo: "01" , mensagem: "CAMPO SEXO POSSUI O FORMATO INVALIDO!"}). notEmpty().withMessage({codigo: "02", mensagem: "CAMPO SEXO VAZIO!"}),
body("idade").isInt().withMessage("CAMPO IDADE POSSUI O FORMATO INVALIDO!").isInt({min: 1 , max: 160}).withMessage({codigo: "01" , mensagem: "CAMPO IDADE POSSUI O INTERVALO INVALIDO!"}).notEmpty().withMessage({codigo: "02", mensagem:"CAMPO IDADE VAZIO!"})
]

const validateDeleteProfessor = param("codigo").notEmpty().withMessage({codigo: "02", mensagem:"CAMPO CODIGO VAZIO!"});


const validacaoCamposProfessor = (req,res,next)=>{
    
  try{
  const erros =  validationResult(req);
  if (erros.isEmpty()) {
      next();
  }else{
      res.status(400).send(erros.array());
  }
}catch(erro){  
   res.status(500).send({codigo: "05", mensagem: "ERRO NO SERVIDOR!", detalhe: erro.message})
}



}


export {validacaoCamposProfessor,validatePostProfessor,validateDeleteProfessor}
