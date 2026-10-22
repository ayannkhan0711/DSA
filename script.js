// 6 write a function called countVowels that takes in a string and returns the number of vowel in a string

// const str = "apple";

// const countVowel = (str) => {
//     let count = 0;

//     let lowerCaseStr = str.toLowerCase();

//     for (let i = 0; i < lowerCaseStr.length; i++) {
//         if (
//             lowerCaseStr[i] === "a" ||
//             lowerCaseStr[i] === "e" ||
//             lowerCaseStr[i] === "i" ||
//             lowerCaseStr[i] === "o" ||
//             lowerCaseStr[i] === "u"
//         ) {
//             count = count + 1;
//         }
//     }

//     return count;
// };

// const result = countVowel(str);

// console.log(result); 


// 7  write a function called "removeDuplicates" that takes 
// in an array and returns a new array with duplicates removed .


// let numbers = [1,1 , 2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10 ]

// const removeDuplicates = (arr)=> {

// const uniqueArr = []

// for (let i = 0 ; i< arr.length ; i++){
//     if(!uniqueArr.includes(arr[i])){
//         uniqueArr.push(arr[i])
//     }

    

// }
// return uniqueArr
// }
// let results = removeDuplicates(numbers)

// console.log(results)



//In this challenge, you will write a function called fizzBuzzArray
//  that takes in a number and returns an array. 
// The array should contain all the numbers from 1 to the number passed in. 
// However, if the number is divisible by 3, you should replace the number with “Fizz”.
//  If the number is divisible by 5, you should replace the number with “Buzz”. 
// If the number is divisible by both 3 and 5, you should replace the number with “FizzBuzz”.



// const fizzBuzzArray = (count) =>{
//     let arr = []

//     for (let i = 0 ; i < count ; i++){
//         if(i % 3 ===0 && i % 5 === 0 ){
//             arr.push("Fizzbuzz")
//         }else if(i % 5 === 0 ){
//             arr.push("Buzz")
//         }else if ( i % 3 === 0 ){
//             arr.push("Fizz")
//         }else {
//             arr.push(i)
//         }
//     }

//     return arr
// }

// const result =  fizzBuzzArray(100)

// console.log(result)







