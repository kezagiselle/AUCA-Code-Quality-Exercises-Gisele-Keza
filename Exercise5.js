function calculateFactorial(n){
    if(n < 0) return 0;
    let factorial = 1;
    for (let i = 2; i <= n; i++){
        factorial *= i;
    }
    return factorial;
}

console.log(calculateFactorial(3));