/*
class test2{

phone(){

    console.log("Iphone 13")

}
}
let t = new test2()
t.phone()
*/

//Fibbonaacci Series:

const FibonnaciSeries= (num)=>{

    let value1=0
    let value2=1
    let final

    for(let i=0;i<num;i++){
        final=value1+value2;
        value1=value2;
        value2=final;
        console.log(value2)
    }
}
FibonnaciSeries(7)
