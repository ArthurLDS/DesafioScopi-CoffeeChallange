var coffeChallange = {};

$(function(){
    coffeChallange.iniciar();
});

coffeChallange.iniciar = function(){
    coffeChallange.$txtNome = $('#txtNomePessoa');

    let pessoas = localStorage.getItem("pessoas");
    coffeChallange.pessoas = JSON.parse(pessoas);

    if(coffeChallange.pessoas == null){
      coffeChallange.pessoas = [];
    }
    coffeChallange.configurarBtns();
};

coffeChallange.configurarBtns = function(){
    coffeChallange.$btnCadastrarPessoa = $('#btnCadastrarPessoa');
    coffeChallange.$btnCadastrarPessoa.click(coffeChallange.adicionar);
}

coffeChallange.adicionar = function(){
    let pessoa = JSON.stringify({
          nome : coffeChallange.$txtNome.val()
    });

    coffeChallange.pessoas.push(pessoa);
    localStorage.setItem("pessoas", JSON.stringify(coffeChallange.pessoas));
    alert(JSON.parse(pessoa).nome + " cadastrado(a) com SUCESSO!");
};
