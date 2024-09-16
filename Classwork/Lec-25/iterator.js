//Iterator

//It is a pre defined Object in JS in which there is iterator prototype[next(),value]
//Iterator class [Symbol.iterator]() is a method that returns the iterator object itself

//Two methods:1.ForOf returns values    2.ForIn returns keys
//array,string,map,set works like iterators

let arr=[1,2,3,4,5];
console.log(arr[Symbol.iterator]); //[Function: values]

//ForOf:
for(i of arr){
    console.log(i);  //1 2 3 4 5
    console.log(arr[i]); //2 3 4 5 undefined
}

//ForIn:
let obj={name:'raman'};
for(i in obj){
    console.log(obj[Symbol.iterator]) //Undefined
    console.log(i); //name
}
