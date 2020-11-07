function rentalCarCost(days) {
    if (days < 3) {
        return days * 40;
    } else if (days < 7) {
        return days * 40 - 20;
    } else {
        return days * 40 - 50;
    }
}