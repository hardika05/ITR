function greet2(name,callback){
    console.log("Hi "+name);
    callback();
}
function sayBye(){
    console.log("GoodBye!");
}
greet2("Hardika",sayBye);