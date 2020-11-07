function reverse(str) {
    let reversedStr = '';
    let lastIndex = str.length-1;
    let firstIndex = -1;
    for (let i = str.length-1; i >= 0; i--) {
        if (str[i] == ' ') {
            firstIndex = i + 1;
            reversedStr = reversedStr + str.slice(firstIndex,lastIndex+1) + ' ';
            lastIndex = i - 1;
            firstIndex = -1;
        }
        if (i == 0) {
            reversedStr = reversedStr + str.slice(0,lastIndex+1);
        }
    }
    return reversedStr;
}