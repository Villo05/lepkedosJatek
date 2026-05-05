import Services from "./Service.js";
import Jatekter from "./Jatekter.js";

const service = new Services();


const jatekterElem = document.querySelector(".jatekter");

service.getAdat(
  "https://pokeapi.co/api/v2/pokemon-form/12",
  (data) => {
    const pokemon = {
      nev: data.name,
      kep: data.sprites.front_default
    };

    new Jatekter(jatekterElem, pokemon);
  }
);