function flattenArray(arr){
    let flat = [];
    for (let item of arr) {
        if(Array.isArray(item)){
            flat = flat.concat(flattenArray(item));
        } else {
            flat.push(item);
        }
    }
    return flat;
}

console.log(flattenArray([1,[2,[3,4],5],6]));