var validacao = {}

$(function(){
   validacao.$notificacaoNonePessoas = $('#notificacao-none-pessoas');
});
validacao.notificarErro = function(mostrar){
  let alerta = $('#alert-erro');

  if(mostrar){
    alerta.show();
    setTimeout(function () {
      alerta.fadeOut("slow");
    }, 8000);
  }
  else {
    alerta.hide();
  }
}

validacao.validarCampoNome = function(){
  let valido;
  let alertaMsg = $('#alert-erro spam');

  for(var i in coffechallenge.pessoas){
    if(JSON.parse(coffechallenge.pessoas[i]).nome === coffechallenge.$txtNome.val()){
      validacao.notificarErro(true);
      alertaMsg.text("Este nome já existe!");
      return false;
    }
  }
  if(coffechallenge.$txtNome.val())
    validacao.notificarErro(false);
  else{
    alertaMsg.text("O campo nome não pode estar vazio!");
    validacao.notificarErro(true);
    return false;
  }

  if(coffechallenge.$txtNome.val().length <3){
    validacao.notificarErro(true);
    alertaMsg.text("O campo nome deve ter no mínimo 3 letras");
    return false;
  }
  return true;
}

validacao.validarListaPessoas = function(){
  let linkPageSorteio = "coffeeMakersList.html";

  if(coffechallenge.pessoas === null || coffechallenge.pessoas.length === 0 || coffechallenge.pessoas.length === ""){
    validacao.$notificacaoNonePessoas.show();
    coffechallenge.$contentPessoas.hide();
    coffechallenge.$btnGerarCoffeMakers.attr("disabled", true);
    coffechallenge.$btnGerarCoffeMakers.attr("href", "#");
  }
  else{
    validacao.$notificacaoNonePessoas.hide();
    coffechallenge.$contentPessoas.show();
    coffechallenge.$btnGerarCoffeMakers.attr("disabled", false);
    coffechallenge.$btnGerarCoffeMakers.attr("href", linkPageSorteio);
  }
}
