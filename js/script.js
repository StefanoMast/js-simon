/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
Buon lavoro ragazzi :tada: :muscolo:*/

/*[] Genero cinque numeri random
     - uso la funzione math.floor
     - faccio un array

[] far partire il timer di 30 secondi
     - al termine del timer, faccio scomparire i numeri 

[] chiedere all'utente per cinque volte quali sono i numeri che ha visto
    - chiedo all'utente tramite prompt i numeri che ha visto

[] dopo che sono stati inseriti i numeri, il fotware dice quanti e quali dei numeri da indovinare sono stati individuati
    - salvo i numeri dell'utente in un array
    - con i due array che ho creato, metto come true i numeri presenti in entrambi e false quelli che non lo sono*/

//creo un array di cinque numeri casuali
const arrayRandom = numeriRandom(5, 100);
console.log(arrayRandom);
/*Funzione per riempire l'array con  */
function numeriRandom(maxElement, maxRange) {
    const arrayNumeriRandom =[];
    let index = 0;
    //finché il contatore è minore del numero massimo di elementi
    while (index < maxElement) {
        let numeroRandom = getRndInteger (1, maxRange);
        //se genera numeri uguali vanno scartati
        if (!arrayNumeriRandom.includes(numeroRandom)) {
            arrayNumeriRandom.push(numeroRandom)
            index++;
        }
    }
    return arrayNumeriRandom;
}
//funzione per generare numeri casuali
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

