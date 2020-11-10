function SeriesSum(n) {
    let sum = 0.00;
    for (let i = 1; i < n*3; i = i + 3) {
        sum += 1/i;
    }
    console.log(String(sum.toFixed(2)));
    // возвращяй результат выполнения функции
    // return String(sum.toFixed(2))
}

SeriesSum(5);