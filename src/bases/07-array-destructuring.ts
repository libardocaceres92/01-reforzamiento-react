const characterNames = ['Goku', 'Vegeta', 'Trunks'] ;

const [p1, p2, p3] = characterNames;

console.log( {p1} );
console.log( {p2} );
console.log( {p3} );


const [, , v3] = characterNames;

console.log( {variable3 : v3} );


const returnArrayFn = (): [string, number] => {
    return ['ABC', 123] ;
}

const [, numbers] = returnArrayFn();

console.log( numbers + 100 );