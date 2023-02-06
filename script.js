// Probleme Sesiunea 18


// Ex 1 
// prima cerinta
let badKids = "Lista copiilor pedepsiti este urmatoarea: Manuela, Daniel, Vicentiu";
console.log(badKids);

const isIncluded = badKids.includes("Daniel");
console.log(isIncluded);
// a doua cerinta cerinta
numeNou = badKids.replace("Daniel", "Gigel");
console.log(numeNou);
// Ex 2 
const testGrades = "9.80/6.85/9.10/7.80/8.20";
console.log(testGrades);

const testGradesArray = testGrades.split("/").map(Number);
console.log("Mediile adunate", testGradesArray);

const suma = (testGradesArray.reduce((firstValue, currentValue) =>
    firstValue + currentValue / testGradesArray.length * 100 / 100, 0));
console.log("Media aritmetica este:", suma);


// Ex 3
const props = {
        name: 'Minge fotbal Nike T90',
        price: 220,
        currency: "RON",
        brand: "Nike"
    }
    // 3.1




const nume = props.name;
console.log(nume);

const pret = props.price;
console.log(pret);

const valoare = props.currency;
console.log(valoare);

// 3.2
function afisareMesaj({ name, price }) {
    console.log(`Produsul ${name} are pretul de ${price}`);
}

afisareMesaj(props);

//  Ex 4
const additionalProps = {
    isAvailable: true
}

const newObject = (props, additionalProps);
console.log(newObject);


//  Ex 5 

const buletin = "5020818360018";

function cnpInfo(buletin) {
    const gender = buletin.substring(0, 1);
    const an = buletin.substring(1, 3);
    const luna = buletin.substring(3, 5);
    const zi = buletin.substring(5, 7);
    const judet = buletin.substring(7, 9);
    const nnn = buletin.substring(9, 12);
    const control = buletin.substring(12, 13);
    console.log(gender, an, zi, luna, judet, nnn, control);

}

cnpInfo(buletin);



// Cerinte Optionale 

// Ex 1

function multiply(string, ...args) {
    if (string === "Inmultire") {
        return args.reduce((firstValue, currentValue) => firstValue * currentValue, 1);
    } else if (string === "Adunare") {
        return args.reduce((firstValue, currentValue) => firstValue + currentValue, 0);
    } else if (string === "Scadere") {
        return args.reduce((firstValue, currentValue) => firstValue - currentValue);
    } else if (string === "Impartire") {
        return args.reduce((firstValue, currentValue) => firstValue / currentValue);
    }
}

console.log(multiply("Adunare", 5, 6, 8, 9));
console.log(multiply("Scadere", 3, 7, 8, 6));
console.log(multiply("Inmultire", 13, 29, 8, 11));
console.log(multiply("Imparitre", 11, 4, 8, 12));




// Ex 2
const values = [-1, 100, -500, 2, 3, 4, 5];
console.log(values);

console.log(Math.min(...values));
console.log(Math.max(...values));