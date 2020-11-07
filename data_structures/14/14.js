function towerBuilder(floors) {
    let tower = [];

    for (let i = 1; i <= floors; i++) {
        tower.push(" ".repeat(floors-i) + "*".repeat(2*i-1) + " ".repeat(floors-i));
    }
    
    return tower;
}