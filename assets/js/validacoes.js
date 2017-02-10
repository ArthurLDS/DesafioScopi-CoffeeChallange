var validacao = {}

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
  for(var i in coffeChallange.pessoas){
    if(JSON.parse(coffeChallange.pessoas[i]).nome === coffeChallange.$txtNome.val()){
      validacao.notificarErro(true);
      alertaMsg.text("Este nome já existente!");
      return false;
    }
  }

  if(coffeChallange.$txtNome.val())
    validacao.notificarErro(false);
  else{
    alertaMsg.text("O campo nome não pode estar vazio!");
    validacao.notificarErro(true);
    return false;
  }

  if(coffeChallange.$txtNome.val().length <3){
    validacao.notificarErro(true);
    alertaMsg.text("O campo nome deve ter no mínimo 3 letras");
    return false;
  }

  return true;
}
