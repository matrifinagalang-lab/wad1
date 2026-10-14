console.log(" this is the title of the document: ${document.title}"); 
console.log(' this is the URL of the document: ${document.URL}');

const el = document.querySelector("title");
const bodyElement = document.body;

console.log (bodyElement);

const myHeader = document.querySelector("h1");

console.log (myHeader);

myHeader.style.backgroundColor = 'blue';

const newDiv = document.createElement('div');

newDiv.textContent = 'Hello World!';

console.log (newDiv);

document.body.append (newDiv);