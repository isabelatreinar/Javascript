const supertest = require('supertest');
const chai = require('chai');

const expect = chai.expect;

const app = require('../app.js') //o ../ sai da pasta que estou. Aqui estou importando a aplicação app.js

const request = supertest(app)

describe('API Tests', function(){ //describe como se fosse uma suíte de teste

    it('Servidor Online', function(done){//it é um cenário, done é um callback, pois o javascript é assincrono, portanto preciso finalizar o teste senão na execução ele não termina
        request
            .get('/') //chamar a função .get para testar, da mesma forma que crio uma aba GET no postman, 
            .expect(200)
            .end(function(err, res){
                expect(res.body).to.eql({mensagem: 'Olá Node com express'});
                done(err);
            });
    }); 

    it('Validar usuário não encontrado', function(done){
        request
            .get('/users/4')//o id que o usuário é encontrado é 1!
            .expect(400)
            .end(function(err,res){
                expect(res.body).to.eql({msg: 'Usuário não encontrado!'});
                done(err);
            });
    });

    it('Validar usuário 1 encontrado', function(done){
        request
            .get('/users/1')//o id que o usuário é encontrado é 1!
            .expect(200)
            .end(function(err,res){
                expect(res.body).to.eql({"id":1,"name":"Isabela","email":"isabela@mail.com"});
                done(err);
            });
    });
});
