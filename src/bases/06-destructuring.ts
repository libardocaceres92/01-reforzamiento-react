const persona = {
    name: 'Libardo',
    age: 33,
    key: 'Ironman'
}

const { name: ironmanName, age: ironmanAge, key } = persona;

//const name = persona.name;
//const age = persona.age;
//const key = persona.key;

console.log({ironmanName, ironmanAge, key});

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = ({key , name, age, rank}: Hero) => {
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank: rank,
    };
};

const context = useContext( persona );

console.log(context);



const { keyName, user: {name, age}, rank } = useContext( persona );

console.log("El otro es " + keyName + ", " + name + ", " + age + ", " + rank);






const { keyName: keyName2, user: user2, rank: rank2 } = useContext( persona );


const { name: name2, age: age2 } = user2;

console.log("El otro es " + keyName2 + ", " + name2 + ", " + age2 + ", " + rank2);