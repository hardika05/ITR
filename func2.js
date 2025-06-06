function greet(name='Guest'){
    return `Hello,${name}!`;
}
console.log(greet());
function greet2(name,callback){
    console.log("Hi "+name);
    callback();
}
function sayBye(){
    console.log("GoodBye!");
}
greet("Hardika",sayBye);