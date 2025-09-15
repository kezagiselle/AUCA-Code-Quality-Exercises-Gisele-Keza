function findEvenNumbers(numbers){
    return numbers.filter(num => num % 2 === 0);
}

console.log(findEvenNumbers([2,3,4,5,7,8]));