// var b = "Usama";
// var b = "Usama2222";
// let a = "Ali";
// //  a = "Ali2222";
// const c = "Ahmad";


let a=1

function getData(){
    // a++;
    // a= a+ 1;
    // a  +=  1;
  
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    document.getElementById('insertData').innerHTML += `
    <tr>
        <td>${name}</td>
        <td>${email}</td>
        <td>${password}</td>
    </tr>
    `
    console.log(name + email + password);
}



