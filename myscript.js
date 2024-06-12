

/* isPalindrome()

function isPalindrome() {
    let palindromo1 = prompt("inserisci una parola");
    let caratteri = parseInt(palindromo1.length);
    let index = caratteri - 1;
    let palindromo2 = "";
    let textPalindrome = document.querySelector(".palindrome-result");

    for (let i = index; i >= 0; i--) {
        let lettera = palindromo1[i];
        palindromo2 = palindromo2 + lettera;
    }
    
    if (palindromo2 === palindromo1) {
        textPalindrome.innerHTML = 
        `
        <div class="palindrome-true">La parola <span class="evidence">${palindromo1}</span> è palindroma</div>
        `
    }
    else {
        textPalindrome.innerHTML = 
        `
        <div class="palindrome-false">La parola <span class="evidence">${palindromo1}</span> non è palindroma</div>
        `
    }

} */



//chiediamo all'utente di scegliere tra pari e dispari
//let pariOdispari = prompt("scegli pari o dispari");
let pari = "pari"
let dispari = "dispari"
let checkCondition = false;
console.log(checkCondition);

while (checkCondition == false) {
    console.log(checkCondition);
    pariOdispari = prompt("scegli pari o dispari");
    if (pariOdispari === pari) {
        checkCondition = true;
        console.log(checkCondition);
    }
    else if (pariOdispari === dispari) {
        checkCondition = true;
        console.log(checkCondition);
    }
    else {
        checkCondition = false;
        console.log(checkCondition);
    }
}


//chiediamo all'utente di scegliere un numero tra 1 e 5
let userNumber = parseInt(prompt("scegli un numero da 1 a 5"));
//controlliamo che il numero sia effettivamente in quell'intervallo
while (userNumber < 1 || userNumber > 5) {
    userNumber = parseInt(prompt("scegli un numero da 1 a 5"))
}
//generiamo un numero random da 1 a 5 e lo assegniamo al computer
let pcNumber = rangeNumber(5, 1);
console.log(pcNumber);
//sommiamo i due numeri
let somma = userNumber + pcNumber;
console.log(somma);
//se l'utente ha scelto pari e la somma è pari, vince l'utente, se no vince il computer




function rangeNumber(max, min) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number
}