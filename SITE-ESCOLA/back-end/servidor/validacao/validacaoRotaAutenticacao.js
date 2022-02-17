import { body, validationResult} from "express-validator";


const validateLogin = [

    body("login").isString().withMessage({ mensagem: "CAMPO LOGIN POSSUI O FORMATO INVALIDO!"}).notEmpty().withMessage({ mensagem: "CAMPO LOGIN VAZIO!"}),
    body("senha").isString().withMessage({ mensagem: "CAMPO SENHA POSSUI O FORMATO INVALIDO!"}).notEmpty().withMessage({ mensagem: "CAMPO SENHA VAZIO!"}),

]

const validacaoCamposLogin = (req,res,next)=>{
    
        const erros =  validationResult(req);
        if (erros.isEmpty()) {
            next();
        }else{
            res.status(400).send(erros.array());
        }

}


export {validacaoCamposLogin,validateLogin}