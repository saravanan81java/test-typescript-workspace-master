// Print number 1 to n, if the number is multiple of 3 print fiz and if the number is multiple of 5 print bizz, 
//if the number is multiple for 3 and 5 then print 15

//Type 1:
const fizBuzz = (num)=>{

    for(let i=1;i<=num;i++){
        if(i%3 == 0 && i%5 == 0){
            console.log("fizbuzz")
            ++i;
        }
         if(i%5 == 0){
            console.log("buzz")
            ++i;
        } 
        if(i%3 == 0){
            console.log("fiz")
            ++i;
        }
        if(i%3 == 0){
            console.log("fiz")
            ++i;
        }
        if(i%5 == 0){
            console.log("buzz")
            ++i;
        }
        if(i>num){
            break;
        }else{
            console.log(i)
        }
    }
}
//fizBuzz(50)

//type:2
const fizBuzzCheck = (num)=>{

for(let i=1;i<=num;i++){
    if(i%3 == 0 && i%5 == 0){
        console.log("fizbuzz")
    }else if(i%5 == 0){
        console.log("buzz")
    }else if(i%3 == 0){
        console.log("fiz")
    }else{
        console.log(i)
    }
}
}
fizBuzzCheck(15)


