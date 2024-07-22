"use strict";
// ***************************************setTimeout()**************************************************
Object.defineProperty(exports, "__esModule", { value: true });
// console.log('first');
//           // call back function
// setTimeout(() => {
//     console.log("second");
// }, 300)  // always write in mili second
// console.log("third");
// output:
// first
// third
// second   // after three second
// ****************************************************************************************************
// console.log('first');
//           // call back function
// setTimeout(() => {
//     console.log("second");
// }, 0) 
// console.log("third");
// output:
// first
// third
// second // parallel mai add ho jata hai
// ****************************************** call backs ********************************************
// let placeOrder = () => {
//     setTimeout(() =>{
//         return "order is placed"
//     },2000)
// }
// let order = placeOrder();
// console.log(order);
//  output :
// undefined
// return agar use karay gai to pehlai to code chal jaye ga
// **********************************************************************************************
// let placeOrder = () => {
//     setTimeout(() =>{
// console.log("order is placed");
//     },2000)
// }
// let order = placeOrder();
// console.log(order);
// output:
// undefined
// order is palced // pehlai function cha kai khatam ho gaya ,
// phir settimeout conloe mai print karwa raha hai 2 sec baad
// ***********************************************************************************************
// let placeOrder = (preparePizzacb: () => void) => {   //function ki type define karnai ka tariqa hai
//     setTimeout(() =>{
// console.log("order is placed");
// preparePizzacb()
//     },2000)
// }
// let preparePizza = () =>{
//     setTimeout(()=>{console.log("pizza is prepare");
//     },5000)
// }
//  placeOrder(preparePizza);
//  *****************************************promises*******************************************
// let placeOrder = () =>{
//     return new Promise((resolve) =>{
//         setTimeout(()=>{
//                 console.log("order is placed");
//                 resolve("")
//         },3000)
//     })
// }
// let preparePizza = () =>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("pizza is prepared");
//             resolve("")
//         },5000)
//     })
// }
// let deliverPizza =()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("deliver the pizza");
//             resolve("")
//         },3000)
//     })
// }
// let eatPizza =()=>{
//         setTimeout(()=>{
//             console.log("eat the pizza");
//         },3000)
// }
// placeOrder().then(preparePizza).then(deliverPizza).then(eatPizza)
// ************************************************************************************************
// let placeOrder = () =>{
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             let isopen = false
//             if(isopen){
//                 console.log("order is placed");
//                 resolve("")
//             }else{
//                 reject("close")
//             }
//         },3000)
//     })
// }
// let preparePizza = () =>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("pizza is prepared");
//             resolve("")
//         },5000)
//     })
// }
// placeOrder().then(preparePizza).catch((err)=>{
//     console.log(err);
//     console.log("shop is closed");
// })
// // output:
// // close
// // shop is closed
// ****************************************************************************************************
// let placeOrder = () =>{
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             let isopen = true
//             if(isopen){
//                 console.log("order is placed");
//                 resolve("")
//             }else{
//                 reject("close")
//             }
//         },3000)
//     })
// }
// let preparePizza = () =>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("pizza is prepared");
//             resolve("")
//         },5000)
//     })
// }
// placeOrder().then(preparePizza).catch(()=>{
//     console.log("shop is closed");
// })
// output:
// order is placed
// pizza is prepared
// **********************************await async******************************************************
let placeOrder = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isopen = true;
            if (isopen) {
                console.log("order is placed");
                resolve("");
            }
            else {
                reject("close");
            }
        }, 3000);
    });
};
let preparePizza = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("pizza is prepared");
            resolve("");
        }, 5000);
    });
};
let doTask = async () => {
    await placeOrder();
    await preparePizza();
};
doTask();
