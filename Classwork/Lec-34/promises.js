// promises are future events, and technically they are object 
// it has three states: Pending,Rejected,fulfiled
// promises are the objects which contains the value of innermost function or children function so that they will lose their importance
// by default promises are in pending state and change the state acc. to the requirement
// create promise

// let p=new Promise((resolve,reject)=>{
// resolve("Promise Working");
// });
// console.log(p);
// 1.2: promise accept 2 callbacks- resolve and reject:
// let like=true;
// let p= new Promise((resolve,reject)=>{
//   if(like){
//     resolve("yeah, she like you");
//   }
//   else{
//     reject("She doesn't like you");
//   }
// },2000);
// 2.1 consuming promises:then 
// prefered way is this
// the object is in pending state and when we use .then it will come out of the pending state
// p.then((value)=>{
//   console.log(Message: ${value});
// },(err)=>{
//   console.log(Message: ${err});
// })

// output: yeah, she like you beacuse like is true

// 2.2 Consuming Promises: then-catch
// p.then((value)=>{
//   console.log(Message: ${value});
// })
// .catch((err)=>{
//   console.log(Message: ${err});
// })

// 2. Promise Chaining: Promise inside another promise is Promise Chaining
// let p1=new Promise((resolve,reject)=>{
//   setTimeout(() => {
//       resolve("promise 1 resolved");
//   },2000);
// });
// p1.then((value)=>{
//   console.log(value);
//   let p2=new Promise((resolve,reject)=>{
//       setTimeout(() => {
//           resolve("promise 2 resolved");
//       }, 2000);
//   });
//   return p2;
// }).then((value)=>{
//   console.log("Done!!");
 
// }).then((value)=>{
//   console.log("ok now done!");
// });

// Promise inside a function:
// function MaggieLekarAao(){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       let dukanKhuliHai=true;
//       if(dukanKhuliHai){
//         resolve("Maggie Mil gayi")
//       }
//       else{
//         reject("Maggie Nahi mili")
//       }
//     },2000);
    
//   });
// }
// MaggieLekarAao()
// .then((value)=>{
//   console.log(value);
// })
// .catch((err)=>{
//   console.log(err);
// })



function downloadFile(url, xyz) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!url) {
                reject(" File download failed");
            } else if (xyz !== "mp4") {
                reject(" Only mp4 files are supported");
            } else {
                resolve(`File downloaded from ${url}`);
            }
        }, 2000);
    });
  }
  
  
  downloadFile("https://example.com/video.mp4", "mp4")
    .then((value) => {
        console.log(value);
    })
    .catch((err) => {
        console.log(err);
    });
  
  // downloadFile("", "mp4")
  //   .then((value) => {
  //       console.log(value);
  //   })
  //   .catch((err) => {
  //       console.log(err);
  //   });
  
  // downloadFile("https://example.com/video.avi", "avi")
  //   .then((value) => {
  //       console.log(value);
  //   })
  //   .catch((err) => {
  //       console.log(err);
  //   });