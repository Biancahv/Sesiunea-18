// < ES6
let name = 'Bianca';
let location = 'Timisoara';

let message = 'Salut, sunt ' + name + ' din ' + location + '.';

console.log(message);

// > ES6
let newMessage = `Salut, sunt ${name} din ${location})`;

//<ES6
let address = {
    city: 'Timisoara',
    street: 'strada Mare',
    number: 10,
};

// let city = address.city;
// let street = address.street;
// let number = address.number;

// if (city ==='Timisoara') {
//     console.log('Sunt din Timisoara');
// }

// const {city, street, number} = address;

//ES9
// const {myTown: city, myStreet: street, number} = address;

// console.log(city, Street, number);

// ES9
const animals = ['caine', 'pisica'];
// const dog = animals[0];
// const cat = animals[1];

// > ES6
const [dog, cat] = animals;
console.log(dog, cat);

// <ES6
const object1 = {
    masa: 'ikea',
    dulap: 'Ikea',
};
const object2 = {
    casa: 'Dedeman',
    oglinda: 'Brico Store',
};

const mobilier = Object.assign({}, object1, object2);

console.log(mobilier);

const mobilier2 = { ...object1, ...object2 };
console.log(mobilier2);

const anim1 = ['caine', 'pisica'];
const anim2 = ['vaca', 'porc'];

// const anim3 = anim1.concat(anim2);
// console.log(anim3);

// >ES6
const anim3 = [...anim1, ...anim2];
console.log(anim3);

// const myObj = { name: 'Bianca'};
// const secondObj = {myObj};

// const address = {
//     street: 'Principala',
//     number: '1',
// }

// const student = {
//     name: 'Bianca',
//     address
// }

