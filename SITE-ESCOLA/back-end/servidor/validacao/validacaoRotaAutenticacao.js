import { body, validationResult} from "express-validator";


const validateLogin = [

    body("login").isString().withMessage({ codigo: "01" , mensagem: "CAMPO LOGIN POSSUI O FORMATO INVALIDO!"}).notEmpty().withMessage({codigo: "02", mensagem: "CAMPO LOGIN VAZIO!"}),
    body("senha").isString().withMessage({ codigo: "01" , mensagem: "CAMPO SENHA POSSUI O FORMATO INVALIDO!"}).notEmpty().withMessage({codigo: "02", mensagem: "CAMPO SENHA VAZIO!"}),

]

const validacaoCamposLogin = (req,res,next)=>{
    
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



export {validacaoCamposLogin,validateLogin}