

 function novoCadastro(){

    var nome = document.getElementById("nome").value;
var email = document.getElementById("email").value;

var novoCadastro = {
    nome: nome,
    email: email 
}

    if(nome.length <= 0){
        alert("Nome deve ser obrigatório!")
    }else if (email.length <= 0){
        alert("Email deve ser preenchido!")
    }else{
        alert("Cadastro enviado com sucesso!")
        console.log(nome)
    }

}

/*
function bemVindo(){
    alert("Bem vindo ao mundo do Javascript!");
}

function mostraNome(){
    var nome = document.getElementById("nome").value;
    alert(nome);
}

function enviaCadastro(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;

    if(nome.length <= 0){
        alert("Nome deve ser obrigatório!")
    }else if (email.length <= 0){
        alert("Email deve ser preenchido!")
    }else{
        alert("Cadastro enviado com sucesso!")
    }
}*/