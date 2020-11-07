function stringToNumber(str) {
    let l = str.length;
    let num = 0;
    let flag = false;
    if (str[0] == '-') {
        flag = true;
    }
    for (let i = 0; i < l; i++) {
        if (str[i] == '1') {
            num += 1*(10**(l-1-i));
        } else if (str[i] == '2') {
            num += 2*(10**(l-1-i));
        } else if (str[i] == '3') {
            num += 3*(10**(l-1-i));
        } else if (str[i] == '4') {
            num += 4*(10**(l-1-i));
        } else if (str[i] == '5') {
            num += 5*(10**(l-1-i));
        } else if (str[i] == '6') {
            num += 6*(10**(l-1-i));
        } else if (str[i] == '7') {
            num += 7*(10**(l-1-i));
        } else if (str[i] == '8') {
            num += 8*(10**(l-1-i));
        } else if (str[i] == '9') {
            num += 9*(10**(l-1-i));
        }
    }
    num = flag ? -1*num : num;
    console.log(num);
}

stringToNumber('-10203040506');