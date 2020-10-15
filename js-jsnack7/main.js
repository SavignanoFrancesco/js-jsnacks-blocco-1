//Calcola la somma e la media dei numeri da 1 a 10.


//numero di cui calcolare le potenze
var num = 10;
//variabili contenente il risultato da stampare
var sum = 0, mean = 0;
//dichiarazione contatori
var i = 0;


//itera num volte e somma i numeri da i a num
for(i = 1; i <= num ; i++){

    sum += i;
    console.log('somma =', sum);

}

//calcola la media
mean = sum / num;

//stampa i risultati
console.log('La somma dei numeri da 1 a 10 è: ', sum);
console.log('La media è: ', mean);
