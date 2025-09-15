function calculateAverage(numbers){
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((total, num) => total + num, 0)
    const average = sum/ numbers.length;
    return average;
}
console.log(calculateAverage([2,4,6,7,8,4]));