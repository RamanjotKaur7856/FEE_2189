//Create element uing js
var h1 = document.createElement('h1');
console.dir(h1);
h1.innerText="DOM Elements";
var body=document.querySelector("body");
body.appendChild(h1);


var btn=document.createElement('button');
btn.innerText="Click Me";
body.appendChild(btn);

h1.append(" Learning in JS");

body.prepend(h1);
// body.remove();