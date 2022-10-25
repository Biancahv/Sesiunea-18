let myCNP = '1234567890';

console.log(myCNP[4]);

console.log(myCNP.length);
console.log(myCNP[myCNP.length-1]);

console.log('substring:' + myCNP.substring(3, 6))

let includesFive = myCNP.includes('234');
console.log(includesFive);

// let brandList = 'Dacia BMW Audi Mercedes, Porsche';
// console.log(brandList.includes('Porsche'));


let sentece = 'Lasa-ma papa la mare';
sentece = sentece.replace('mare', 'munte');
console.log(sentece);

let brandList = 'Dacia, BMW,Mercedes, Porsche, Audi';

let brands = brandList.split(',');
console.log(brands);



const func = () => {}

function func() {
    Object.assign();
}
