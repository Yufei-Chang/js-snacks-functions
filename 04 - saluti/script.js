/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.

const curItem = (nome) => {
    const now = new Date();
    const orario = now.getHours();
    let message = 'Buonasera';
    if (orario < 13 && orario > 0) {
        message = 'Buongiorno';
    } else if (orario >=13 && orario <= 17){
        message = 'Buon pomeriggio';
    }
    return `${message} ${nome}`
}

// Invoca la funzione qui e stampa il risultato in console

const messaggio = curItem(name);
console.log(messaggio)

//Risultato atteso se si passa 'Mario': // ciao Mario