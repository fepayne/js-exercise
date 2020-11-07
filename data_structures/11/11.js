function arrayDiff(a, b) {
    let arr = [];
    for (let item of a) {
        if (!b.includes(item)) arr.push(item);
    }
    return arr;
}