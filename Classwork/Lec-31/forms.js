//Restricting the form default behaviour using event called event.preventDefault()
var form=document.querySelector("form");
form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log("Form submitted");
});

//getting input data in our console
var form=document.querySelector("form");
form.addEventListener('submit',function(e){
    let inp=document.querySelector("input");
    console.log(inp.value);
    e.preventDefault();
});

//passing data into paragraph
var form=document.querySelector("form");
form.addEventListener('submit',function(e){
    let inp=document.querySelector("input");
    console.log(inp.value);
    let p=document.querySelector("p");
    p.innerText=inp.value;
    e.preventDefault();
});