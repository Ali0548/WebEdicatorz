// map()
// foreach()
// bind()
// find()
// includes()
// filter()
// reduce()
// sort()
// .push()

const fruits  = [
    'apple', 'orange', 'Mango', 'Banana',
    'adsfa', 'orangasdfae', 'Mango', 'Banana',
    'apdfasfdasple', 'oranasdfasge', 'Mango', 'Banana',
    'appasfasfle', 'orasafdasdfnge', 'Mango', 'Banana',
    'apasfasple', 'fasfasdfddasorange', 'Manasdfasgo', 'Bansafasfasfsaana',
    'apple', 'orange', 'Mango', 'Banana',
    'apple', 'orange', 'Mango', 'Banana',
    'apple', 'orange', 'Mango', 'Banana',
    'apple', 'orange', 'Mango', 'Banana',

];


// const NumbersArr = [
//     1,2,3,34,4,86,4,68
// ]
// // let updateAry = NumbersArr.map((item,index)=> item * 2);
// let updateAry = NumbersArr.map((item,index)=>{

//     return  item * 2
// });
// console.log(updateAry)
// let updateAry = NumbersArr.forEach((item,index)=>{
//     console.log(item * 2);
//    return  item * 2
// });
// console.log(updateAry)




// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])
// let updateAry = [];

// for(let i = 0; i<NumbersArr.length;i++){
//     // console.log(i);
//     // console.log(fruits.length);
//     console.log(NumbersArr[i] * 2)
//     updateAry.push(NumbersArr[i] * 2)
// }

// console.log(updateAry)





// const users = [
//     {
//         id:1,
//         name:"Sohail"
//     },
//     {
//         id:2,
//         name:"Atta Ullah"
//     },
// ]

// const requiredOne = users.find((search)=>search.id === 1);
// const requiredDruit = fruits.includes("fasfasdfasdoifhioudsahfddasorange");
// console.log(requiredDruit)
// console.log(requiredOne)


const NumbersArr = [
    1,2,3,34,4,86,4,68
]

// const requiredDivideBy2 = NumbersArr.filter((NumbersArr)=> NumbersArr % 2===0);
// console.log(requiredDivideBy2)

const requiredNumber = fruits.reduce((accumlator, currentValue)=>accumlator + currentValue);
console.log(requiredNumber)
