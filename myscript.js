

isPalindrome()





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

}

