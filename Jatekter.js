import Jatekos from "./Jatekos.js";
import Targy from "./Targy.js";
import Info from "./Info.js";

export default class Jatekter {
  #meret;
  #jatekos;
  #targyak;
  #info;
  #szuloElem;

  constructor(szuloElem, pokemon) {
    this.#szuloElem = szuloElem;

    this.#meret = {
      szelesseg: 10,
      magassag: 10
    };

    this.#jatekos = new Jatekos(pokemon.nev, pokemon.kep);
    this.#targyak = [];

    this.#info = new Info(
      this.#jatekos,
      document.querySelector(".info")
    );

    this.init();
  }

  init() {
    this.targyakGeneralasa(8);
    this.megjelenit();
    this.mozgatas();
  }

  targyakGeneralasa(db) {
    for (let i = 0; i < db; i++) {
      let x = Math.floor(Math.random() * this.#meret.szelesseg);
      let y = Math.floor(Math.random() * this.#meret.magassag);

      if (x === 0 && y === 0) {
        x = 1;
      }

      this.#targyak.push(new Targy(x, y));
    }
  }

  megjelenit() {
    this.#szuloElem.innerHTML = "";

    for (let y = 0; y < this.#meret.magassag; y++) {
      for (let x = 0; x < this.#meret.szelesseg; x++) {
        const mezo = document.createElement("div");
        mezo.classList.add("mezo");

        const jatekosHelyzet = this.#jatekos.getHelyzet();

        if (jatekosHelyzet.x === x && jatekosHelyzet.y === y) {
          mezo.classList.add("jatekos");
          mezo.innerHTML = this.#jatekos.megjelenit();
        }

        const targy = this.#targyak.find(
          (targy) =>
            targy.getPozicio().x === x &&
            targy.getPozicio().y === y
        );

        if (targy) {
          mezo.classList.add("targy");
          mezo.innerHTML = targy.megjelenit();
        }

        this.#szuloElem.appendChild(mezo);
      }
    }

    this.#info.megjelenit();
  }

  mozgatas() {
    document.addEventListener("keydown", (event) => {
      let dx = 0;
      let dy = 0;

      if (event.key === "ArrowUp") {
        dy = -1;
      } else if (event.key === "ArrowDown") {
        dy = 1;
      } else if (event.key === "ArrowLeft") {
        dx = -1;
      } else if (event.key === "ArrowRight") {
        dx = 1;
      } else {
        return;
      }

      const helyzet = this.#jatekos.getHelyzet();

      const ujX = helyzet.x + dx;
      const ujY = helyzet.y + dy;

      if (
        ujX >= 0 &&
        ujX < this.#meret.szelesseg &&
        ujY >= 0 &&
        ujY < this.#meret.magassag
      ) {
        this.#jatekos.setHelyzet(dx, dy);
        this.targyEllenorzes();
        this.megjelenit();
      }
    });
  }

  targyEllenorzes() {
    const helyzet = this.#jatekos.getHelyzet();

    const index = this.#targyak.findIndex(
      (targy) =>
        targy.getPozicio().x === helyzet.x &&
        targy.getPozicio().y === helyzet.y
    );

    if (index !== -1) {
      const targy = this.#targyak[index];

      this.#jatekos.targyFelvetel(targy);
      this.#targyak.splice(index, 1);
    }
  }
}