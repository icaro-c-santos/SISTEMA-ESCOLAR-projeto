

class nota{

    constructor(aluno){
        this.id =null,
        this.aluno = aluno,
        this.av1 = null,
        this.av2 = null,
        this.trabalhos = null,
        this.notafinal = null

    }

    getId(){
        return this.id;
    }

    getAluno(){
        return this.aluno;
    }

    getAv1(){
        return this.av1;
    }

    getAv2(){
        return this.av2;
    }

    getTrabalhos(){
        return this.trabalhos;
    }

    getNotaFInal(){
        return this.notafinal;
    }
    
    setAv1(nota){
        if(isNaN(nota)) throw "ERRO DIGITE APENAS NÚMEROS";
        if(nota>0 && nota < 180){
            this.av1 = nota;
        }else{
            throw ("ERRO NOTA INVALIDA! DIGITE UM VALOR ENTRE 0 e 10");
        }
    }

    setAv2(nota){
        if(isNaN(nota)) throw "ERRO DIGITE APENAS NÚMEROS";
        if(nota>0 && nota < 180){
            this.av2 = nota;
        }else{
            throw ("ERRO NOTA INVALIDA! DIGITE UM VALOR ENTRE 0 e 10");
        }
    }

    setTrabalhos(nota){
        if(isNaN(nota)) throw "ERRO DIGITE APENAS NÚMEROS";
        if(nota>0 && nota < 180){
            this.trabalhos = nota;
        }else{
            throw ("ERRO NOTA INVALIDA! DIGITE UM VALOR ENTRE 0 e 10");
        }
    }

    setNotaFInal(nota){
        if(isNaN(nota)) throw "ERRO DIGITE APENAS NÚMEROS";
        if(nota>0 && nota < 180){
            this.notafinal = nota;
        }else{
            throw ("ERRO NOTA INVALIDA! DIGITE UM VALOR ENTRE 0 e 10");
        }
    }


}