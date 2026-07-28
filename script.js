console.log('JavaScript is connected');

//let attempts = 1;
//attempts = attempts + 1;

//console.log(attempts);

//this is an error because constant, it cannot be reaasigned
/*const courseName = "Web Development";
const passingScore = 75;
passingScore = 80;

console.log(passingScore);*/

/*const name =  'Maria Trifina';
const age = 24;
const isPassed = true;
let result;

const selected = null;*/

//CONDITIONAL STATEMENTS: SCORE ASSESSMENT
/*const score = 82;
if (score >=90){
    console.log("Excelent");
} else if (score >= 75) {
console.log("Passed"); //THIS RUNS!! 
} else {
    console.log("Needs improvement");
}*/

/*function greetName(name){
    console.log('Hello ${name}');
}

greetName(name);*/

/*for (let i = 0; i <=10; i++){
        console.log(i);
}*/ 

//LOOPING 
/*const topics = ["Git", "Variables", "Functions"];
for (const topic of topics) {
console. log (topic);
}*/

/*
let score = 0;

const button = document.querySelector('#btn');
const display = document.getElementById('display');

button.addEventListener('click', () => { 
    score++;
    display.textContent = 'Score: ${score}';
}) */

let score = 0;

const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const resetBtn = document.querySelector('#reset');
const display = document.getElementById('display');

incrementBtn.addEventListener('click', () => { 
    score++;
    display.textContent = `Score: ${score}`;
})

decrementBtn.addEventListener('click', () => { 
    score--;
    display.textContent = `Score: ${score}`;
})

resetBtn.addEventListener('click', () => { 
    score = 0;
    display.textContent = `Score: ${score}`;
})
