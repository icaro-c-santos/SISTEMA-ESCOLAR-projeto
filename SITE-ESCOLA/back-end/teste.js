

const f = new Promise((resolve,reject) =>{
    
    throw new  Error("ereei aqui dentro!");
   
})

f.catch(p => console.log(p.message));

