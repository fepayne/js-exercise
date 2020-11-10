// попробуй с countBy(0, 10) countBy(-1, 10)
// вижу что в задачи указано что выходные аргументы всегда больше 0 но лучше дописать проверку и выводить сообщение
function countBy(x, n) {
    let array = [];
    for (let i = 1; i <= n; i++) {
        array.push(i*x);
    }
    return array;
}