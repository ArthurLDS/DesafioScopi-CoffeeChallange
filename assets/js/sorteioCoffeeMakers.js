var sorteioCoffeeMakers = {};

$(function(){
  sorteioCoffeeMakers.diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
  sorteioCoffeeMakers.pessoasAlocadas  = [];
  sorteioCoffeeMakers.pessoasSorteadas = [];
  sorteioCoffeeMakers.$listaCoffeMakers = $('#listPessoasSorteadas');
  sorteioCoffeeMakers.renderizarLista();
});

sorteioCoffeeMakers.sortear = function(lista){
  let numSorteado = Math.floor(Math.random() * lista.length);
  let pessoaSorteada = JSON.parse(lista[numSorteado]);
  return pessoaSorteada;
}

sorteioCoffeeMakers.atualizarLista = function(){
  sorteioCoffeeMakers.$listaCoffeMakers.html("");
  sorteioCoffeeMakers.pessoasSorteadas = [];
  sorteioCoffeeMakers.renderizarLista();
}

// REFATORAR ISSO!
sorteioCoffeeMakers.gerarListaPessoasSorteadas = function(lista){

  for(let i=0; i<10; i++){
    let pessoaSorteada = sorteioCoffeeMakers.sortear(lista);
    if(sorteioCoffeeMakers.pessoasSorteadas.map(p => p.nome).includes(pessoaSorteada.nome)){

      if(sorteioCoffeeMakers.pessoasAlocadas.length == pessoa.pessoas.length){
        sorteioCoffeeMakers.pessoasAlocadas = [];
        sorteioCoffeeMakers.addPessoaEmListaDeSorteadosEAlocados(pessoaSorteada);
      }
      else{
        do {
          pessoaSorteada = sorteioCoffeeMakers.sortear(lista);
        }
        while(sorteioCoffeeMakers.pessoasAlocadas.map(p => p.nome).includes(pessoaSorteada.nome));
        sorteioCoffeeMakers.addPessoaEmListaDeSorteadosEAlocados(pessoaSorteada);
      }
    }
    else{
      sorteioCoffeeMakers.addPessoaEmListaDeSorteadosEAlocados(pessoaSorteada);
    }
  }
}

sorteioCoffeeMakers.addPessoaEmListaDeSorteadosEAlocados = function(pessoaSorteada){
  sorteioCoffeeMakers.pessoasSorteadas.push(pessoaSorteada);
  sorteioCoffeeMakers.pessoasAlocadas.push(pessoaSorteada);
}

sorteioCoffeeMakers.organizarPessoasSorteadasPorTurno = function(turno){
  let lista = [];

  switch (turno) {
    case "manha":
      for(let i=0; i<10; i++){
        if(i%2===0 || i===0){
          lista.push(sorteioCoffeeMakers.pessoasSorteadas[i]);
        }
      }
    break;
    case "tarde":
      for(let i=0; i<10; i++){
        if(i%2!==0 && i!==0){
          lista.push(sorteioCoffeeMakers.pessoasSorteadas[i]);
        }
      }
    break;
  }
  return lista;
}

sorteioCoffeeMakers.renderizarLista = function(){
  sorteioCoffeeMakers.gerarListaPessoasSorteadas(pessoa.pessoas);
  let pessoasManha = sorteioCoffeeMakers.organizarPessoasSorteadasPorTurno("manha");
  let pessoasTarde = sorteioCoffeeMakers.organizarPessoasSorteadasPorTurno("tarde");

  for(let i=0; i<5; i++){
    let pessoaManha = pessoasManha[i];
    let pessoaTarde = pessoasTarde[i];

    sorteioCoffeeMakers.$listaCoffeMakers.append("<tr><th>" + sorteioCoffeeMakers.diasSemana[i] + "</th>  <td>" + pessoaManha.nome + "</td>  <td>" + pessoaTarde.nome + "</td></tr>");
  }

}
