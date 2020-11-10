function sumDigits(num) {
    return String(num > 0 ? num : -1*num)
           .split('')
           .map(item => +item) // вот это преобразование можно сдлеать внутри reduce и избежать лишнего перебора всего массива
           .reduce((previousValue, item) => previousValue + item, 0);
}
