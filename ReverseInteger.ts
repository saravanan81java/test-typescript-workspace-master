const ReverseInt = (num)=>{

    if(num<0){
        return -1*parseInt(num.toString().split("").reverse().join(""))
    }else{
        return parseInt(num.toString().split("").reverse().join(""))
    }
}
console.log(ReverseInt(1994))
console.log(ReverseInt(-29))

/*
//Reverse the Integer:
//Not working 
let reverseInteger = (num) => {

    let palindrome = num;
    let reverse = 0;

    while (palindrome != 0) {
        let remainder = palindrome % 10;
        reverse = reverse * 10 + remainder;
        palindrome = palindrome / 10;
    }
    console.log(reverse)
}
*/

