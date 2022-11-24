// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando console.log():
const arrayN = [19, 3, 1983, 6, 11, 1990];
const arrayS = ["Lidia", "Junior", "Raito", "Rimuru"];
const arrayB = [7, "Lidia", 10%2===0];

// Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(`Primeiro array: [${arrayN}], tem ${arrayN.length} itens.`);
console.log(`Segundo array: [${arrayS}], tem ${arrayS.length} itens.`);
console.log(`Terceiro array: [${arrayB}], tem ${arrayB.length} itens.`);


// Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(`\nPrimeiro item do primeiro array: ${arrayN[0]}\n
Segundo item do segundo array: ${arrayS[1]}\n
Terceiro item do terceiro array: ${arrayB[2]}\n
`);

// Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false.
console.log(`\nTem 6 no primeiro array? ${arrayN.includes(6)}\n
Tem 7 no terceiro array? ${arrayB.includes(6)}
`);


