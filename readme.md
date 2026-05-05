# Lepkedős játék

Feladat: játéktér, játékos  
- Nyilakkal való lépkedés  
- Ne tudjon lemenni a játéktérről  
- Véletlenszerű tárgyak → plusz pont  
- Info panel: játékos neve és pontja  

---

```mermaid
classDiagram
    class Index {
        <<entry point>>
        index.js
    }

    class Jatekter {
        -meret: Object
        -targyak: Targy[]
        +init()
        +mozgatas()
    }

    class Jatekos {
        -elet: int
        -pont: int
        -helyzet: Object
        -hatizsak: Targy[]
        -kep: string
        +megjelenit()
        +targyFelvetel(targy: Targy)
        +setHelyzet(dx: int, dy: int)
        +getNev()
        +getPont()
    }

    class Info {
    }

    class Targy {
        -pozicio: Object
    }

    Index --> Jatekter : példányosítja
    Jatekter --> Jatekos : példányosítja
    Jatekter --> Info : példányosítja
    Jatekter --> Targy : példányosítja
    Jatekos --> Targy : hátizsákban tárolja
```

---


---
Beadtam, hogy a jegyzet alapján csináljon nekem egy jól kinéző readme-be berakhato uml áőrbrát. Majd arra kértem kódot és leírtam neki a pokemonos API oldal linkjét. Átnéztem a kódokat, amit kaptam és amit már csináltunk órán, de az ő kódjában nem úgy volt azt átírtam. Amit nem tanultunk még azt pedig elmagyaráztattam vele, hogy mit csinál és micsoda az.

link: https://chatgpt.com/share/69f9cf86-4120-8385-8250-5610228b0924
---

Lehetne még:
- más karaktert választani
- háttérrel valamit csináni hogy ne szürke négyzetek legyenek
- lépés számlálás

---

Stolár-Németh Villő