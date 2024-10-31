// task-1

// let number = +prompt("enter number");

// if (number > 0) {
//     let a = (number - number % 100) / 100;      
//     let b =  (number % 100-number % 10) / 10;
//     let c = number % 10;                    

//     let sum = a + b + c;
//     let prod = a * b * c;
//     let aver = sum / 3;

//     console.log(sum);
//     console.log(prod);
//     console.log(aver);
// } else {
//     console.log("Invalid number");
// }


// task-2

// let number = 65

// for(i=1; i<=number ;i++){
//     if (number%i===0) {
//         console.log(i)
//     }
// }

// task-3

// let number = 65

// let count=0;

// for(i=1; i<=number ;i++){
//     if (number%i===0) {
//         count++
//     }
// }
// console.log(count);

// task-4

// for (let i = 0; i <= 10; i++) {
//     console.log(i + "x" + i + "=" + i**2);
    
    
// }

// task-5

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }
// for (let i = 0; i <= 10; i++) {
//     console.log(i**2);
// }
// for (let i = 0; i <= 10; i++) {
//     console.log(i**3);
// }

// task-6

// let oddNumbers=0;
// let evenNumbers=0;

// for (let i = 1; i <=100; i++) {
//     if (i % 2 === 0) {
//         evenNumbers +=i
        
//     }
//     if (i%2===1) {
//         oddNumbers +=i
//     }
// }
// console.log(evenNumbers+oddNumbers);

// task-7-8

// let array =[4,2,7,9,3,12,46,32,19]

// let min = array[0];
// let max = array[0];
// let avar = 0;

// for (let i = 0; i < array.length; i++) {
//     if (max < array[i]) {
//         max=array[i]
        
//     }
    
// }

// console.log("max:" + max);

// for (let i = 0; i < array.length; i++) {
//     if (min > array[i]) {
//         min=array[i]
        
//     }
    
// }
// console.log("minimum :" + min);

// console.log(avar= (max+min)/2);

// task-9

// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your ownhands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;

// let newsWrordsSpaces = 0;

// for (let i = 0; i < sampleNews.length; i++) {
//     if (sampleNews[i]===" ") {
//         newsWrordsSpaces++
//     }
    
// }

// console.log(newsWrordsSpaces);

// task-10

// for (let number = 2; number <= 100; number++) {
//     isPrime = true;
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             isPrime = false;
//             break;
//         }
        
//     }
//     if (isPrime) {
//         console.log(number)     
//     }
// }

// task-11

// const fruits = ["alma", "banan", "qarpız", "portağal", "ananas", "nar"];

// let longestWord = "";

// for (let i = 0; i < fruits.length; i++) {
//     if (longestWord.length < fruits[i].length) {
//         longestWord = fruits[i]
//     }
    
// }

// console.log(longestWord);


// task-12

// const products = [
//     {
//       id: 1,
//       title: "Smartphone",
//       description: "A high-end smartphone with the latest features.",
//       price: 799.99,
//     },
//     {
//       id: 2,
//       title: "Laptop",
//       description: "Powerful laptop with a large screen and fast processor.",
//       price: 1299.99,
//     },
//     {
//       id: 3,
//       title: "Coffee Maker",
//       description: "An automatic coffee maker with a built-in grinder.",
//       price: 99.99,
//     },
//     {
//       id: 4,
//       title: "Headphones",
//       description: "Wireless over-ear headphones with noise-cancellation.",
//       price: 199.99,
//     },
//     {
//       id: 5,
//       title: "Smart TV",
//       description: "55-inch 4K Smart TV with streaming apps built-in.",
//       price: 699.99,
//     }
// ]

// let sumPrice= 0;

// for (let i = 0; i < products.length; i++) {
//     sumPrice +=products[i].price
    
// }

// console.log(sumPrice);


// Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin

let arrayNumbers=[34,23,52,53,75,123,543,87,1,31]

// let number = prompt("eded daxil et")

// for (let i = 0; i < arrayNumbers.length; i++) {
//     if (arrayNumbers[i] = number) {
//         alert("Bu eded var");
//         break
        
//     }
    
// }

// tələbələr array-ində tələbələrin ortalaması ən yüksək olanı, ortalaması 90-dan yuxarı olanları tapan proqram yazın

// const students = [
//     { name: "Ali", scores: [90, 85, 92] },
//     { name: "Mammal", scores: [75, 80, 85] },
//     { name: "Camil", scores: [90, 95, 85] },
//     { name: "Davud", scores: [100, 100, 100] }
//   ]; 

//   for (let i = 0; i < students.length; i++) {
    
//     let scoresTotal = 0
//     for (let j = 0; j < students[i].scores.length; j++) {
//         scoresTotal += students[i].scores[j]
        
//     }
//     let avarageScores = scoresTotal / students[i].scores.length
//     console.log(avarageScores);
    
//   }

// Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

// let word = ("ana")
  
// let wordReverse= "";

// for (let i = 0; i < word.length; i++) {
//     if (word[i] == word[word.length-1-i]) {
//         console.log("this word is polidrome");
//         break
        
        
//     }else{
//         console.log("this word is not polidorme");
//         break
        
//     }
    
// }


