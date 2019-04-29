/*function showFirstMassage(text){
    alert(text);
}
showFirstMassage("Hellow world!");
*/

// function calc (a,b) {
//     return (a + b);
// }

let calc = (a,b) => a+b


console.log( calc(3,4));
console.log( calc(5,4));
console.log( calc(3,6));


function retVar(){
    let num = 50;
    return num;
}


let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
