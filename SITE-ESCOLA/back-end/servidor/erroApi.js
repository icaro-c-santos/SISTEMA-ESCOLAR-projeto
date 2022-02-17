

function erroApi(codigo =0,nome="ERROR!",message ="NENHUMA",status = 500,descricao="NENHUMA"){
        
    const newErro = new Error();
        newErro.codigo = codigo;
        newErro.message = message;
        newErro.name = nome;
        newErro.status = status;
        newErro.descricao = descricao;
        newErro.show ={
            codigo: codigo,
            message: message,
            name: nome,
            status: status,
            descricao: descricao,
        }
    return newErro;
}





export default erroApi;