//Stampa le potenze di 2 senza superare il numero 1000.


//numero di cui calcolare le potenze
var base = 2;
//variabile contenente il risultato da stampare
var potenza = 1;
//dichiarazione contatori
var i = 0;
//risultato massimo
var limite = 1000;

//itera fino a risultato massimo di 1000
for(i = 1; potenza < limite ; i++){

    console.log(potenza);
    //i si comporta da esponente
    potenza = Math.pow(base,i);

}
