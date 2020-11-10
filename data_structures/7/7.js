 /// ===
function sortByLength(array) {
    return array.sort(function(a, b) {
        if (a.length > b.length) return 1;
        if (a.length == b.length) return 0;
        if (a.length < b.length) return -1;
    });
}