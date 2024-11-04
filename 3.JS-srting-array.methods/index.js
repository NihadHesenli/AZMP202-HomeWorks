// let toUpperCase = (sentence) =>{
//     let uppecase = sentence.toUpperCase()
//     return uppecase
// }
// console.log(toUpperCase("hi nihad"));


// let longTextFinder = (sentence) =>{
//     const words = sentence.split(" ")
//     let longestWord = " "
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i]
//         }
        
//     }
//     return longestWord
// }
// console.log(longTextFinder("Hello my name is Npihad"));


// let reversedSentence = (sentence) =>{
//     const reversed = sentence.split(" ").reverse().join(' ')
//     return reversed
// }

// console.log(reversedSentence("Nihad student"));


// let characterReplacer = (word,curretnChar,targerChar) =>{
//     let wordReplaced = ""
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] == curretnChar) {
//             wordReplaced += targerChar
//         }else{
//             wordReplaced += word[i]
//         }
        
//     }
//     return wordReplaced
// }
// console.log(characterReplacer("salam","a","o"));


// # add 'Meat' in the beginning of your shopping cart if it has not been already added
// # add Sugar at the end of you shopping cart if it has not been already added
// # remove 'Honey' if you are allergic to honey
// # modify Tea to 'Green Tea'

// 1)
//  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

// 1
// if (!shoppingCart.includes("Meat")) {
//     shoppingCart.unshift("Meat")
// }


// console.log(shoppingCart);

// 2
// if (!shoppingCart.includes('Sugar')) {
//     shoppingCart.push("Sugar")
// }

// console.log(shoppingCart);

// 3
// if (shoppingCart.includes("Honey")) {
//     shoppingCart.splice(shoppingCart.indexOf("Honey") , 1)
// }

// console.log(shoppingCart);

//4
// shoppingCart.splice(shoppingCart.indexOf("Tea"),1,"Green Tea")

// console.log(shoppingCart);

// 2)

// #Reverse countries array using reverse() method

// #remove "Canada" and "Denmark", and add "Azerbaijan 
// (splice)

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]


// 1

//   countries.reverse()
//   console.log(countries);

// 2

// countries.splice(countries.indexOf("Canada"),2,"Azerbaijan")
// console.log(countries);

// 3)
// Concatenate the following two variables and store it in a fullStack variable.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// const fullStack = frontEnd.concat(backEnd)

// console.log(fullStack);

// 4)
//  const itCompanies = ["Facebook","Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

//  #Slice out the first 3 companies from the array
// #Slice out the last 3 companies from the array
// #Slice out the middle IT company or companies from the array
// #Sort companies array using sort() method
// #Change each company name to uppercase one by one and print them out
// #Check if a "Google" company exists in the itCompanies array. If it exist return the company else return a company is not found
//  #Filter out companies which have more than one 'o' without the filter method

// 1


// itCompanies.splice( 0 , 3 )
// console.log(itCompanies);

// 2


// console.log(itCompanies.slice(-3));

// 3

// const middle = Math.floor(itCompanies.length/2)
// let middleArray;

// if (itCompanies %2===0) {

//     middleArray = itCompanies.slice(middle + 1,middle-1)
    
// }else{
//     middleArray = itCompanies.slice(middle,middle+1)
// }

// console.log(middleArray);

// 4

// const sortedItCompainesArray = itCompanies.sort()
// console.log(sortedItCompainesArray);

// 5
// const upperCase = []
// for (let i = 0; i < itCompanies.length; i++) {
//     upperCase.push(itCompanies[i].toUpperCase())
    
// }
// console.log(upperCase);

// 6


// let companyChecker =  (company=itCompanies) => {
//     if (!company.includes("Google")) {
//         return "Compont is not found"
//     }else{
//         return company
//     }

// }

// console.log(companyChecker(itCompanies));

// 7

// const companyWithO = []
// for (let i = 0; i < itCompanies.length; i++) {
//     let companies = itCompanies[i]
//     let count = 0
//     for (let j = 0; j < companies.length; j++) {
//         if (companies[j].toLowerCase() ===  "o") {
//             count++
//         }
        
//     }
//     if (count >= 1) {
//         companyWithO.push(companies)
//     }
    
// }
// console.log(companyWithO);

// 5)
// Bir function yazın, parametr olaraq 2 array qebul edir və bir char qebul edir.gonderilmish char-a esasen hemin iki array-i ve elementlerini birleshdirib bir string olaraq return etmelidir. Meselen -> [1,2] [3,4] '*' gonderilerse output -> 1*2*3*4 string-i olmalidir.


// let arrayGlue = (array1,array2,char) => {
//    return array1.concat(array2).join(char)
// }

// console.log(arrayGlue([1,2],[3,4],"-"));
