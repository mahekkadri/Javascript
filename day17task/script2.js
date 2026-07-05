// // Recursion Function
// //  1. Write a recursive function to generate Armstrong Number series up to n terms.

// function armstrong(n, num = 1, count = 0)
// {
//     if(count == n)
//     {
//         return;
//     }

//     let temp = num;
//     let sum = 0;

//     while(temp > 0)
//     {
//         let digit = temp % 10;
//         sum = sum + (digit * digit * digit);
//         temp = Math.floor(temp / 10);
//     }

//     if(sum == num)
//     {
//         console.log(num);
//         count++;
//     }

//     armstrong(n, num + 1, count);
// }

// armstrong(5);


// Arrow Function
//  2. Create a tax calculator with slab logic via functions.


// let taxCalculator = (income) => {

//     let tax;

//     if(income <= 250000)
//     {
//         tax = 0;
//     }
//     else if(income <= 500000)
//     {
//         tax = income * 5 / 100;
//     }
//     else if(income <= 1000000)
//     {
//         tax = income * 20 / 100;
//     }
//     else
//     {
//         tax = income * 30 / 100;
//     }

//     console.log("Tax = " + tax);
// }

// taxCalculator(600000);


//Expression Function 
// 1. Build a modular billing system using functions
// let billing = function(product, qty, price){

//     let total = qty * price;

//     console.log("Product : " + product);
//     console.log("Total Bill : " + total);
// }

// billing("Pen", 5, 10);


// 2.check a perfect Number
// let perfectNumber = function(num){

//     let sum = 0;

//     for(let i = 1; i < num; i++){
//         if(num % i == 0){
//             sum += i;
//         }
//     }

//     if(sum == num){
//         console.log("Perfect Number");
//     }
//     else{
//         console.log("Not Perfect Number");
//     }
// }

// perfectNumber(6);

//IIFE Function : 
// 1. Write a function to validate a 6-digit OTP. give me a code

(function(){

    let otp = prompt("Enter OTP:");

    if(otp.length == 6 && !isNaN(otp)){
        console.log("Valid OTP");
    }
    else{
        console.log("Invalid OTP");
    }

})();
