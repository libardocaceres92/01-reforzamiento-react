import {heroes, heroes as misheroesfavoritos, OwnerEnum, type Hero} from "../data/heroes.data"

const getHeroById = (id: number):Hero|undefined => {

    const hero = heroes.find((hero) => {
        return hero.id === id;
    });

    //if(!hero){
    //    throw new Error(`No existe un heroe con el id ${id}`)
    //}

    return hero;
}

//console.log(getHeroById(3));



export const getHeroesByOwner = ( owner: OwnerEnum ): Hero[] => {
    
    const heroesByOwner = heroes.filter( hero => hero.owner === owner );

    return heroesByOwner;
};

const getValor = (valor1: number, valor2: number) : number => {
    return valor1 + valor2;  
};

const valor1 = 5;
const valor2 = 10;

console.log(`El valor de ${valor1} + ${valor2}: ${getValor(valor1, valor2)}`);