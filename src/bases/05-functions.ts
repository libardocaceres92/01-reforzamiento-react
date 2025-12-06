function greet(name:string):string{
    return `Hola ${name}`
}

const message = greet('Libardo'); 
console.log(message);




const greet2 = (name:string):string => {
    return `Hola2 ${name}`
}

const message2 = greet2('Vegeta');

console.log(message2);




const greet3 = (name:string):string => `Hola ${name}`;

const message3 = greet3('Libardo mensaje 3'); 
console.log(message3);






function getUser(){
    return {
            uid: 'ABC-123',
            username: 'Libardo Andres',
    };
}

const user = getUser();

console.log('El uid del user es =' + user.uid + ' y el username es = ' + user.username);





const getUser2 = () => {
    return {
            uid: '12345',
            username: 'Andres',
    };    
}

const user2 = getUser2();

console.log('El uid del user2 es =' + user2.uid + ' y el username es = ' + user2.username);




interface User {
    uid:string,
    username:string
}



const getUser3 = ():User=> ({
            uid: '12345',
            username: 'Andres',
    });    

const user3 = getUser3();

console.log('El uid del user3 es =' + user3.uid + ' y el username es = ' + user3.username);







function invocename(id: number):string{
    return `factura_compra_${id}.pdf ${2+3}`;
}

const nombre_factura= invocename(54321);

console.log(nombre_factura);


function suma(num1:number , num2:number):number{
    const resultado = num1 + num2;
    return resultado;
}

const num1:number = 7;
const num2:number = 6;

console.log(`La suma de ${num1} + ${num2} = ` + suma(num1, num2));





const myNumbers:number[] = [1,2,3,4,5];

myNumbers.forEach(function (value){
    console.log({value});}
);


myNumbers.forEach( (value) => {
    console.log({value});}
);

myNumbers.forEach((value, index, arr) => {
    console.log(value, index, arr);
});