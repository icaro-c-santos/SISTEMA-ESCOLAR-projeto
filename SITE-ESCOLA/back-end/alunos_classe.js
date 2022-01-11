
export class Aluno{

    constructor (nome,idade,sexo){
        this.id = null,
        this.matricula = null,
        this.nome = null,
        this.idade = null
        this.sexo = null,
        this.serie = null,
        this.nome(nome);
        this.setIdade(idade);
        this.setSexo(sexo);
    }

    getId(){
        return this.id;
    }

    getNome(){
        return this.nome;
    }

    getIdade(){
        return this.idade;
    }

    getMatricula(){
        return this.matricula;
    }
    getSexo(){
        return this.sexo;
    }

    getSerie(){
        return this.serie;
    }

    setSexo(sexo){
        this.sexo = sexo;
    }

    setNome(nome){
        this.nome = nome;
    }

    setIdade(idade){
        if(isNaN(idade)) throw "ERRO DIGITE APENAS NÚMEROS";
        if(idade>0 && idade < 180){
            this.idade = idade;
        }else{
            throw ("ERRO IDADE INVALIDA! DIGITE UM VALOR ENTRE 0 e 180");
        }
    }

    setSerie(serie){
        this.serie = serie;
    }

    


    
}

