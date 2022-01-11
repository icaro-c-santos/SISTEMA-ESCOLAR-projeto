

export class Professor{


    constructor(nome,idade,sexo){
        this.id;
        this.codigo;
        this.nome;
        this.idade;
        this.sexo;

    }


    getId(){
        return this.id;
    }

    getCodigo(){
        return this.codigo;
    }

    getNome(){
        return this.nome;
    }

    getIdade(){
        return this.idade;
    }

    getSexo(){
        return this.sexo;
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


    setSexo(sexo){
        this.sexo = sexo;
    }


}