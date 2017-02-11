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
    coffeChallange.listaPessoas = $("#listaPessoas");
    coffeChallange.listarPessoas();
    coffeChallange.configurarBtns();
};

coffeChallange.configurarBtns = function(){
    coffeChallange.$btnCadastrarPessoa  = $('#btnCadastrarPessoa');
    //coffeChallange.$btnGerarCoffeMakers =  $('#btn-gerar-coffeeMakers');
    coffeChallange.$btnCadastrarPessoa.click(coffeChallange.adicionar);
    //coffeChallange.$btnGerarCoffeMakers.click(coffeeMakers.gerarLista);
}

coffeChallange.adicionar = function(){
  if(validacao.validarCampoNome()){
    let pessoa = JSON.stringify({
          nome : coffeChallange.$txtNome.val()
    });

    coffeChallange.pessoas.push(pessoa);
    localStorage.setItem("pessoas", JSON.stringify(coffeChallange.pessoas));
    coffeChallange.listarPessoas();
  }
};

coffeChallange.listarPessoas = function(){
  coffeChallange.listaPessoas.html("");

	for(var i in coffeChallange.pessoas){
		let pessoa = JSON.parse(coffeChallange.pessoas[i]);
    coffeChallange.listaPessoas.append("<tr><th>"+i+"</th><td>"+pessoa.nome+"</td><td><a class='pull-right' href='javascript:coffeChallange.excluirPessoa("+i+")'><i class='fa fa-trash-o' aria-hidden='true'></i> Excluir</a></td></tr>");

	}
}

coffeChallange.excluirPessoa = function(id){
   let pessoa = JSON.parse(coffeChallange.pessoas[id]);
   coffeChallange.pessoas.splice(id, 1);
   localStorage.setItem("pessoas", JSON.stringify(coffeChallange.pessoas));
   coffeChallange.listarPessoas();
}
