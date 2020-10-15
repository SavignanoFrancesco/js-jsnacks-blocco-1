//Stampa le potenze di 2 senza superare il numero 1000.


//numero di cui calcolare le potenze
var num = 2;
//variabile contenente il risultato da stampare
var res = 1;
//dichiarazione contatori
var i = 0, j = 0;
//variabile per controllare se la potenza è <= 1000
var flag = false;


//itera fino a risultato massimo di 1000(con res <=1000 flag rimane false )
for(i = 1; !flag ; i++){

    ////calcola 2 alla j
    for(j = 0; j < i ; j++){
        res *= num;
    }

    //se il risultato è maggiore di mille faccio terminare il ciclo
    if(res <= 1000){
        console.log(num, ' alla ',i , ' = ', res);

    }else{
        flag = true;
    }

    //reimposto res a 1 per fare il prossimo calcolo
    res = 1;

}
