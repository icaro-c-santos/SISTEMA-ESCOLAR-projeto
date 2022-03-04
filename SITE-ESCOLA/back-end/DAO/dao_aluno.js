import Aluno from "../Entitys/aluno.js"
import erroApi from "../servidor/erroApi.js"

async function criarAluno(nome,idade,sexo,serie,cpf){
    
        return await Aluno.create({
            nome: nome,
            idade: idade,
            sexo: sexo,
            serie: serie,
            cpf: cpf
        })
    
}

async function obterAlunos(){
    
    const alunos = await Aluno.findAll({where:{estado:true}});
    return alunos;
}

async function obterAlunoMatricula(matricula){
   
    const aluno = await Aluno.findAll({where:{matricula:matricula,estado: true }});
    return aluno;
}

async function obterAlunosNome(nome){
   
    const alunos = await Aluno.findAll({where:{nome:nome,estado:true}});
    return alunos;
}

async function alterarAluno(matricula,nome,idade,sexo,serie,cpf){
    
    const aluno = await obterAlunoMatricula(matricula);

    if(aluno.length>0){
        return await Aluno.update({
            nome: nome,
            idade: idade,
            sexo: sexo,
            serie: serie,
            cpf: cpf
        },{where:{matricula:matricula}});  
    }else{
        throw (erroApi(40401,null,"CODIGO NÃO EXISTE!",404));
    }
}

async function excluirAluno(matricula){

    const aluno = await obterAlunoMatricula(matricula);
    if(aluno.length>0){
        return await Aluno.update({estado:false},{where:{matricula:matricula}})
    }else{
        throw (erroApi(40401,null,"CODIGO NÃO EXISTE!",404));
    }
}


export { criarAluno,obterAlunos,obterAlunoMatricula,obterAlunosNome,alterarAluno,excluirAluno};