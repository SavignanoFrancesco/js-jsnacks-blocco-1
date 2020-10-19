//Stampa le potenze di 2 senza superare il numero 1000.


//numero di cui calcolare le potenze
var num = 2;
//variabile contenente il risultato da stampare
var res = 1;
//dichiarazione contatori
var i = 0, j = 0;
//risultato massimo
var max_res = 1000;

//itera fino a risultato massimo di 1000
for(i = 1; res <= max_res ; i++){

    //calcola 2 alla i
    for(j = 0; j < i ; j++){
        res *= num;
    }

    //se non ha superato il valore 1000,stampo e poi reimposto res a 1 per fare il prossimo calcolo
    if (res <= max_res){
        console.log(num, ' alla ',i , ' = ', res);
        res = 1;
    }

}
