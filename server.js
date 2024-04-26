// Importa o Express
const express = require('express');

// Cria uma aplicação Express
const app = express();

app.use(express.json());

//Middleware para dados de formulário
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

//Servindo arquivos estaticos
app.get('/login', (req, res)=>{
    res.sendFile('index.html', {root: './public'})
});


app.post('/login',(req,res) => {
    const {username,password} = req.body
    if(username==="admin"&& password==="123"){
      res.sendFile('about.html', {root: './public'})
    }else{
        res.send("Falha no login")
    }})

const PORT = 3000;
app.listen(PORT, () => {
    console.log (`server rodando no http://localhost:${PORT}`);

});


