var coffechallenge = {};

$(function(){
    coffechallenge.iniciar();
});

coffechallenge.iniciar = function(){
    coffechallenge.$txtNome = $('#txtNomePessoa');

    let pessoas = localStorage.getItem("pessoas");
    coffechallenge.pessoas = JSON.parse(pessoas);

    if(coffechallenge.pessoas == null){
      coffechallenge.pessoas = [];
    }
    coffechallenge.listaPessoas = $("#listaPessoas");
    coffechallenge.listarPessoas();
    coffechallenge.configurarBtns();
};

coffechallenge.configurarBtns = function(){
    coffechallenge.$btnCadastrarPessoa  = $('#btnCadastrarPessoa');
    //coffechallenge.$btnGerarCoffeMakers =  $('#btn-gerar-coffeeMakers');
    coffechallenge.$btnCadastrarPessoa.click(coffechallenge.adicionar);
    //coffechallenge.$btnGerarCoffeMakers.click(coffeeMakers.gerarLista);
}

coffechallenge.adicionar = function(){
  if(validacao.validarCampoNome()){
    let pessoa = JSON.stringify({
          nome : coffechallenge.$txtNome.val()
    });

    coffechallenge.pessoas.push(pessoa);
    localStorage.setItem("pessoas", JSON.stringify(coffechallenge.pessoas));
    coffechallenge.listarPessoas();
  }
};

coffechallenge.listarPessoas = function(){
  coffechallenge.listaPessoas.html("");

	for(var i in coffechallenge.pessoas){
		let pessoa = JSON.parse(coffechallenge.pessoas[i]);
    coffechallenge.listaPessoas.append("<tr><td>"+i+"</td><td>"+pessoa.nome+"</td><td><a class='pull-right' href='javascript:coffechallenge.excluirPessoa("+i+")'><i class='fa fa-trash-o' aria-hidden='true'></i> Excluir</a></td></tr>");

	}
}

coffechallenge.excluirPessoa = function(id){
   let pessoa = JSON.parse(coffechallenge.pessoas[id]);
   coffechallenge.pessoas.splice(id, 1);
   localStorage.setItem("pessoas", JSON.stringify(coffechallenge.pessoas));
   coffechallenge.listarPessoas();
}

coffechallenge.getIndicePessoa = function(pessoa){
  for(let i=0; i<coffechallenge.pessoas.length; i++){
    let pessoaSelecionada = JSON.parse(coffechallenge.pessoas[i]);
    if(pessoaSelecionada.nome === pessoa.nome){
      return i;
    }
  }
  return -1;
}
