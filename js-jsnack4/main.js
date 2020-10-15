//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
//un numero, se è dispari inseriscilo nell’array.



//Dichiarazione array contentente i numeri
var numbers = [];
//variabile d'appoggio per pushare i numeri nell'array
var num;
//dichiarazione contatori
var i = 0;
//Variabile contenente la somma
var sum = 0;

//6 iterazioni
for(i = 0; i < 6; i++){

    //Chiede un numero all'utente, lo rende int e, se è dispari, lo pusha nell'array
    num = prompt('inserisci un numero: ');
    num = parseInt(num);
    if (num % 2 != 0){
        numbers.push(num);
        console.log(num);
    }

}
