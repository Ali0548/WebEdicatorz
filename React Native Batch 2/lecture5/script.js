// Variables

// -const
// -let
// -var

// var userName = "ali";
// var userName = null
// console.log(typeof userName)

// let userName = "ali" ;
// userName = "ahmad" ;
// const userName = "ali";


// Datatypes

// There are two types in JS
// -1 Premitive --> 7
// -2 Non-Premitive --> 3-5

// String
// Symbol
// Boolean
// BigInt
// Number
// undefined
// null


// Array
// Object

// - CallBack
// - Promise
// - Aync await
// - Operators * Arthematic && Logical
// - Conditional Statements


function createDataInTables() {
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    document.getElementById("enterData").innerHTML += `
    <tr>
    <td>${name}</td>
    <td>${email}</td>
    <td>${password}</td>
  </tr>    
    `
    console.log(name, email, password)
}
let a = 3
a = a  * 3
b = 9
if(a === 9 && b ===9){
  console.log("Is me se kuch hai")
} else {
  console.log("Kuch ni mila")
}

// const ans = (a==9?27:0)
// console.log(ans)
// +, -, *, / 
// && ||
console.log(a)

// function turnOnTheMotor(callback){
//   setTimeout(() => {
//     a = a + 1;
//     callback()
//   }, 2000);
// }



function turnOnTheMotor(){
 return new Promise((resolve)=>{
  setTimeout(() => {
   console.log("Hello i am from motor")
    resolve()
  }, 2000);
 })
}
 
function turnMtoon(){
  console.log("Hello my motor is turned on")
}

// turnOnTheMotor(
//   ()=>{console.log("motor is finally working.....", a)}
// )


async function callMymotor(){
  await turnOnTheMotor()
}

(async()=>{
  await callMymotor();
})()











