//Remove duplicate element from an array

//const removeDuplicates = arr => [...new Set(arr)];

//const numbers = [11, 50, 12, 19, 4, 8, 12, 50];
//const uniqueNumbers = removeDuplicates(numbers);
//console.log(uniqueNumbers); 

//*********************** */
//const remove = a => [...new Set(a)];
/*const rem = function(arr){
    [...new Set(arr)]
}*/

//const numbers = [11,22,11,33]
//const uniquenumbers = remove(numbers)
//console.log(uniquenumbers)


//Remove Duplicate for an array

const removeArray = (arr) => [...new Set(arr)]
let arra = [11,99,99,11]
const uniqueArray = removeArray(arra)
console.log(uniqueArray)

//Remove duplicate from a string

const removeDuplicateinString = (str) => [...new Set(str)]
let Stri= "aarruunn"
const uniqueString = removeArray(Stri)
console.log(uniqueString)