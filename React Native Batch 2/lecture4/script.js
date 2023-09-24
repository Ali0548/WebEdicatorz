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






