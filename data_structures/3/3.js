function digitize(num) {
    return String(num).split('').map((item) => +item).reverse();
}