//Scope
//1.Global scope:By default all values are globally scoped
let a=5;
var b=10;
const c=15;
function myfunc(){
    console.log(a);//5
    console.log(b);//10
    console.log(c);//15
}
myfunc();
console.log(a);//5
console.log(b);//10
console.log(c);//15

//2.Functional scope:Accessible Inside function only
let e=25;
function myfunc2(a,b){
    let e=a+b;
    console.log(e); //8
}
myfunc2(5,3);
console.log(e); // c can't be accessed outside function
console.log(e);//25

//3.Block scope:Let,cont are Accessible in block only {} but var can be accessed outside the block
// {
//   let a = 50;
//   const b = 30;
//   var c = 20;
//   //   console.log(a);
// }
//4.Lexical scope:Outer function values are accessible in inner function but converse is not possible
function outerFunc() {
    let x = 5;
    let y = 6;
    // console.log(a);
  
    function innerFunc() {
      // let a = 10;   //This is not possible
      console.log(x);
    }
    // console.log(a); //This is not possible
    innerFunc();
  }
  outerFunc();