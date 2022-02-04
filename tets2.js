import { obterProfessores, obterProfessorNome } from "./SITE-ESCOLA/back-end/DAO/dao_professor.js";
import ssequelize from "./SITE-ESCOLA/back-end/database/database_escola.js";
import { buscarUsuario, criarUsuario, deletarUsuario } from "./SITE-ESCOLA/back-end/servidor/autenticacao/dao_usuario.js";
import { gerarToken } from "./SITE-ESCOLA/back-end/servidor/autenticacao/middllewar_token.js";



ssequelize.sync();
