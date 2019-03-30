const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//parse application /x-www-form-unlencoded
app.use(bodyParser.urlencoded({ extended: false })); //esse codigo é para tratar esse erro: body-parser deprecated undefined extended: provide extended option app.js

app.use(bodyParser.json()); //dizer pra aplicação que vou usar a constante bodyParser no formato json


app.get('/', function(req,res){
    return res.json({msg:'Ola Node com express'});
});

app.get('/users', function(req,res){
    var users = [
        {id: 1, name: "Isabela", email: "isabela@mail.com"},
        {id: 2, name: "Fernando", email: "fernando@mail.com"},
        {id: 3, name: "Thiago", email: "thiago@mail.com"}
    ]
    return res.json(users);
});

app.get('/users/:id',function(req,res){
    //console.log(req.params.id);
    var user = {id: 1, name: "Isabela", email: "isabela@mail.com"};

    if (user.id == req.params.id) {
        res.json(user)
    }else{
        res.status(400).json({msg: 'Usuário não encontrado!'});
    };
    //return res.json(req.params.id); //o id é o valor que será passado na rota da api quando eu chamar ela no postman http://localhost:3000/users/<id>
});

app.post('/users', function(req,res){
    //console.log(req.body)
    var newUser = req.body;

    newUser.id = 4; //o id é um novo atributo que estou criando para a minha requisição, poderia criar vários e ir incrementando meu body

    return res.json(newUser);
})
app.listen(3000);