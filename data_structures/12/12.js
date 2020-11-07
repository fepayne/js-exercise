function yourOrder(inputStr) {
    return inputStr.split(' ')
                   .sort((a, b) => (a.split('').sort()[0] > b.split('').sort()[0]) ? 1 : -1)
                   .join(' ');
}