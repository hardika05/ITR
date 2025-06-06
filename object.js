const person={
    name: "John",
    age: 30,
    isStudent: false,
    address:{
        street: "123 Main St",
        city: "Exampleville"
    },
    hobbies: ["Reading","Gardening","Cooking"],
    sayHello: function(){
        console.log("Hello!");
    }
};
console.log(person.name);
console.log(person.address.city);
console.log(person.hobbies[0]);
person.sayHello();