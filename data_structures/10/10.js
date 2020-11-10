// к строке не нужно приводить индекс он во время конкотенации под капотом в строку преабразуется 
function findNeedle(array) {
    return 'found the needle at position ' + String(array.indexOf('needle'));
}