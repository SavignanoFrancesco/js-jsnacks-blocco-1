//jsnak1: trova il maggiore tra due numeri inseriti dall'utente



//chiedo due numer all'utente
var num1 = parseFloat(prompt('NUM1'));
var num2 = parseFloat(prompt('NUM2'));

//cerco il maggiore
if(num1 > num2){
    console.log('NUM1 maggiore');
} else if(num2 > num1){
    console.log('NUM2 maggiore');
}else {
    console.log('NUM1 uguale a NUM2');
}
