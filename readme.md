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

Stolár-Németh Villő