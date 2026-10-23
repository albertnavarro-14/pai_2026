
//Condicional simple: if

//13.1.- Escriu un programa que donat un número llegit amb prompt escrigui el missatge “el número llegit és negatiu” si el número és més petit que zero.

numero = prompt("Introdueix un número: ");
if (numero < 0) {
    console.log("El número llegit és negatiu");
}

//13.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el número llegit és parell” si el número es parell.

numero = prompt("Introdueix un número: ");
if (numero % 2 == 0) {
    console.log("El número llegit és parell");
}

//13.3.- Escriu un programa que, donat un número llegit amb prompt, escrigui “el número llegit és parell” si el número es parell, o “el número llegit és senar”, si és senar. Fes servir un if per cada cas. 

numero = prompt("Introdueix un número: ");
if (numero % 2 == 0) {
    console.log("El número llegit és parell");
} else {
    console.log("El número llegit és senar");
}   

//13.4.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola el més gran de tots dos. Pista: fes servir dos if un per comprovar si el primer número és més gran que el segon i l’altre per comprovar si el segon número és més gran que el primer. 

numero1 = prompt("Introdueix el primer número: ");
numero2 = prompt("Introdueix el segon número: ");
if (numero1 > numero2) {
    console.log ("El numero més gran és:"+ numero1)
}   
elif (numero1 < numero2) {
    console.log ("El numero més gran és:"+ numero2) 
}   


