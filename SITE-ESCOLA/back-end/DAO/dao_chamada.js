import erroApi from "../servidor/erroApi.js"
import Chamada from "../Entitys/chamada.js"

async function criarChamada(data) {
    const novaChamada = await Chamada.create({
        data: data
    });

    return novaChamada;
}

async function obterChamadas() {
    return await Chamada.findAll();
}

async function obterChamadaCodigo(codigo) {
    return await Chamada.findAll({ where: { codigo: codigo } });
}
async function obterChamadasData(data) {
    return await Chamada.findAll({ where: { data: data } })
}

async function excluirChamada(codigo) {
    const chamda = obterChamadaCodigo(codigo);
    if (chamda.length > 0) {
        return await Chamada.destroy({ where: { codigo: codigo } });
    } else {
        throw (erroApi(40401, null, "CODIGO NÃO EXISTE!", 404));
    }
}

async function setarChamada(){

}