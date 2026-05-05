export default class Info {
  #jatekos;
  #szuloElem;

  constructor(jatekos, szuloElem) {
    this.#jatekos = jatekos;
    this.#szuloElem = szuloElem;
  }

  megjelenit() {
    let kod = `
      <p>Játékos neve: ${this.#jatekos.getNev()}</p>
      <p>Pontszám: ${this.#jatekos.getPont()}</p>
    `;
    this.#szuloElem.innerHTML = kod;
  }
}