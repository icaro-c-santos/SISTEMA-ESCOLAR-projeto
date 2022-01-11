
export class Disciplina{


   
    constructor(nome,descricao){

        this.id = null,
        this.codigo = null,
        this.nome = null,
        this.descricao = null
        this.setNome(nome);
        this.setDescricao(descricao);

    }

   getId(){
        return this.id;
    }

    getCodigo(){
        return this.id;
    }

    getNome(){
        return this.nome;
    }

    getDescricao(){
        return this.descricao;
    }
    setNome(nome){
        this.nome = nome;
        return this.getNome;
    }

    setDescricao(descricao){
        this.descricao = descricao;
        return this.descricao;
    }   

    


}

