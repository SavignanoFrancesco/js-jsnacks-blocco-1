//Stampa le potenze di 2 senza superare il numero 1000.


//numero di cui calcolare le potenze
var num = 2;
//variabile contenente il risultato da stampare
var res = 1;
//dichiarazione contatori
var i = 0, j = 0;


//itera fino a risultato massimo di 1000
for(i = 1; res <= 1000 ; i++){

    //calcola 2 alla j
    for(j = 0; j < i ; j++){
        res *= num;
    }

    //se non ha superato il valore 1000,stampo e poi reimposto res a 1 per fare il prossimo calcolo
    if (res <= 1000){
        console.log(num, ' alla ',i , ' = ', res);
        res = 1;
    }

}
