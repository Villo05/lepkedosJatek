export default class Jatekos{
    #nev;
    #elet;
    #pont;
    #helyzet;
    #hatizsak;
    #kep;
    constructor(nev, kep){
        this.#nev = nev;
        this.#elet = 100;
        this.#pont = 0;
        this.#helyzet = { x: 0, y: 0 };
        this.#hatizsak = [];
        this.#kep = kep;
    }

    megjelenit(){
        return `<img src="${this.#kep}" alt="${this.#nev}" class="pokemon">`;
    }

    targyFelvetel(targy){
        this.#hatizsak.push(targy);
        this.#pont += targy.getPont();
    }

    setHelyzet(dx,dy){
        this.#helyzet.x += dx;
        this.#helyzet.y += dy;
    }

    getNev(){
        return this.#nev;
    }

    getPont(){
        return this.#pont;
    }

    getHelyzet(){
        return this.#helyzet;
    }
}