function discount(totalAmount){
    return totalAmount > 100 ? totalAmount * 0.1 : totalAmount * 0.5;
}
console.log(discount(3000));