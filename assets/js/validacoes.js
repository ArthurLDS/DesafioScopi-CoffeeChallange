var validacao = {};

$(function(){
  validacao.$notificacaoNenhumaPessoa = $('#notificacao-nenhuma-pessoa');
});

validacao.notificarErroNomePessoa = function(mostrar, mensagem){
  let alerta = $('#alert-erro');
  let alertaMsg = $('#alert-erro spam');

  if(mostrar){
    alerta.show();
    alertaMsg.text(mensagem);
  }
  else {
    alerta.fadeOut("fast");
  }
}

validacao.validarNomePessoa = function(){
  if(validacao.nomePessoaExistencia() && validacao.nomePessoaVazio() && validacao.nomePessoaTamanho()){
    validacao.notificarErroNomePessoa(false);
    return true;
  }
  return false;
}

validacao.nomePessoaExistencia = function(){
  for(let i in pessoa.pessoas){
    if(JSON.parse(pessoa.pessoas[i]).nome === pessoa.$txtNome.val()){
      validacao.notificarErroNomePessoa(true, "Este nome já existe!");
      return false;
    }
  }
  return true;
}

validacao.nomePessoaVazio = function(){
  if(pessoa.$txtNome.val()){
    return true;
  }
  validacao.notificarErroNomePessoa(true, "O nome não pode estar vazio!");
  return false;
}

validacao.nomePessoaTamanho = function(){
  if(pessoa.$txtNome.val().length < 3){
    validacao.notificarErroNomePessoa(true, "O nome deve ter no mínimo 3 letras");
    return false;
  }
  return true;
}

validacao.validarListaPessoas = function(){

  if(pessoa.pessoas === null || pessoa.pessoas.length === 0 || pessoa.pessoas === ""){
    validacao.notificarErroListaPessoas(true);
    return false;
  }
  validacao.notificarErroListaPessoas(false);
  return true;
}

validacao.notificarErroListaPessoas = function(mostrar){
  let linkPageSorteio = "sorteioCoffeeMakersList.html";
  if(mostrar){
    validacao.$notificacaoNenhumaPessoa.show();
    pessoa.$contentPessoas.hide();
    pessoa.$btnGerarCoffeMakers.attr("disabled", true);
    pessoa.$btnGerarCoffeMakers.attr("href", "#");
  }
  else{
    validacao.$notificacaoNenhumaPessoa.hide();
    pessoa.$contentPessoas.show();
    pessoa.$btnGerarCoffeMakers.attr("disabled", false);
    pessoa.$btnGerarCoffeMakers.attr("href", linkPageSorteio);
  }
}
