const express = require('express');
const app = express();
app.use(express.static('public'));

//Levantar nuestro servidor
let port = 3001 || process.env.PORT;

app.listen(port,()=>{
    console.log("servidor corriendo en puerto" + port)
})

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});