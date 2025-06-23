let itens = [
  { name: "rule", quantity: 1, price: 3 },
  { name: "ai sei la", quantity: 2, price: 5 },
  { name: "rule", quantity: 2, price: 6 },
];

let total = itens.reduce(
  (acumulador, valorAtual) =>
    acumulador + valorAtual.price * valorAtual.quantity,
  0
);

console.log(total);

const names = ["Danie", "MAria", "MArta", "Juca", "joao", "jessica"];

const namesQuantidade = names.reduce((namesObjeto, namesarr) => {
  let firstLetter = namesarr[0].toLowerCase();

  if (namesObjeto[firstLetter]) {
    namesObjeto[firstLetter]++;
  } else {
    namesObjeto[firstLetter] = 1;
  }
  return namesObjeto;
}, {}); //inicia um objeto vazio

console.log(namesQuantidade);

const pessoas = [
  { nome: "daniel", idade: 28 },
  { nome: "marta", idade: 29 },
  { nome: "leticia", idade: 29 },
];

const resultado = pessoas.reduce ((nomeObj, nomesDoArry) => {

    if(nomeObj[nomesDoArry.idade]){
        nomeObj[nomesDoArry.idade] ++
        nomeObj[nomesDoArry.nome]
    }
    else{
        nomeObj[nomesDoArry.idade] = 1;
        nomeObj[nomesDoArry.nome]

    }
    return nomeObj;
}, {})

console.log(resultado)
