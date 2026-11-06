// Introducció a les taules
//21.1.- Fes un programa que faci el següent: 
//● Defineix una variable de tipus taula, buida. 
//● Afegeixi el valor “Hola” a la posició 0. 
//● Afegeixi el valor “Adeu” a la posició 1. 
//● Escrigui a la consola el contingut de la taula

//let taula = [];
//taula[0] = "Hola";
//taula[1] = "Adeu";
//console.log(taula);

//21.2.- Al programa anterior, afegeix les instruccions necessàries (després del console.log()) per a fer el següent: 
//● Afegeixi el valor “Nom” a la posició 2 de la taula. 
//● Escrigui a la consola el contingut de la taula. 
//● Modifiqui el valor emmagatzemat a la posició 1 de la taula, guardant el valor “, “ 
//● Escrigui a la consola el contingut de la taula. 

//taula[2] = "Nom";
//console.log(taula);
//taula[1] = ", ";
//console.log(taula);

//21.3.- Fes un programa que faci el següent: 
//● Defineixi una variable de tipus taula, amb aquests elements [23,45,98,73]. 
//● Escrigui a la consola la suma dels elements situats a les posicions 0 i 2 de la taula. 
//● Guardi a la posició 6 de la taula la suma dels elements  
//● Escrigui a la consola el contingut de la taula. Què passa a la posició 5? 

//let taula = [23, 45, 98, 73];
//console.log(taula[0] + taula[2]);
//taula[6] = taula[0] + taula[2];
//console.log(taula);
//La posició 5 és undefined, ja que no s'ha assignat cap valor a aquesta posició.

//21.4.- Fes un programa que, donat un número (que demanarem per pantalla fent servir prompt()) emmagatzemi a una taula el doble i el triple d’aquest número. Un cop fet, escriu la taula a la consola.

//let numero = prompt("Introdueix un número: ");
//let taula = [];
//taula[0] = numero * 2;
//taula[1] = numero * 3;
//console.log(taula);

//21.5.- Fes un programa que, donat dos números, que demanarem per pantalla i emmagatzemarem a dues variables, guardi a una taula els resultats de la suma, la resta, la multiplicació i la divisió dels dos valors introduïts. 

//let numero1 = prompt("Introdueix el primer número: ");
//let numero2 = prompt("Introdueix el segon número: ");
//let taula = [];
//taula[0] = parseFloat(numero1) + parseFloat(numero2);
//taula[1] = parseFloat(numero1) - parseFloat(numero2);
//taula[2] = parseFloat(numero1) * parseFloat(numero2);
//taula[3] = parseFloat(numero1) / parseFloat(numero2);
//console.log(taula);
