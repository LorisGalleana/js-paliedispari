let sendButton = document.querySelector(".send")

sendButton.addEventListener("click", isPalindrome)

//isPalindrome()

function isPalindrome() {
    let show = document.querySelector(".palindrome-result")
    let hide = document.querySelector(".palindrome-start")
    show.style.display = "flex"
    hide.style.display = "none"
    let palindromeWord = document.querySelector(".palindrome-word").value;
    let palindromo1 = palindromeWord;
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

}

//    numberGame()

/* let startButton = document.querySelector(".start-game")

startButton.addEventListener("click", numberGame)
 */
function numberGame () {
//chiediamo all'utente di scegliere tra pari e dispari e controlliamo che possa rispondere solo con pari o dispari
let oddEvenText = document.querySelector(".odd-even-result");
let checkCondition = false;
while (checkCondition == false) {
    pariOdispari = prompt("scegli pari o dispari");
    if (pariOdispari === "pari") {
        checkCondition = true;
    }
    else if (pariOdispari === "dispari") {
        checkCondition = true;
    }
    else {
        checkCondition = false;
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
//controlliamo se il numero è pari o dispari
let pari = oddEven(somma)
console.log(pari);
//se l'utente ha scelto pari e la somma è pari, vince l'utente, se no vince il computer
 if (pariOdispari === "pari" && pari === true) {
    console.log("congratulazioni hai vinto")
    oddEvenText.innerHTML = 
    `
    <div class="even-true">Il risultato è <span class="evidence">${somma}</span>, congratulazioni hai vinto</div>
    `
 }
 else if (pariOdispari === "dispari" && pari === false) {
    console.log("congratulazioni hai vinto")
    oddEvenText.innerHTML = 
    `
    <div class="odd-true">Il risultato è <span class="evidence">${somma}</span>, congratulazioni hai vinto</div>
    `
 }
 else {
    console.log("mi dispiace, hai perso");
    oddEvenText.innerHTML = 
    `
    <div class="odd-even-false">Il risultato è <span class="evidence">${somma}</span>, mi dispiace, hai perso</div>
    `
 }


}
function rangeNumber(max, min) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number
}
function oddEven(number) {
    let even = (number % 2 === 0)
    return even
}


