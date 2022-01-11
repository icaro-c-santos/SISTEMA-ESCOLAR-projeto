import axios from "axios";

axios({
  method: 'post',
  url: 'http://localhost:8000/alunoid',
  data: {
    matricula: '1'
  }
})
.then(response => {
    console.log(response)
})
.catch(error => {
    console.log(error)
});
