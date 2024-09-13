//Object stores collection of data

//Object can store complex data but array can't and object can be accessed using key whereas array can be accessed using index

//Object can be created using these two methods:
//1.Constructor=Pre defined function Object()
//2.Literals={key:value} eg:{name:"Raman"}

//1.Constructor:
const obj=new Object();
obj.name="Raman";
console.log(obj);  //{name:'Raman'}
console.log(typeof obj); //Object

//2.Literals
const users={
    name:"Raman",
    age:19,
    'full name':"Ramanjot Kaur",
    Subject:'FEE',
    CGPA:'9.2'
}
console.log(users); //{name: 'Raman', age: 19,'full name': 'Ramanjot Kaur', Subject: 'FEE', CGPA: '9.2'}
console.log(typeof users); //Object

//Two methods to access:
//1.using this method after white space it will not print
console.log(users.age); //19
// console.log(users.full name); //Error
console.log(users('full name')); //It will see users as function

//2.Using this method after white space also it will print
console.log(users['age']); //19
console.log(users["full name"]) //Ramanjot Kaur


//Updating Object value
users.name="Sahira";
console.log(users); //{name: 'Sahira',age: 19,'full name': 'Ramanjot Kaur',Subject: 'FEE',CGPA: '9.2'}


// Object inside an Object
const users={
    user1:{
        name:"Raman",
        age:19
    },
    user2:{
        name:"Sahira",
        age:19,
        user21:{
            rollno:2199,
            subject:'FEE'
        }
    },
    user3:{
        name:"Shiwangi",
        age:19
    }
}
console.log(users.user1.name); //Raman
console.log(users.user2.user21.rollno); //2199


// Object inside a array
let arr=[arr1={name:'Raman',age:19},arr2={name:{name1:'Sahira'},age:19},arr3={name:'Shiwangi',age:19}];
console.log(arr[1].name.name1); //Sahira


//Merging 2 objects
let obj1={name1:"Raman",age1:19};
let obj2={name2:"Sahira",age2:19};
let obj3={...obj1,...obj2};
let obj4=Object.assign(obj1,obj2);
console.log(obj3); //{ name1: 'Raman', age1: 19, name2: 'Sahira', age2: 19 }
console.log(obj4); //obj3 and obj4 will give same output