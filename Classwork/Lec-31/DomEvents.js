var btn=document.querySelector("button");
btn.onclick=function(){
    console.log("Button was pressed");
};

//Onlick for multiple element
var btns=document.querySelectorAll("button");

for(btn of btns){
    btn.onclick=myfunc;
    btn.onmouseenter=function cursor(){
        alert("Your cursor was over me");
    }
}

function myfunc(){
    console.log("Button was pressed");
};

//Multiple events on one element(Event Listeners)
var btn=document.querySelector("button");
btn.onclick=function(){
    console.log("Button was pressed");
};

var btns=document.querySelectorAll("button");

for(btn of btns){
    btn.addEventListener('click',myfunc); //(Event,Callback Function),addEventListener is a object
    btn.addEventListener('click',hello);
}

function hello(){
    console.log("Hello");
}
function myfunc(){
    console.log("Button was pressed");
};

var para=document.querySelector("p");
para.addEventListener('mouseenter',paragraph)

function paragraph(){
    console.log("Paragraph");
}

