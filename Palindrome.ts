

let palindromeCheck = (str)=>{
    let revString=""
    for (let s of str){
        revString = s + revString
    }
    console.log(revString)
    console.log(revString == str)
    /*
    if(revString == str){
        return true
    }else{
        return false
    } 
    */
}

//console.log(palindromeCheck("madam"))

let palindrome = (stri)=>{
    let reverseString 
    let arr= stri.split('')
    arr.reverse()
    reverseString = arr.join('')
    console.log(reverseString)

    if(reverseString == stri){
        return true
    }else{
        return false
    } 
}

console.log(palindrome("oo"))

