const maxChar = (str)=>{

    let obj ={};
    for(let char of str){

        if(!obj[char]){
           obj[char] = 1
        }else{
           obj[char]++
        }
    }
    console.log(obj)

    let maxNum = 0
    let maxChar = ''

    for(let ch in obj){

        if(obj[ch]>=maxNum){
            maxNum=obj[ch]
            maxChar=ch
        }
    }
    console.log(`${maxChar} occurance is ${maxNum}`)
    return maxChar
}
//console.log(maxChar("HeeLLoooo"))

let MaximumCharacter=(str)=>{

    let obj={};

    for(let ch of str){

        if(!obj[ch]){
            obj[ch]=1
        }else{
            obj[ch]++
        }
        //console.log(obj)
    }
        let maxNum=0
        let maxChar
    for(let c in obj){

        if(obj[c]>=maxNum){
            maxChar=c;
            maxNum=obj[c];
        }
    }
    console.log("MaxChar is "+maxChar)
    console.log("MaxNum is "+maxNum)
}

console.log(MaximumCharacter("aarun"))