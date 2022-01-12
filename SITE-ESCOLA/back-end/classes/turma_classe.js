
class Turma{

    constructor(disciplina,professor){
        this.id = null,
        this.codigo = null,
        this.Disciplina =null, 
        this.Professor = null,
        this.alunos = [],
        this.chamada = [],
        this.setDisciplina(disciplina);
        this.setProfessor(professor);
        this.notas = []
    }


    getId(){
        return this.id;
    }

    getCodigo(){
        return this.codigo;
    }

    getDisciplina(){
        return this.Disciplina;
    }

    getProfessor(){
        return this.Professor;
    }

    getAlunos(){
        return this.alunos;
    }

    getChamada(){
        return this.chamada;
    }

    deleteProfessor(){
        this.Professor = null;
    }

    setDisciplina(disciplina){
        if(Object.prototype.toString.call(disciplina) ==  "[object Disciplina]"){
            this.Disciplina = disciplina;
            return this.getDisciplina;
         }else{
             throw "ERRO! OBJETO NÃO É DO TIPO [object Disciplina]";
         }
    }


    setProfessor(professor){
        if(Object.prototype.toString.call(professor) ==  "[object Professor]"){
            this.Professor = professor;
            return this.getProfessor;
         }else{
             throw "ERRO! OBJETO NÃO É DO TIPO [object Professor]";
         }
    }

    addAluno(aluno){
        if(Object.prototype.toString.call(aluno) ==  "[object Aluno]"){
            this.alunos.array.forEach(element => {
                if(element.getMatricula === aluno.getMatricula){
                    throw "ERRO! ALUNO JÁ ESTÁ NA LISTA!"
                }
            });
            this.alunos.push(aluno);
            return true
        }else{
            throw "ERRO! OBJETO NÃO É DO TIPO [object Aluno]"
        }

    }

    deleteAluno(aluno){  
        if(Object.prototype.toString.call(aluno) ==  "[object Aluno]"){  /// VERIFICA SE É DO TIPO ALUNO
            this.alunos.array.forEach((elemento,indice) => {          /// PERCORRE O INDICE PROCURANDO O ELMENTO COM MATRICUA = AO PASSADO NO PARAMETRO SE ENCONTRAR REMOVE E  RETORNA TRUE, CASO NAO ENCONTRE SEGUE ADIANTE E LANÇA  UM ERRO
                if(elemento.getMatricula === aluno.getMatricula){  
                    this.alunos.slice(indice,1);
                    return true;
                }
            });
            
            throw "ERRO! ALUNO NÃO ESTÁ NA LISTA!";  

        }else{
            throw "ERRO! OBJETO NÃO É DO TIPO [object Aluno]"
        }
    }

    addPresenca(presenca){
        if(Object.prototype.toString.call(presenca) ==  "[object Presenca]"){
            this.chamada.array.forEach(element => {
                if(element.getData === presenca.getData){
                    throw "ERRO! JÁ EXISTE UMA CHAMADA COM ESTA DATA!"
                }
            });
            this.chamada.push(presenca);
            return true
        }else{
            throw "ERRO! OBJETO NÃO É DO TIPO [object Presenca]"
        }
        

    }

    deletePresenca(presenca){  
        if(Object.prototype.toString.call(presenca) ==  "[object Presenca]"){      /// VERIFICA SE É DO TIPO ALUNO
            this.chamada.array.forEach((elemento,indice) => {                      /// PERCORRE O INDICE PROCURANDO O ELMENTO COM MATRICUA = AO PASSADO NO PARAMETRO SE ENCONTRAR REMOVE E  RETORNA TRUE, CASO NAO ENCONTRE SEGUE ADIANTE E LANÇA  UM ERRO
                if(elemento.getData === presenca.getData){
                    this.chamada.slice(indice,1);
                    return true;
                }
            });

        throw "ERRO! A CHAMADA NÃO ESTÁ NA LISTA!"; 

        }else{
            throw "ERRO! OBJETO NÃO É DO TIPO [object Presenca]"
        }
    }

    

}