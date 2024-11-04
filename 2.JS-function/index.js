// let number_a = prompt("eded daxil et")
// let number_b = prompt("quvvet daxil et")

// let nuumbers = (number_1=number_a,number_2=number_b)=>{
//     return number_1**number_2
// }

// console.log(nuumbers());



// let arrayPlaceChanger = (array,currentPlace,targetChange) =>{
//     let hollowaray=array[currentPlace]
    
//     if (currentPlace < targetChange) {
//         for (let i = currentPlace; i < targetChange; i++) {
//             array[i]=array[i+1]
            
//         }
//     }else{
//         for (let i = currentPlace; i > targetChange; i--) {
//             array[i]=array[i-1]
//         }
//     }
//     array[targetChange]=hollowaray


//     return array
    
// }

// console.log(arrayPlaceChanger([10,23,42,53],3,1));



// let arraySameNumberDeleter = (array) =>{
//     let hollowaray=[]
//     let repeatedElements = []

//     for (let i = 0; i < array.length; i++) {
//         if (!repeatedElements[array[i]]) {
//             hollowaray.push(array[i]);
//             repeatedElements[array[i]] = true;
//         }
//     }



//     return hollowaray
    
// }

// console.log(arraySameNumberDeleter([2,2,4,5,6,6,7,1,2,2,3]));



// Daxil edilən cümlənin bütün sözlərinin ilk hərfini böyük edərək qaytaran funksiya yaz

// --

// Daxil edilən iki arrayi birləşdirən funksiya yazın.

// let arrayGlue = (array_1,array_2) =>{
//     let hollowArray1 = []
//     for (let i = 0; i < array_1.length; i++) {
//         hollowArray1.push(array_1[i])
        
        
//     }
//     for (let j = 0; j < array_2.length; j++) {
//         hollowArray1.push(array_2[j])
        
        
//     }
//     return hollowArray1
// }
    
// console.log(arrayGlue([23,34,24,43,53],[23,42,55,12,34]));


// Daxil edilən cümlədə necə söz olduğun tapan funksiya yazın.

// let letterFinder = (words) =>{
//     let count = 0
//     let spacecount = 0
//     for (let i = 0; i < words.length; i++) {
//         if (words[i] == " ") {
//             spacecount++
//         }else{
//             count++
//         }
        
//     }
//     return count
// }

// console.log(letterFinder("My Name Nihad"));

// Function yazın. Parametr qəbul etsin və bu parametr bir array (ədədlərdən ibraət array) olsun. Funksiya həmin arrayin medianını tapsın.Median ən ortada dayanan ədədi bildirir. Əgər array uzunluğu cütdürsə onda ortadakı 2 ədədin cəminin yarısı median olacaqdır.

// let medianFinder = (array) =>{
//     let median = Math.floor(array.length/2)
//     if (array.length %2 == 1) {
//         return array[median]
//     }else{
//         return (array[median] + array[median - 1])/2
//     }
// }

// console.log(medianFinder([12,13,14,15,16,17]));


// Write a method that returns a duplicate-free array

// let arraySameNumberDeleter = (array) =>{
//         let hollowaray=[]
//         let repeatedElements = []
    
//         for (let i = 0; i < array.length; i++) {
//             if (!repeatedElements[array[i]]) {
//                 hollowaray.push(array[i]);
//                 repeatedElements[array[i]] = true;
//             }
//         }
    
    
    
//         return hollowaray
        
//     }

// Write a function that compares two arrays and returns true if they are identical.

// let arrayChecker = (array_1,array_2) =>{

//     if (array_1.length !== array_2.length) {
//         return false;
//     }

// for (let i = 0; i < array_1.length; i++) {
//     if (array_1[i] !== array_2[i]) {
//         return false
//     }
    
// }
// return true

// }

// console.log(arrayChecker([12,45,63,45],[12,45,63,44]));





