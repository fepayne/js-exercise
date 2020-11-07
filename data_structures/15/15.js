function likes(arr) {
    switch (arr.length) {
        case 0:
            return "no one likes this";
        case 1:
            return arr.join() + " likes this";
        case 2 || 3:
            return arr.slice(0, -1).join(', ') + " and " + arr[arr.length-1] + " like this";
        default:
            return arr[0] + ", " + arr[1] + " and 2 others" + " like this";
    }
}