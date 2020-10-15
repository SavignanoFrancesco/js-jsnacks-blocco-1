//Stampa il cubo dei primi N numeri, dove N è un numero
//indicato dall’utente.



//Dichiarazione array contentente i numeri
var numbers = [];
//numero da chiedere all'utente e cube per stamparne il cubo
var num, cube = 0;
//dichiarazione contatori
var i = 0;

//chiedo all'utente un numero
num = prompt('Inserisci un numero: ');

//num iterazioni
for(i = 1; i <= num; i++){

    //calcola il cubo e stampa in console
    cube = i * i * i;
    console.log('il cubo di ', i, ' é ', cube);

}
