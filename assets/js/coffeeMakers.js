var coffeeMakers = {};


$(function(){
  coffeeMakers.diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
  coffeeMakers.pessoasSorteadas = [];
  coffeeMakers.gerarLista();
});

coffeeMakers.gerarLista = function(){
  for(let i=0; i<10; i++){
    let numSorteado = Math.floor(Math.random() * coffeChallange.pessoas.length)
    let pessoaSorteada = JSON.parse(coffeChallange.pessoas[numSorteado]);

    coffeeMakers.pessoasSorteadas.push(pessoaSorteada);
  }
  for(var i=0; i<5; i++){
    $('#listPessoasSorteadas').append("<tr><th>" + coffeeMakers.diasSemana[i] + "</th>  <td>" + coffeeMakers.pessoasSorteadas[i].nome + "</td>  <td>Paul</td></tr>");
  }

}
