import { obterProfessores, obterProfessorNome } from "./SITE-ESCOLA/back-end/DAO/dao_professor.js";
import { buscarUsuario, criarUsuario, deletarUsuario } from "./SITE-ESCOLA/back-end/servidor/autenticacao/dao_usuario.js";
import { gerarToken } from "./SITE-ESCOLA/back-end/servidor/autenticacao/middllewar_token.js";



gerarToken("4",true).then(console.log);