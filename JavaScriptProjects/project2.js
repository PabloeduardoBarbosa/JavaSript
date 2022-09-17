const age = 12; 

age >= 18 ? console.log("I like to drink wine") : 
console.log("I like to drink water");

//second way: 

const drink = age >= 18 'I like to drink wine 🍷' : 'I like to dink water 🧺'

//third way: 

const age = 18; 

let drink; 

if(age >= 18){
drink = 'I like to drink wine'; 
}else{
drink = 'I like to drink wine, but I cannot';
}

console.log(drink);

//another simple example: 

const age = 12; 

age >= 18 ? console.log("I like to drink wine") : 
console.log("I like to drink water");