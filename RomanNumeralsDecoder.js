function romanToDecimal(roman){
    const romanValues = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
    let total = 0;

    for (let i = 0; i < roman.length; i++){
        let current = romanValues[roman[i]];
        let next = romanValues[roman[i+1]];

        if(next && current < next){
            total += (next - current);
            i++;
        } else {
            total += current;
        }
    }
    return total;
}

console.log(romanToDecimal("MM"));       
console.log(romanToDecimal("MDCLXVI"));  
console.log(romanToDecimal("M"));        
console.log(romanToDecimal("CD"));       
console.log(romanToDecimal("XC"));    
console.log(romanToDecimal("XL"));      
console.log(romanToDecimal("I")); 
