import Disciplina from "../Entitys/disciplina.js"
import erroApi from "../servidor/erroApi.js"


async function criarDisciplina(codigo, nome, descricao) {

    const disciplina = await obterDisciplinaCodigo(codigo);
    if (!disciplina.length > 0) {
        return await Disciplina.create({
            codigo: codigo,
            nome: nome,
            descricao: descricao
        })
    } else {
        throw (erroApi(40901, null, "CODIGO JÁ EXISTE!", 409));
    }
}

async function obterDisciplinas() {
    return await Disciplina.findAll({where:{estado: true}});
}

async function obterDisciplinaCodigo(codigo) {

    return await Disciplina.findAll({ where: { codigo: codigo, estado: true } });

}

async function obterDisciplinasNome(nome) {

    return await Disciplina.findAll({ where: { nome: nome, estado: true } });

}

async function alterarDisciplina(codigo, nome, descricao) {

    const disciplina = await obterDisciplinaCodigo(codigo);

    if (disciplina.length > 0) {
        return await Disciplina.update({
            nome: nome,
            descricao: descricao
        }, { where: { codigo: codigo } });
    } else {
        throw (erroApi(40401, null, "CODIGO NÃO EXISTE!", 404));
    }
}

async function excluirDisciplina(codigo) {

    const disciplina = await obterDisciplinaCodigo(codigo);
    if (disciplina.length > 0) {
        return await Disciplina.update({estado:false},{where:{codigo:codigo}});
    } else {
        throw (erroApi(40401, null, "CODIGO NÃO EXISTE!", 404));
    }

}

export { criarDisciplina, obterDisciplinas, obterDisciplinaCodigo, obterDisciplinasNome, alterarDisciplina, excluirDisciplina }

