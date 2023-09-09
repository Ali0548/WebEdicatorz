// -1 variables
// -2 functions

// String


//scoping in js
// var
// let
// const

// name = "Ali";
// name="Ahmad";
// name= "Usama";


var variable;
var variable1 = "DEF";


let variable12 = "auishdiusahd";
variable12 = "ghijk";
console.log("variable12====>", variable12)

const consTypevar = "abc"


const name = "";
const Mynumber = "03095486448";

// Number
const marks = 900.98;



// Boolean
const marrried = true;


// Objects
const details = {}



// Arrary
const details2 = [];

// const marrried = false;



const car = {
    engine: "2HGDF8",
    tires: "Panther",
    numberOfCar: 5879,
    isSold: false,
    owner: {
        name: "Ali",
        age: 23,
    }
}

// onClick 
// onMouseOver
function withoutparams() {
    console.log("hello web edutcatorz")
}

function printMyData(data, data2) {
    console.log(data, data2)
}

function printMyDataOptional(data = "") {
    console.log(data)
}

// function user(){

// }

const user = (data) => {
    console.log("DataFromArrowFunction====>", data)
}


user(car);
// printMyDataOptional(car)
// withoutparams()
const car2 = "Hello"
printMyData(car, car2)


// ()=>{  }

// - Call Back
// - Arrow Function
// - Promise

function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            const randomValue = 1;

            if (randomValue < 0.5) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error: Unable to fetch data!");
            }
        }, 1000);
    });
}

// Using Promise with then and catch
// fetchData()
//     .then((data) => {
//         console.log(data); // Success case
//     })
//     .catch((error) => {
//         console.error(error); // Error case
//     });


const fetchDataUsingAsyncAwait = async () => {
    try {
        const data = await fetchData();
        console.log(data); // Success case
    } catch (error) {
        console.log(error); // Error case
    }
};
fetchDataUsingAsyncAwait();






