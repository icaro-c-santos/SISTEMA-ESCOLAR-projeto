import { param, body, validationResult } from "express-validator";


const validatePostProfessor = [

body("nome").isString().withMessage("CAMPO NOME POSSUI O FORMATO INVALIDO!").notEmpty().withMessage( "CAMPO NOME VAZIO!"),
body("sexo").isString().withMessage("CAMPO SEXO POSSUI O FORMATO INVALIDO!"). notEmpty().withMessage("CAMPO SEXO VAZIO!"),
body("idade").isInt().withMessage("CAMPO IDADE POSSUI O FORMATO INVALIDO!").isInt({min: 1 , max: 160}).withMessage("CAMPO IDADE POSSUI O INTERVALO INVALIDO!").notEmpty().withMessage("CAMPO IDADE VAZIO!")
]

const validateProfessorCodigo = param("codigo").notEmpty().withMessage("CAMPO CODIGO VAZIO!");


const validacaoCamposProfessor = (req,res,next)=>{
    
  const erros =  validationResult(req);
  if (erros.isEmpty()) {
      next();
  }else{
      res.status(400).send(erros.array());
  }


}

export {validacaoCamposProfessor,validatePostProfessor,validateProfessorCodigo}
