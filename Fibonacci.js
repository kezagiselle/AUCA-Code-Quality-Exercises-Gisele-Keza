function fibonacci(n){
    if (n < 0) return [];
    if (n === 0) return [0];
    if (n === 1) return [0,1];

    let fib = [0,1];
    let next = fib[0] + fib[1];

    while (next <= n){
        fib.push(next);
        let len = fib.length;
        next = fib[len -1] + fib[len -2];
    }
    return fib;
}

console.log(fibonacci(10));