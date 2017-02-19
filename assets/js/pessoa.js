var pessoa = {};

$(function(){
    pessoa.iniciar();
});

pessoa.iniciar = function(){
    pessoa.$txtNome = $('#txtNomePessoa');
    pessoa.$listaPessoas = $("#listaPessoas");
    pessoa.$contentPessoas = $("#content-pessoas");

    pessoa.configurarBtns();
    pessoa.carregarPessoas();
    pessoa.listarPessoas();
};

pessoa.carregarPessoas = function(){
  let pessoas = localStorage.getItem("pessoas");
  pessoa.pessoas = JSON.parse(pessoas);

  if(pessoa.pessoas === null){
    pessoa.pessoas = [];
  }
}

pessoa.configurarBtns = function(){
    pessoa.$btnGerarCoffeMakers = $("#btn-gerar-coffeeMakers");
    pessoa.$btnCadastrarPessoa  = $('#btnCadastrarPessoa');
    
    pessoa.$btnCadastrarPessoa.click(function(event){
      pessoa.adicionar();
      event.preventDefault();
    });
}

pessoa.adicionar = function(){
  if(validacao.validarNomePessoa()){
    let novaPessoa = JSON.stringify(
      { nome : pessoa.$txtNome.val() }
    );

    pessoa.$txtNome.val("");
    pessoa.pessoas.push(novaPessoa);
    localStorage.setItem("pessoas", JSON.stringify(pessoa.pessoas));
    pessoa.listarPessoas();
  }
};

pessoa.listarPessoas = function(){
  if(validacao.validarListaPessoas()){
    pessoa.$listaPessoas.html("");
    for(let i in pessoa.pessoas){
      let pessoaAtual = JSON.parse(pessoa.pessoas[i]);
      pessoa.$listaPessoas.append("<tr><td>"+ eval(parseInt(i) + 1) +"</td><td>"+pessoaAtual.nome+"</td><td><a class='pull-right' href='javascript:pessoa.excluir("+i+")'><i class='fa fa-trash-o' aria-hidden='true'></i> Excluir</a></td></tr>");
    }
  }
}

pessoa.excluir = function(id){
   let pessoaExcluida = JSON.parse(pessoa.pessoas[id]);
   pessoa.pessoas.splice(id, 1);
   localStorage.setItem("pessoas", JSON.stringify(pessoa.pessoas));
   pessoa.listarPessoas();
}

pessoa.getIndicePessoa = function(pessoa){
  for(let i=0; i<pessoa.pessoas.length; i++){
    let pessoaSelecionada = JSON.parse(pessoa.pessoas[i]);
    if(pessoaSelecionada.nome === pessoa.nome){
      return i;
    }
  }
  return false;
}
