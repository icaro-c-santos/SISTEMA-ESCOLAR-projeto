import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com",
  });


async function obter_aluno_matricula(){

    const matricula =document.form_obter_aluno_matricula.matricula;

    const response = await api.post("posts",matricula );

}
