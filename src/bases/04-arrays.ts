const myArray:number[] = [1, 2, 3, 4];

myArray.push(5);

console.log('myArray ' + myArray);

for (const myNumber of myArray){
    console.log(myNumber + ' prueba');
}


const myArray2 = structuredClone(myArray);

myArray2.push(9);


console.log('myArray2 ' + myArray2);

console.log('La posicion 4 del myArray2 es = ' + myArray2.at(4));