// let param =(data,err)=>{
// if(err){
//     console.log(err);
// }else{
//     console.log(data);
// }
// }

// let param =(x)=>{
//     return new Promise((res,rej)=>{
//         console.log(x);
//         let err= true;
//         if(!err){
//             res(5);
//         }else{
//             rej("error hai!");
//         }
//     })
// // if(rej){
// //     res
// }
// // }
// param("hello").then(data=>console.log(data)).catch(err=>console.log(err));


// let x = async function (req,res)=>{

// }

// const datas = [
//     { name: "Kunal", Age: 21 },
//     { name: "Rahul", Age: 22 },
//     { name: "Mukul", Age: 29 },
//     { name: "Rohit", Age: 22 },
//     { name: "Raj", Age: 65 }
// ]

// getData = (datas) => {
//     datas.forEach((data, index) => {
//         console.log(`${data.name}   ${index}`);
//     })
// }
// getData(datas);

// addData = (data, getData) => {
//     datas.push(data);
//     console.log("data inserted")
//     getData(datas)
// }



// addData = (data) => {
//     return new Promise((res, rej) => {
//         try {
//             datas.push(data);
//             console.log("data inserted")
//         }catch(err){
//             rej("error hai")
//         }
//         res();
//     })


// }
// addData({ name: "Kunal", Age: 21 }).then(getData(datas)).catch(err=>{console.log(err)});



// addData = async (data) => {
//     await datas.push(data);
//     console.log("data inserted")
//     getData(datas)
// }

// addData({ name: "Kunal", Age: 21 });

// sortData=(datas)=>{return }
// const filterAge = datas.filter(datas => datas.Age > 21)

// console.log(filterAge[0].name);

// const dummy = datas.map((datas, index) => {
//     return `${datas.name}`
// })

// console.log(dummy);

let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sorterd = datas.sort(function (d1, d2) {
//     if (d1.Age > d2.Age) { return 1 }
//     else{
//         return -1
//     }
// })

// const sorterd = datas.sort((d1,d2)=>d1.Age>d2.Age ? 1 : -1)
// console.log(sorterd);

// const sumdata = x.reduce((total,x)=>{return total+x},0)
// console.log(sumdata);

// class Dog{
//  constructor(name){
//     this.name = name
//     console.log(this.name)
//  }
//  bark(){
//     console.log(`${this.name} is barking`)
//  }

// }

// let Doggy1 = new Dog("Tommy");

// Doggy1.bark();

// console.log(Doggy1.__proto__)

// const person ={
//     name :"Kunal",
//     age:21
// }
// const me = Object.create(person)

// console.log(me.prototype);
// let c= 8;

// var n =()=>{
//     // h=20
//     const h =10;
//     var b =5;
//     console.log(h)
//     console.log(c)
// }
// n();
// console.log(b)

// let person = {
//     name:"xyz",
//     Age:21,
//     capital:()=>{return this.name.toUpperCase();},
//     get getName (){
//        return this.name.toUpperCase();
//     },
//     set setData(p){
//         this.name =p.toUpperCase();
//     }
// }
// console.log(person.getName);
// console.log(person.setData("Rohan"));
// person.name ="Rohan";
// console.log(person.getName);
// // person.capital()
// let m= (st)=>{
//     return st.toUpperCase();
// }

// console.log(m("kunal"))

// const person ={
//     name :"Kunal",
//     age:21
// }

// const {...rest} = person;
// console.log(rest);

// var sm =function(a){
//     console.log(a)
//     let v2 = 10;
//     return function(v3){
//         let sum = a+v2+v3;
//         console.log(sum);
//     }
// }

// var sm =function(a){
//     console.log(a)
//     let v2 = 10;
//     return {
//         getSumTwo:function(x,y){
//             return a+x+y;
//         },
//         getSumThree:function(x,y,z){
//             return a+x+y+z;
//         }
//     }
// }

// let store = sm(4);
// console.log(store.getSumTwo(10,20));

// let u1 ={
//     name:"kunal",
//     printDetails:function(){
//         console.log(this.name);
//     }
// }

// u1.printDetails();

// let u2 ={
//     name:"Varun"
// }
// u1.printDetails.call(u2)

let array = [1,2];
let [a,b=10,c] = array;
console.log(a);
console.log(b);
console.log(2**3);
console.log(2**3);
console.log(a);
console.log(b);
console.log(2**3);
console.log(2**3);
// const datas = [
//     { name: "Kunal", Age: 21 },
//     { name: "Rahul", Age: 22 },
//     { name: "Mukul", Age: 29 },
//     { name: "Rohit", Age: 22 },
//     { name: "Raj", Age: 65 }
// ]
// const datas = [
//     { name: "Kunal", Age: 21 },
//     { name: "Rahul", Age: 22 },
//     { name: "Mukul", Age: 29 },
//     { name: "Rohit", Age: 22 },
//     { name: "Raj", Age: 65 }
// ]