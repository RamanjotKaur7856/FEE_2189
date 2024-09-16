//Functions:

//function declaration
function sum(a,b){ //parameters:a,b
    var c=a+b;
    console.log(c);
}

//function call
sum(3,5);//Argument:3,5   //8

function multiply(a,b=3){
    var c=a*b;
    console.log(c);
}
multiply(5); //NaN(Not a number) when there is no default argument
multiply(5); //15
multiply(5,5); //25
multiply(3); // NaN when a=5(default)