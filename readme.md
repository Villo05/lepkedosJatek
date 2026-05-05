lepkedosJatek

Feladat játéktér, játékos

nyilakkal való lépkedés, játéktérről ne tudjon lemenni

véletlenszerű tárgyak helyeken, ha oda megy akkor plusz pont

info panel jákos nevével és pontjával

_____________________________________________________________________________________
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
    Jatekos --> Targy : hatizsakban tárolja

___________________________________________________________________________________

Stolár-Németh Villő