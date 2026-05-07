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
console.log(numbers.toSorted((a,b) => a - b)); // ordena o array em ordem crescente
console.log(numbers.toSorted((a,b) => b - a)); // ordena o array em ordem decrescente
// maior valor
// menor valor
console.log(numbers.toSorted((a,b) => a - b)[0]); // menor valor
console.log(numbers.toSorted((a,b) => b - a)[0]); // maior valor