// a
/*
a
a
a
*/

console.log("lanelus");

// variaveis
let lanelus = "slassesles";
let nu = 28.4;
let isGiria = true;

const DNAS = 4;

let x = "5" + 5;
let y = "asdasd" + 123;
console.log(x);
console.log(y);
console.log(DNAS);

console.log(typeof lanelus);
console.log(nu ** 2);
console.log(typeof isGiria);

console.log("5" == 5);
console.log("5" == "5");
console.log("asd" == "5");
console.log("5" === 5);

console.log(++x);

let isExpression = (true && 5 + 2 * 3 < 10) || false;
console.log(isExpression);

// if (condition) {
// // se for true
// } else {
// // se for false
// }

let giria = `gi'ri'a
lane"lu"s/
sl\\\\\\assesles`;

console.log(giria);

// for (let i=0;i<array.length;i++){
//     const element = array[i];
// }

let girias = ["lanelus", "laele", "slasles", "sulenal"];
console.log(girias.length);
for (let i = 0; i < girias.length; i++) {
  console.log(girias[i]);
}

girias.push("AIDENTO");
console.log(girias);

console.log(girias.pop()); // remove e retorna(printa) o ultimo elemento do array
console.log(girias);

console.log(girias.shift()); // remove e retorna(printa) o primeiro elemento do array
console.log(girias);

girias.unshift("Lanelus"); // adiciona um elemento no inicio do array
console.log(girias);

girias.splice(2, 1, "Lanelus", "Slasles");
// argumento 1 posicao do bixo pra colocar
// argumento 2 quantos elementos vai ser removido
// argumento 3 o que vai ser adicionado
console.log(girias);

girias.sort(); // ordena o array em ordem alfabetica
console.log(girias);

girias.reverse(); // inverte a ordem do array
console.log(girias);

let sortedGirias = girias.toSorted(); // retorna um novo array ordenado sem modificar o original
// toReversed, toSpliced, toSorted

const numbers = [45, 4, 9, 16, 25];
// let numbers2=[];
// for (let i = 0; i < numbers.length; i++) {
//   numbers2.push(numbers[i] * 2);
// }
// console.log(numbers2);

// const numbersMap = numbers.map();  retorna um novo array com o resultado da função aplicada a cada elemento do array original
// function myFunction(value, index, array){
// }
console.log(numbers.map((number) => number * 2));
console.log(numbers.toSorted((a, b) => a - b)); // ordena o array em ordem crescente
console.log(numbers.toSorted((a, b) => b - a)); // ordena o array em ordem decrescente
// maior valor
// menor valor
console.log(numbers.toSorted((a, b) => a - b)[0]); // menor valor
console.log(numbers.toSorted((a, b) => b - a)[0]); // maior valor

// spread
console.log([...girias, ...numbers, "lanelus2"]);

const giriaComL = [];
for (let i = 0; i < girias.length; i++) {
  const giria = girias[i];
  if (giria[0].toLowerCase() === "l") {
    giriaComL.push(giria);
  }
}
console.log(giriaComL);

const criador = {
  nome: "Iohan",
  criacao: "Lanelus",
  aura: 983989388892,
};

console.log(criador.criacao);
console.log(Object.keys(criador));
console.log(Object.values(criador));

const pessoa = { ...criador, especie: "humana" };
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));

console.log(pessoa);

const { nome, especie } = pessoa;
console.log(nome, especie);

function Product(name, sto, ram, price, qty, category) {
  this.name = name;
  this.sto = sto;
  this.ram = ram;
  this.price = price;
  this.qty = qty;
  this.category = category;
}

const p1 = new Product("iPhone", 256, 16, 5000, 10, "Celular");
const p2 = new Product("iPad", 512, 16, 8000, 20, "Tablet");
const p3 = new Product("Macbook", 1024, 24, 15000, 30, "Notebook");
const p4 = new Product("iPhone Pro Max", 256, 16, 7000, 15, "Celular");
const p5 = new Product("iPad Pro", 512, 16, 10000, 25, "Tablet");
const p6 = new Product("Macbook Pro", 1024, 24, 25000, 35, "Notebook");

const estoque = [
  { ...p1 },
  { ...p2 },
  { ...p3 },
  { ...p4 },
  { ...p5 },
  { ...p6 },
];
console.log(estoque);

// DESAFIO 1

//   a) Valor total de todos os produtos em estoque
let valorTotal =
  p1.price * p1.qty +
  p2.price * p2.qty +
  p3.price * p3.qty +
  p4.price * p4.qty +
  p5.price * p5.qty +
  p6.price * p6.qty;
// b) Ordene os produtos por nome (crescente/descrescente)
let pOrdenadosNomeCrescente = estoque.toSorted(
  (a, b) => (a.name > b.name) - (a.name < b.name),
);
let pOrdenadosNomeDecrescente = estoque.toSorted(
  (a, b) => (a.name < b.name) - (a.name > b.name),
);
console.log(pOrdenadosNomeCrescente);
console.log(pOrdenadosNomeDecrescente);
// c) Ordene os produtos por preço (crescente/descrescente)
let pOrdenadosPrecoCrescente = estoque.toSorted((a, b) => a.price - b.price);
let pOrdenadosPrecoDecrescente = estoque.toSorted((a, b) => b.price - a.price);

// d) Filtre produtos de acordo uma categoria
let pFiltradoCategoria = estoque.filter((p) => p.category === "Celular");
console.log(pFiltradoCategoria);
