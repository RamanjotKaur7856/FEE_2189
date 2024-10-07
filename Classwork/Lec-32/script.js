//Asynchronous
console.log("Started Execution");
function myfunc(){
    console.log("This is a function");
}
myfunc();
console.log("Execution Ends Here");


//Callback function
function myfunc(){
    console.log("My function");
}
function hello(call){
    console.log("This is a hello function");
    call();
}
hello(myfunc); //This is a hello function My function

//Synchronous
//JS is Asynchronous programming langauge but JS execution is Synchronous(step by step)
console.log("Execution started");
for(let i=0;i<1000;i++){
    console.log("For loop running");
}
console.log("Execution ends");

//SetTimeout:This function is executed after a specified delay
//SetTimeout and SetInterval is defined in Web API not in JS

setTimeout(()=>{
    console.log("SetTimeout function");
},2000);
function first(){
    console.log("This is a first function");
}
first();


console.log("Execution started");
setTimeout(()=>{
    console.log("SetTimeout function");
},2000);
for(let i=0;i<1000;i++){
    console.log("Loop is running");
}
console.log("Execution ends");
//Output:Execution started Loop is running,Execution ends,SetTimeout function

console.log("Start");
var a=setTimeout(()=>{
    console.log("SetTimeout working");
},1000);
clearTimeout(a);
console.log("Ends"); //Start Ends

//SetInterval
console.log("Start");
var a=setInterval(()=>{
    console.log("SetInterval working");
});
clearInterval(a);
console.log("Ends"); //Start Ends(Setinterval doesnot stop until we stop it ,so we use clearInterval)


let count=0;
const interval=setInterval(()=>{
    count++
    console.log(
        `Message:${count}`
    );
    if(count>=3){
        clearInterval(interval);
        console.log("Ends");
    }
}); 
//Output:Message:1 Message:2 Message:3 Ends