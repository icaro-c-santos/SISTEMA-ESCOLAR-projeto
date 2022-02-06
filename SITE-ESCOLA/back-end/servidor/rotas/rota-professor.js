import express from "express";
import { alterarProfessor, criarProfessor, excluirProfessor, obterProfessorCodigo, obterProfessores, obterProfessorNome } from "../../DAO/dao_professor.js";
import { autorizarToken, validarToken } from "../autenticacao/middllewar_token.js";
import { baseUrl } from "../server.js";
import { validacaoCamposProfessor, validateDeleteProfessor, validatePostProfessor } from "../validacao/validacaoCampos.js";

const rotaProfessor = express.Router();


rotaProfessor.get("/professores",validarToken, (req, res, next) => {

  obterProfessores.then(p => res.status(200).send(p)).
    catch(error => { res.status(400).send({ error: error.message }) })

});



rotaProfessor.get("/professores/:codigo",validarToken, (req, res, next) => {

  obterProfessorCodigo(req.params.codigo).then(p => res.status(200).send(p)).
    catch(error => { res.status(400).send({ error: error.message }) })
});


rotaProfessor.delete("/professores/:codigo",validarToken,autorizarToken, validateDeleteProfessor, validacaoCamposProfessor, (req, res, next) => {

  excluirProfessor(req.params.codigo).then(mgs => {
     res.status(204).send();
  }).catch(error => res.status(400).send(error));

})



rotaProfessor.post("/professores", validarToken,autorizarToken, validatePostProfessor, validacaoCamposProfessor, (req, res, next) => {

  criarProfessor(req.body.nome, req.body.idade, req.body.sexo).then(professorCriado => {

    if (!professorCriado) {
      res.status(500).send({ codigo: "05", mensagem: "ERRO NO SERVIDOR!", detalhe: "PROFESSOR NÃO CRIADO!" });
    } else {
      res.status(201).location(baseUrl + "/professores/" + professorCriado.codigo).send(professorCriado);
    }

  }).catch(erro => {
    res.status(500).send({ codigo: "05", mensagem: "ERRO NO SERVIDOR!", detalhe: erro.message })
  })
});


export default rotaProfessor