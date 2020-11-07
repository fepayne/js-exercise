function sumDigits(num) {
    return String(num > 0 ? num : -1*num)
           .split('')
           .map(item => +item)
           .reduce((previousValue, item) => previousValue + item, 0);
}