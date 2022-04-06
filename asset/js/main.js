/* creo una funzione che mi generi una griglia */


const grid = document.getElementById(`grid`) //creo una costante dove inserisco la mia ul
    //diciamo dove prendere il valore da assegnare alla variabile
const formLevel = document.getElementById("level");

let RandomArray = []
let progress = 0

function randomNumeber(min, max) {


    while (RandomArray.length < 16) {
        const random = Math.floor(Math.random() * max + 1);
        if (!RandomArray.includes(random)) {
            RandomArray.push(random);
            //console.log(`posso aggiungere il numero ` + random);
        }
    }

}



function show() {
    let level = document.forms[0].level.value;

    /* console.log(level);  */ //verifico se mi stampa correttamente
    if (level == `default`) { //creo un ciclo if che mi chieda che valore è stato selezionata
        grid.innerHTML = ' '; //inizializzo la grigia vuota
    } else if (level == `easy`) { //creo un ciclo if che mi chieda che valore è stato selezionata 
        let number = 1 //inizializzo i numeri da inserire
        const grid = document.getElementById(`grid`) //creo una costante dove inserisco la mia ul
        grid.innerHTML = ' '; //inizializzo la grigia vuota
        let x = 100; //gli do il numero delle celle che deve andarmi a generare
        for (let i = 1; i <= x; i++) {
            const listItem = document.createElement(`li`); //creo l'elemento da inserire
            const point = document.getElementById(`grid`).appendChild(listItem); //inserisco in una variabile l'elemento appena crato
            point.append(number) //gli aggiungo i numeri che ho inizializzato a 1 all'inizio del ciclo if
            randomNumeber(1, 100);
            if (RandomArray.includes(i)) {
                console.log(`il numero ${i} è una bomba`);
                point.addEventListener('click', function colour() { //aggiungo una funzione che mi permetta di cambiare colore all'elemento quando lo clicco aggiungendogli una classe
                    point.classList.add(`bomb`) //gli aggiungo la classe (creata in css)
                    alert `game over`
                    alert `hai indovintato ` + progress
                    location.reload();
                });
            }
            point.classList.add(`listStyle`)
            point.addEventListener('click', function colour() { //aggiungo una funzione che mi permetta di cambiare colore all'elemento quando lo clicco aggiungendogli una classe
                point.classList.add(`green`)
                progress++ //gli aggiungo la classe (creata in css)
            });
            number++ //incremento il mio contatore
        }
    } else if (level == `medium`) { //creo un ciclo if che mi chieda che valore è stato selezionata
        let number = 1 //inizializzo i numeri da inserire
        grid.innerHTML = ' '; //inizializzo la grigia vuota //inizializzo la grigia vuota
        let x = 81; //gli do il numero delle celle che deve andarmi a generare
        for (let i = 1; i <= x; i++) {
            const listItem = document.createElement(`li`); //creo l'elemento da inserire
            const point = document.getElementById(`grid`).appendChild(listItem); //inserisco in una variabile l'elemento appena crato
            point.append(number) //gli aggiungo i numeri che ho inizializzato a 1 all'inizio del ciclo if
            randomNumeber(1, 81);
            if (RandomArray.includes(i)) {
                console.log(`il numero ${i} è una bomba`);
                point.addEventListener('click', function colour() { //aggiungo una funzione che mi permetta di cambiare colore all'elemento quando lo clicco aggiungendogli una classe
                    point.classList.add(`bomb`) //gli aggiungo la classe (creata in css)
                    alert `game over`
                    location.reload();
                });
            }
            point.classList.add(`listStyle`)
            point.addEventListener('click', function colour() { //aggiungo una funzione che mi permetta di cambiare colore all'elemento quando lo clicco aggiungendogli una classe
                point.classList.add(`green`) //gli aggiungo la classe (creata in css)
            });
            number++ //incremento il mio contatore
        }
    } else if (level == `hard`) { //creo un ciclo if che mi chieda che valore è stato selezionata
        let number = 1 //inizializzo i numeri da inserire
        grid.innerHTML = ' '; //inizializzo la grigia vuota
        let x = 49; //gli do il numero delle celle che deve andarmi a generare
        for (let i = 1; i <= x; i++) {
            const listItem = document.createElement(`li`); //creo l'elemento da inserire
            const point = document.getElementById(`grid`).appendChild(listItem); //inserisco in una variabile l'elemento appena crato
            point.append(number) //gli aggiungo i numeri che ho inizializzato a 1 all'inizio del ciclo if
            randomNumeber(1, 49);
            if (RandomArray.includes(i)) {
                console.log(`il numero ${i} è una bomba`);
                point.addEventListener('click', function colour() { //aggiungo una funzione che mi permetta di cambiare colore all'elemento quando lo clicco aggiungendogli una classe
                    point.classList.add(`bomb`) //gli aggiungo la classe (creata in css)
                    alert `game over`
                    location.reload();

                });
            }
            point.classList.add(`listStyle`)
            point.addEventListener('click', function colour() { //aggiungo una funzione che mi permetta di cambiare colore all'elemento quando lo clicco aggiungendogli una classe
                point.classList.add(`green`) //gli aggiungo la classe (creata in css)
            });
            number++ //incremento il mio contatore
        }
    }




} /* fine funzione show */
formLevel.onchange = show;
show();