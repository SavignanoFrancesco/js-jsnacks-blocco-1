//JSnack 2: L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.



//chiedo due numer all'utente
var parola1 = prompt('parola1');
var parola2 = prompt('parola2');

//creo variabili con lunghezza delle parole
var len1 = parseInt(parola1.length);
var len2 = parseInt(parola2.length);
console.log(len1);
console.log(len2);

//cerco il maggiore
if(len1 > len2){
    console.log(parola2);
    console.log(parola1);
}else if(len2 > len1){
    console.log(parola1);
    console.log(parola2);
}else{
    console.log('sono lunghe uguali');
}
