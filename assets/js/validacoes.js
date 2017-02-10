var validacao = {}

validacao.notificarErro = function(mostrar){
  var alerta = $('#alert-erro');
  if(mostrar){
    alerta.show();
    setTimeout(function () {
      alerta.fadeOut("slow");
    }, 6000);
  }
  else {
    alerta.hide();
  }
}

validacao.validarCampoNome = function(){
  var valido;
  for(var i in coffeChallange.pessoas){
    if(JSON.parse(coffeChallange.pessoas[i]).nome === coffeChallange.$txtNome.val()){
      validacao.notificarErro(true);
      return false;
    }
  }
  valido = coffeChallange.$txtNome.val() ? true : false;
  if(valido)
     validacao.notificarErro(false);
  else
    validacao.notificarErro(true);
  return valido;
}
