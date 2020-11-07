function countBy(x, n) {
    let array = [];
    for (let i = 1; i <= n; i++) {
        array.push(i*x);
    }
    return array;
}