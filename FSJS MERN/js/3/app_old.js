console.log("Hello I am from node js");

// // -Scopig in JS
// // -Datatypes in JS
// // -Functions in JS
// // -CallBacks in JS

// // var b = "Usama";
// // var b = "Usama2222";
// // let a = "Ali";
// // //  a = "Ali2222";
// // const c = "Ahmad";

// // let global;
// // function getData()
// // {
// //     var b = 1;
// //     global = b
// //  {
// //     console.log(b)
// //  }
 
// // }

// // getData()
// // console.log(global)


// // - Premitive Datatypes
// // - Non-Premitive Datatypes

// // String
// let name = "Ali";

// // Number 
// let id = 2;
// // Boolean
// let Booleans = true;

// // Symbol

// // BigInt
// // undefined
// let a  = undefined
// // null
 
// let b = null

// Object
const person = {
    userName:"name",
    id:"id",
    isActive:"Booleans",
    status:"a",
    notAvailable:"b"
}

// Object containtes
// Key 
// Value 
// Arrays

const arr = [1,2,4,5,'asd', person];


// function fetch (){
//     console.log(arr)
// }

const fetch = () => {
   console.log(arr)
}

let waterPump = false;
function turnOnMotor(callBack){
    waterPump = true
   if(typeof callBack ==="function"){
    callBack()
   }
}

turnOnMotor(()=>{console.log("Motor is on" , waterPump)});


// JS Functions 

// -map
// -forEach
// -reduce
// -find


// const array = [43,43,43,43,5,43,3434]
// const array = [
    //     'Amir' , 'Sameer', 'Bilal', 'Ali', 'Ahmad'
    // ]
    // console.log(array[0]);
    // console.log(array[1]);
    // console.log(array[2]);
    // console.log(array[3]);
    // console.log(array[4]);
    
    // for(let i =0; i< array.length; i++){
        //     console.log(i);console.log(array[i])
        // }
        
        // 
const array = [43,43,43,43,5,43,3434]
let multiplierBy2 = array.forEach((num)=>{return num * 2 });

console.log(array)
// console.log(multiplierBy2)
// array.map((num)=>{console.log(num *  2 )});



