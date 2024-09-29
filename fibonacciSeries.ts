// function returns the Fibonacci number
/*
function fib(n) {
    if (n <= 1)
        return n;
    return fib(n-1) + fib(n-2);
}

console.log(fib(7))

*/
/*
function solutionFib(n){

    if(n==0) return 0;

    let prev1=0;
    let prev2=1;
    let curr;

    for(let i=2;i<=n;i++){
        //console.log(prev1)
        curr=prev1+prev2;
        prev1=prev2;
        prev2=curr;
    }
    return prev1;
}
console.log(solutionFib(7))
*/
let fibSeries= ()=>{

    let value1=0
    let value2=1
    let curr

    for(let i=2;i<10;i++){
        curr= value1+value2
        value1=value2
        value2=curr
        console.log(curr)
    }
}

fibSeries();