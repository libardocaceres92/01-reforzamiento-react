const persona = {
    firstname: 'Libardo',
    lastname: 'Caceres',
    age: 33
}

const persona2 = structuredClone(persona);

persona.firstname = 'Andres';

persona.age = 32;

console.log(persona2, persona);