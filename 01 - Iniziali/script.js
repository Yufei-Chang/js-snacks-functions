/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function iniziali (initials)  {
    const firstLetter = [];
    for (let i = 0; i < initials.length; i++) {
        let curName = initials [i];
    firstLetter.push(curName[0]) 
}
return firstLetter
}


// Invoca la funzione qui e stampa il risultato in console

console.log(curName)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
