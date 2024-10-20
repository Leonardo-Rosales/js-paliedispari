console.log('ciao');

// Pari e Dispari

//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

const sceltaUtente = prompt("Scegli pari o dispari");
const numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"));

function generaNumero() {
    return Math.floor(Math.random() * 5) + 1;
}

const numeroComputer = generaNumero();
console.log(`Numero generato dal computer: ${numeroComputer}`);

function èPari(numero) {
    return numero % 2 === 0;
}

function èDispari(numero) {
    return numero % 2 !== 0;
}

const somma = numeroUtente + numeroComputer;
console.log(`La somma è: ${somma}`);


const èSommaPari = èPari(somma);
const èSommaDispari = èDispari(somma);
console.log(èSommaPari,èSommaDispari);



if ((sceltaUtente === 'pari' && èSommaPari) || (sceltaUtente === 'dispari' && èSommaDispari)) {
    console.log("Hai vinto");
} else {
    console.log("Hai perso");
}



