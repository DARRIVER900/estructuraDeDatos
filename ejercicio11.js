class Puntos {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    formato() {
        return 'X' + 'y';
    }
}
const p1 = new Puntos(3, 2)
console.log(p1.formato());