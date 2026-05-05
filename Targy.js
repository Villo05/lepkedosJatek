export default class Targy{
    #pozicio;
    #pont;
    #kep;

    constructor(x, y) {
        this.#pozicio = {
        x: x,
        y: y
        };

        this.#pont = 10;
        this.#kep = "◓⃙";
    }

    megjelenit() {
        return this.#kep;
    }

    getPozicio() {
        return this.#pozicio;
    }

    getPont() {
        return this.#pont;
    }
}