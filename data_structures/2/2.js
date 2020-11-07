function sumOfArray(array) {
    if (array.length == 0) return 0;
    return (array[0] > 0) ? array[0] + sumOfArray(array.slice(1)) : sumOfArray(array.slice(1));
}