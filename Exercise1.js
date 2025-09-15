function nestingLevel(arr) {
    if (!Array.isArray(arr)) return 0;
    let maxLevel = 0;
    for (let item of arr){
        maxLevel = Math.max(maxLevel, nestingLevel(item));
    }
    return maxLevel + 1;
}

console.log(nestingLevel([1,2,3]));
console.log(nestingLevel([1,[2,3], 4]));
console.log(nestingLevel([1,[2,[3,4]], 5]));