

class Presenca {
   

    constructor(turma,data){
        this.id = null,
        this.codigo =  null,
        this.turma = null,
        this.data = null,
        this.presentes = [],
        this.ausentes = [],
        this.setTurma(turma);
        this.setData(data);
       
    }
    
    
    getId(){
        return this.id;
    }

    getCodigo(){
        return this.codigo;
    }

    getData(){
        return this.data;
    }

    getTurma(){
        return this.turma;
    }

    getPresentes(){
        return this.presentes;
    }

    getAusentes(){
        return this.ausentes;
    }

    setTurma(turma){
        if(Object.prototype.toString.call(turma) ==  "[object Turma]"){
           this.turma = turma;
           return this.getTurma();
        }else{
            throw "ERRO! OBJETO NÃO É DO TIPO [object Turma]"
        }
           
    }

    setData(data){
        if(Object.prototype.toString.call(data) ==  "[object Date]"){
            this.data = data;
            return this.getData();
        }else{
            throw "ERRO! OBJETO NÃO É DO TIPO [object Date]"
        }
           
    }

    addPresente(aluno){
        if(Object.prototype.toString.call(aluno) ==  "[object Aluno]"){
            this.presentes.array.forEach(element => {
                if(element.getMatricula === aluno.getMatricula){
                    throw "ERRO! ALUNO JÁ ESTÁ NA LISTA!"
                }
            });
            this.presentes.push(aluno);
            return true
        }else{
            throw "ERRO! OBJETO NÃO É DO TIPO [object Aluno]"
        }

    }

    addAusente(aluno){
        if(Object.prototype.toString.call(aluno) ==  "[object Aluno]"){
            this.ausentes.array.forEach(element => {
                if(element.getMatricula === aluno.getMatricula){
                    throw "ERRO! ALUNO JÁ ESTÁ NA LISTA!"
                }
            });
            this.ausentes.push(aluno);
            return true
        }else{
            throw "ERRO! OBJETO NÃO É DO TIPO [object Aluno]"
        }

    }

    deleteAusente(aluno){  
        if(Object.prototype.toString.call(aluno) ==  "[object Aluno]"){  /// VERIFICA SE É DO TIPO ALUNO
            this.ausentes.array.forEach((elemento,indice) => {          /// PERCORRE O INDICE PROCURANDO O ELMENTO COM MATRICUA = AO PASSADO NO PARAMETRO SE ENCONTRAR REMOVE E  RETORNA TRUE, CASO NAO ENCONTRE SEGUE ADIANTE E LANÇA  UM ERRO
                if(elemento.getMatricula === aluno.getMatricula){  
                    this.ausentes.slice(indice,1);
                    return true;
                }
            });
            
            throw "ERRO! ALUNO NÃO ESTÁ NA LISTA!";  

        }else{
            throw "ERRO! OBJETO NÃO É DO TIPO [object Aluno]"
        }
    }

    deletePresente(aluno){  
        if(Object.prototype.toString.call(aluno) ==  "[object Aluno]"){  /// VERIFICA SE É DO TIPO ALUNO
            this.presentes.array.forEach((elemento,indice) => {          /// PERCORRE O INDICE PROCURANDO O ELMENTO COM MATRICUA = AO PASSADO NO PARAMETRO SE ENCONTRAR REMOVE E  RETORNA TRUE, CASO NAO ENCONTRE SEGUE ADIANTE E LANÇA  UM ERRO
                if(elemento.getMatricula === aluno.getMatricula){  
                    this.presentes.slice(indice,1);
                    return true;
                }
            });
            
            throw "ERRO! ALUNO NÃO ESTÁ NA LISTA!";  

        }else{
            throw "ERRO! OBJETO NÃO É DO TIPO [object Aluno]"
        }
    }


 }




 