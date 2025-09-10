class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    area() {
        return this.base * this.altura;
    }
}
const r1 = new Rectangulo(3, 4);
console.log(r1.area());