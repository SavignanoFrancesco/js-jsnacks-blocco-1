//Il software deve chiedere per 5 volte all’utente di inserire un
//numero. Il programma stampa la somma di tutti i numeri
//inseriti.



//Dichiarazione array contentente i numeri
var numbers = [];
//variabile d'appoggio per pushare i numeri nell'array
var num;
//dichiarazione contatori
var i = 0;
//Variabile contenente la somma
var sum = 0;

//5 iterazioni
for(i = 0; i < 5; i++){

    //Chiede un numero all'utente, lo rende int e lo pusha nell'array
    num = prompt('inserisci un numero: ');
    num = parseInt(num);
    numbers.push(num);
    console.log(numbers);

    //somma num ad ogni iterazione
    sum += num;
    console.log('somma = ',sum);

}
