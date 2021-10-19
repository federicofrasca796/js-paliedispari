//Chiedere all’utente di inserire una parola 
//Creare una funzione per capire se la parola inserita è palindroma

/* STRUMENTI
- prompt();
- String.split();
- string.reverse();
- string.join();
- if
*/

//chiedo all'utent un nome palindromo
const paliWord = prompt('Prova ad inserire una parola palindroma');

//creo la funzione che verificherà la condizione richiesta.
//FUNCTION: isPalindrome(word);
/**
 * Funzione che verifica se una parola è palidroma.
 * @param {string} word - Parola di cui verificare la palidromia.
 * @return {boolean} Restituisce true se palidroma, false se non è palidroma.
*/
function isPalindrome (word){
    //scompongo la parola inserita nel paramentro 'word' | inverto l'array risultante da split(), usando reverse() | riconverto l'array in stringa con join()
    // console.log(word);
    // console.log(word.split("").reverse().join(""));
    const reverseWord = word.split("").reverse().join("");

    //verifico se la parola originale combacia con l'inversione contenuta in reverseWord
    if (word.toLowerCase() === reverseWord.toLowerCase()){
        return true;
        // console.log('è palindroma');
    } else {
        return false;
        // console.log('NON è palindroma');
    }
}
////////////////////////////////////////////////////////////////////////////////////////////

if (isPalindrome(paliWord)){
    document.querySelector('body').innerHTML= `
    <h2><i>${paliWord}</i> è palindroma 😱</h2>`
} else {
    document.querySelector('body').innerHTML= `
    <h2>
        <i>${paliWord}</i> non è palindroma.😞 
    </h2>
    <a href="https://it.wikipedia.org/wiki/Palindromo" target="_black">Per saperne di più.</a>`
}