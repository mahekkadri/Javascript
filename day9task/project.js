// // /task-1
// let studentName ="Mahek";
// console.log (studentName);

// const collegeName = "sps";
// console.log(collegeName);

// var age ="18";
// console.log(age);

// // task-2

// let city = "Rajkot";
// console.log(city);
// city="Ahemdabad";
// console.log(city);

// // task-3

// const country = 'India';
// console.log(country);
// country ='Africa';
// console.log(country);

// task-4

// let a=25;
// let b=10;
// console.log ("Addition:",a+b);
// console.log ("Subtraction:",a-b);
// console.log ("Multiplication:",a*b);
// console.log ("Division:",a/b);
// console.log ("Modulus:",a%b);

// // task-5

// let count=5;
// count++
// console.log("Increment",count);

// count--
// console.log("Decrement",count);

// // task-6

// let mark=50;

// console.log(mark+= 50);
// console.log(mark-= 50);
// console.log(mark*= 50);
// console.log(mark/= 50);

// // task-7

// let salary = 10000;
// salary += 2000;

// console.log(salary);

// task-8

// let x = 20;
// let y = 30;

// console.log(x == y); 
// console.log(x != y); 
// console.log(x > y);  
// console.log(x < y);   
// console.log(x >= y);  
// console.log(x <= y);  

// // task-9

// let num1 = '10';
// let num2 = 10;

// console.log(num1 == num2);   // true
// console.log(num1 === num2);

// // task-10

// let age = 22;
// let hasLicense = true;
// let canDrive = age >= 18 && hasLicense;
// console.log(canDrive);

// // task-11

// let isWeekend = false;
// let isHoliday = true;
// let isOfficeClosed = isWeekend || isHoliday;
// console.log(isOfficeClosed);

// // task-12

// let isLoggedIn = false;
// console.log(!isLoggedIn);

// // task-13

// console.log("This is a normal message");
// console.warn("This is a warning message");
// console.error("This is an error message");

// // task-14

// console.time("test");
// for (let i = 1; i <= 100000; i++)
// console.timeEnd("test");

// // task-15

// let students = ["Mahek", "Dhara","Aastha"];
// console.table(students);

// task-16

// console.log("Before clear");
// console.clear();
// console.log("After clear");

// // // task-17

// let element = document.getElementById("heading");
// console.log(element);

// // task-18

// let paragraphs = document.getElementsByClassName("demo");
// console.log(paragraphs);

// // task-19

// let list = document.getElementsByTagName("li");
// console.log(list);

// task-20

let heading = document.querySelector("#title");
console.log(heading);

let paragraphs = document.querySelectorAll(".demo");
console.log(paragraphs);

heading.innerHTML = "Hello JS";
console.log(heading.innerHTML);

heading.innerText = "Hello JavaScript";
console.log(heading.innerText);

heading.textContent = "Welcome to JavaScript";
console.log(heading.textContent);