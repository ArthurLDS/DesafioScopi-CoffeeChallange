var validacao = {}

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
  for(var i in coffechallenge.pessoas){
    if(JSON.parse(coffechallenge.pessoas[i]).nome === coffechallenge.$txtNome.val()){
      validacao.notificarErroNomePessoa(true, "Este nome já existe!");
      return false;
    }
  }
  return true;
}

validacao.nomePessoaVazio = function(){
  if(coffechallenge.$txtNome.val()){
    return true;
  }
  validacao.notificarErroNomePessoa(true, "O nome não pode estar vazio!");
  return false;
}

validacao.nomePessoaTamanho = function(){
  if(coffechallenge.$txtNome.val().length < 3){
    validacao.notificarErroNomePessoa(true, "O nome deve ter no mínimo 3 letras");
    return false;
  }
  return true;
}

validacao.validarListaPessoas = function(){

  if(coffechallenge.pessoas === null || coffechallenge.pessoas.length === 0 || coffechallenge.pessoas === ""){
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
    coffechallenge.$contentPessoas.hide();
    coffechallenge.$btnGerarCoffeMakers.attr("disabled", true);
    coffechallenge.$btnGerarCoffeMakers.attr("href", "#");
  }
  else{
    validacao.$notificacaoNenhumaPessoa.hide();
    coffechallenge.$contentPessoas.show();
    coffechallenge.$btnGerarCoffeMakers.attr("disabled", false);
    coffechallenge.$btnGerarCoffeMakers.attr("href", linkPageSorteio);
  }
}
