// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie três novos arrays, chamados nomeDoArrayOriginalCopia, e faça o que se pede abaixo nas cópias dos arrays originais;
const arrayN = [19, 3, 1983, 6, 11, 1990];
const arrayS = ["Lidia", "Junior", "Raito", "Rimuru"];
const arrayB = [7, "Lidia", 10%2===0];

const arrayNCopia = arrayN.slice()
const arraySCopia = arrayS.slice()
const arrayBCopia = arrayB.slice()

// Adicione um item number ao início do primeiro array. Utilize console.log() para exibir o original e a cópia;
console.log("Adicione um number ao início:");
arrayNCopia.unshift(777);
console.log("Array original: ",arrayN);
console.log("Array alterado: ",arrayNCopia);

// Remova o último item do segundo array. Utilize console.log() para exibir o original e a cópia;
console.log("\nRemova o último item:");
arraySCopia.pop();
console.log("Array original: ",arrayS);
console.log("Array alterado: ",arraySCopia);

// Remova o segundo item do terceiro array. Utilize console.log() para exibir o original e a cópia;
console.log("\nRemova o segundo item:");
arrayBCopia.splice(1, 1);
console.log("Array original: ",arrayB);
console.log("Array alterado: ",arrayBCopia);
