/* 
Pari e Dispari
- L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
- Sommiamo i due numeri 
- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
- Dichiariamo chi ha vinto. 
*/

/* STRUMENTI
- addEventListener
- prompt();
- function -> Math.random
- if
- innerHTML | append() | insertAdjacentHTML
*/

//Seleziono i due pulsanti nella DOM
const EvenBtn = document.getElementById('even');
const OddBtn = document.getElementById('odd');

// Definisco una variabile per raccogliere l'input dell'utente
let userInput = 0;

//Al click faccio inserire un numero all'utente, mi avvalgo di due funzioni per farlo

/////////////////////////////////////////////////////////////////////////////
///////////////////////////////FUNCTIONS/////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//definisco una funzione che immagazzina il valore inserito dall'utente solo se risulta !PARI!
/**
 * Chiede un numero all'utente. Controlla se il numero è pari.
 * @param {number} num_even - Numero da controllare.
 * @returns {number} Restituisce il numero inserito 'se e solo se' risulta pari.
 */

function checkEven(num_even){
    num_even = prompt('Scegli un numero pari compreso tra 1 e 5');

    //controllo che sia compreso tra 1 e 5
    if (num_even >= 1 && num_even <= 5){

        //controllo se il numero inserito è pari
        if (num_even % 2 !== 0){
            alert(`Ehi, hai scelto i numeri pari! 
Se hai cambiato idea, premi il pulsante 'Dispari'.`);
            num_even = 0;
        }
        return parseInt(num_even);

    } else {
        alert("Dev'essere compreso tra 1 e 5!")
    }
}
/////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////
//definisco una funzione che immagazzina il valore inserito dall'utente solo se risulta !DISPARI!
/**
 * Chiede un numero all'utente. Controlla se il numero è dispari.
 * @param {number} num_odd - Numero da controllare.
 * @returns {number} Restituisce il numero inserito 'se e solo se' risulta dispari.
 */

 function checkOdd(num_odd){
    num_odd = prompt('Scegli un numero dispari compreso tra 1 e 5');

    //controllo che sia compreso tra 1 e 5
    if (num_odd >= 1 && num_odd <= 5){

        //controllo se il numero inserito è dispari
        if (num_odd % 2 == 0){
            alert(`Ehi, hai scelto i numeri dispari! 
Se hai cambiato idea, premi il pulsante 'Pari'.`);
            num_odd = 0;
        }
        return parseInt(num_odd);

    } else {
        alert("Dev'essere compreso tra 1 e 5!")
    }
}
/////////////////////////////////////////////////////////////////////////////

//creo una funzione che generi un numero random compreso tra 1 e 5 da assegnare al PC. Come da traccia.
/**
 * Genera un numero random compreso tra 1 e 5
 * @returns Restituisce un numero tra 1 e 5
 */
function generateNumCPU(){
    let randNum = Math.ceil(Math.random() * 5);
    return parseInt(randNum);
}

/////////////////////////////////////////////////////////////////////////////
//creo una funzione che controlli se la somma dei due numeri è pari o dispari
/**
 * Controlla se il parametro è pari o dispari.
 * @param {number} twoNumSum - il numero da controllare.
 * @returns {string} Restituisce 'even' se pari, 'odd' se dispari.
 */

function isSumEvenOrOdd(twoNumSum){
    if (twoNumSum % 2 == 0){
        return 'even';
    } else {
        return 'odd';
    }
}
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////FUNCTIONS////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////



//al click usa la funzione checkEven e restitusci il numero dato in input e controllato tramite la funzione definita precedentemente.
EvenBtn.addEventListener('click', function(){
    //conservo il valore dell'utente in una variabile
    userInput = checkEven(userInput);

    //conservo il valore della CPU in una variabile
    const cpuNum = generateNumCPU();

    console.log(cpuNum);
    console.log(userInput);
    //sommo i numeri
    const sum = cpuNum + userInput;
    console.log(sum);
    
    //richiamo la funzione per controllare se la somma è pari o dispari, se è pari l'utente ha vinto
    if (isSumEvenOrOdd == 'even'){
        document.querySelector('.winner').innerHTML = 'Hai vinto!👏';
    } else {
        document.querySelector('.winner').innerHTML = 'CPU vince 💻';
    }
    
    document.querySelector('.score').innerHTML = `Tu: ${userInput} <br>
    PC: ${cpuNum} <br>
    Somma: ${sum} <i>(${isSumEvenOrOdd()})</i>.`
});


//al click usa la funzione checkEven e restitusci il numero dato in input e controllato tramite la funzione definita precedentemente.
OddBtn.addEventListener('click', function(){
    //conservo il valore dell'utente in una variabile
    userInput = checkOdd(userInput);
        
    //conservo il valore della CPU in una variabile
    const cpuNum = generateNumCPU();

    console.log(cpuNum);
    console.log(userInput);
    //sommo i numeri
    const sum = cpuNum + userInput;
    console.log(sum);

    //richiamo la funzione per controllare se la somma è pari o dispari, se è pari l'utente ha vinto
    if (isSumEvenOrOdd == 'odd'){
        document.querySelector('.winner').innerHTML = 'Hai vinto!👏';
    } else {
        document.querySelector('.winner').innerHTML = 'CPU vince 💻';
    }

    document.querySelector('.score').innerHTML = `Tu: ${userInput} <br>
    PC: ${cpuNum} <br>
    Somma: ${sum} <i>(${isSumEvenOrOdd()})</i>.`
});


