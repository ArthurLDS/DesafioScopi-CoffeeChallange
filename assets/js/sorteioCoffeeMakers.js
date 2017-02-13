var coffeeMakers = {};

$(function(){
  coffeeMakers.diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
  coffeeMakers.alocacoes = [];
  coffeeMakers.pessoasSorteadas = [];
  coffeeMakers.$listaCoffeMakers = $('#listPessoasSorteadas');
  coffeeMakers.renderizarLista();
});

coffeeMakers.sortear = function(lista){
  let numSorteado = Math.floor(Math.random() * lista.length);
  let pessoaSorteada = JSON.parse(lista[numSorteado]);
  return pessoaSorteada;
}

coffeeMakers.atualizarLista = function(){
  coffeeMakers.$listaCoffeMakers.html("");
  coffeeMakers.pessoasSorteadas = [];
  coffeeMakers.renderizarLista();
}

// REFATORAR ISSO!
coffeeMakers.gerarLista = function(lista){
  let pessoasAlocadas = [];
  for(let i=0; i<10; i++){
    let pessoaSorteada = coffeeMakers.sortear(lista);

    if(coffeeMakers.pessoasSorteadas.map(p => p.nome).includes(pessoaSorteada.nome)){
      if(pessoasAlocadas.length == coffechallenge.pessoas.length){ //Verifica se todos já estão alocados
        coffeeMakers.pessoasSorteadas.push(pessoaSorteada);
        pessoasAlocadas = [];
        pessoasAlocadas.push(pessoaSorteada);
      }
      else{
        pessoaSorteada = coffeeMakers.sortear(lista);
        while(pessoasAlocadas.map(p => p.nome).includes(pessoaSorteada.nome)){
          pessoaSorteada = coffeeMakers.sortear(lista);
        }
        coffeeMakers.pessoasSorteadas.push(pessoaSorteada);
        pessoasAlocadas.push(pessoaSorteada);
      }
    }
    else{
      coffeeMakers.pessoasSorteadas.push(pessoaSorteada);
      pessoasAlocadas.push(pessoaSorteada);
    }
  }
}

coffeeMakers.organizarPorTurno = function(turno){
  let lista = [];

  switch (turno) {
    case "manha":
      for(let i=0; i<10; i++){
        if(i%2===0 || i===0){
          lista.push(coffeeMakers.pessoasSorteadas[i]);
        }
      }
    break;
    case "tarde":
      for(let i=0; i<10; i++){
        if(i%2!==0 && i!==0){
          lista.push(coffeeMakers.pessoasSorteadas[i]);
        }
      }
    break;
  }
  return lista;
}

coffeeMakers.renderizarLista = function(){
  coffeeMakers.gerarLista(coffechallenge.pessoas);
  let pessoasManha = coffeeMakers.organizarPorTurno("manha");
  let pessoasTarde = coffeeMakers.organizarPorTurno("tarde");

  for(let i=0; i<5; i++){
    let pessoaManha = pessoasManha[i];
    let pessoaTarde = pessoasTarde[i];

    coffeeMakers.$listaCoffeMakers.append("<tr><th>" + coffeeMakers.diasSemana[i] + "</th>  <td>" + pessoaManha.nome + "</td>  <td>" + pessoaTarde.nome + "</td></tr>");
  }

}
