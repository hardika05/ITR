// const greet= function(name){
//     return `Hello , ${name}`;
// };
// console.log(greet('Bob'));
function greet1(name='Guest'){
    return `Hello, ${name}`;
}
console.log(greet1());
// function sum(...numbers){
//     return numbers.reduce((total,num)=>total + num,0);
// }
// console.log(sum(1,2,3));
// function add(a,b){
//     return a+b;
// }
// console.log(add(2,3));
function greet1(name,callback){
    console.log("Hi"+name);
    callback();
}
function sayBye(){
    console.log("GoodBye!");
}
greet("Prathamesh",sayBye);