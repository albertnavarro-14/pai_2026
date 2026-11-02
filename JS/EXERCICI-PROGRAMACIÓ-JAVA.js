
//Condicional simple: if

//13.1.- Escriu un programa que donat un número llegit amb prompt escrigui el missatge “el número llegit és negatiu” si el número és més petit que zero.

// numero = prompt("Introdueix un número: ");
//if (numero < 0) {
//    console.log("El número llegit és negatiu");}

//13.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el número llegit és parell” si el número es parell.

//numero = prompt("Introdueix un número: ");
//if (numero % 2 == 0) {
//    console.log("El número llegit és parell");}

//13.3.- Escriu un programa que, donat un número llegit amb prompt, escrigui “el número llegit és parell” si el número es parell, o “el número llegit és senar”, si és senar. Fes servir un if per cada cas. 

//numero = prompt("Introdueix un número: ")/;
//if (numero % 2 == 0) {
//    console.log("El número llegit és parell");
// else {
//    console.log("El número llegit és senar");
//}   

//13.4.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola el més gran de tots dos. Pista: fes servir dos if un per comprovar si el primer número és més gran que el segon i l’altre per comprovar si el segon número és més gran que el primer. 

//numero1 = prompt("Introdueix el primer número: ");
//numero2 = prompt("Introdueix el segon número: ");
//if (numero1 > numero2) {
//    console.log ("El numero més gran és:"+ numero1)
//}   
//elif (numero1 < numero2) {
//    console.log ("El numero més gran és:"+ numero2) 
//}   

// 13.5.- Escriu un programa que, donat tres número llegits amb prompt, escrigui a la consola el més gran dels tres. Pista: fes servir tres if cadascun d’ells per comprovar si un dels números és el més gran.  

// numero 1 = prompt ("Introdueix el primer número")
// numero 2 = prompt ("Introdueix el segon número")
//numero 3 = prompt ("Introdueix el tercer número")

// if (numero 1 > numero 2 && numero 1> numero 3){
//    console.log ("El numero més gran és:"+ numero 1)}

// else if (numero2 > numero 1 && numero 2> numero 3){
//    console.log ("El numero més gran és:"+ numero 2)}

// if (numeor 3 > numero 1 && numeero 3> numero 2){
//  console.log ("El numero més gran és:" + numero 3)}

//13.6.- Fent servir només if, escriure un programa que donat amb prompt un número de mes, entre 1 i 12, escrigui per pantalla el nom del mes que correspon. 

// let numero  = prompt("Introdueix un númerp de mes entre 1 i 12: ");
//let text;

// if (numero = 1){
//  text = "Gener";}

// if (numero = 2){
//  text = "Febrer";}

// if (numero = 3){
//   text = "Març";}

// if (numero = 4){
//   text = "Abril";}

// if (numero = 5){
//   text = "Maig";}

// if (numero = 6){
//   text = "Juny";}

// if (numero = 7){
//   text = "Juliol";}

// if (numero = 8){
//   text = "Agost";}

// if (numero = 9){
//   text = "Setembre";}

// if ( numero = 10){
//   text = "Octubre";}

// if (numero = 11){
//   text = "Novembre";}

// if (numero = 12){
//   text = "Desembre";}

// console.log(text)

//14.1.- Escriu un programa que, donat un número llegit amb prompt, escrigui el missatge “el número llegit és negatiu” si el número és més petit que zero i escrigui el missatge “el número llegit és positiu” en cas contrari. 

// numero = prompt("Introdueix un número:" )
// if (numero < 0) {
//    console.log("El número llegit és negatiu");} 
// else {
//    console.log("El número llegit és positiu");}

// 14.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el número llegit és parell” si el número es parell i “el número llegit es senar” en cas contrari.

// numero = prompt ("Introdueix un número: ");
// if (numero % 2 == 0) {
//    console.log("El número llegit és parell");}
// else {
//    console.log("El número llegit és senar");}

// 14.3.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola quin és el més gran. Només pots fer servir una instrucció if-else. 

// let numero 1 = number(prompt ("Introdueix el primer número: "));
// let numero 2 = number(prompt ("Introdueix el segon número: "));
// if (numero 1 > numero 2) {
//    console.log("El número més gran és: " + numero 1);}
// else {
//    console.log("El número més gran és: " + numero 2);}

// 14.4.- Escriu un programa que, donat tres números llegits amb prompt, escrigui a la consola quin es el més gran. Pista. Comprova si el primer número llegit és el més gran. Si no és així, comprova si el més gran és el segon. Si tampoc ho és, el més gran, sens dubte, serà el tercer. 

// let numero 1 = number(prompt("Introdueix el primer número: "));
// let numero 2 = number(prompt("Introdueix el segon número: "));
// let numero 3 = number(prompt("Introdueix el tercer número: "));
// if (numero 1 > numero 2 && numero 1 > numero 3) { 
//    console.log("El número més gran és: " + numero 1);}
// else if (numero 2 > numero 1 && numero 2 > numero 3) {
//    console.log("El número més gran és: " + numero 2);}
// else {
//    console.log("El número més gran és: " + numero 3);}

// 14.5.- Escriu un programa que, donats tres números llegits amb prompt, escrigui a la consola els tres números ordenats.  
// let numero 1 = number(prompt("Introdueix el primer número: "));
// let numero 2 = number(prompt("Introdueix el segon número: "));
// let numero 3 = number(prompt("Introdueix el tercer número: "));
// if (numero 1 > numero 2 && numero 1 > numero 3) {
//    if (numero 2 > numero 3) {
//       console.log(numero 1 + " " + numero 2 + " " + numero 3);} 
//    else {
//       console.log(numero 1 + " " + numero 3 + " " + numero 2);}
// }
// else if (numero 2 > numero 1 && numero 2 > numero 3) {
//    if (numero 1 > numero 3) {
//       console.log(numero 2 + " " + numero 1 + " " + numero 3);}
//    else {
//       console.log(numero 2 + " " + numero 3 + " " + numero 1);}
// }
// else {
//    if (numero 1 > numero 2) {
//       console.log(numero 3 + " " + numero 1 + " " + numero 2);}
//    else {
//       console.log(numero 3 + " " + numero 2 + " " + numero 1);}
// }

// 14.6.- En un control d’alcoholèmia necessiten un programa que els hi digui si una persona pot conduir o no. El programa demanarà dues dades: Si la persona té carnet de conduir i el valor que ha sortit a la prova d’alcoholèmia. El programa ha de respondre que sí pot conduir si té carnet de conduir i la prova d’alcoholèmia ha donat un valor inferior a 0.25 

// let carnet = prompt("Tens carnet de conduir? (si/no)");
// let alcohol = prompt("Quin ha estat el resultat de la prova d’alcoholèmia? (valor numèric)");
// if (carnet === "si" && alcohol < 0.25) {
//    console.log("Pots conduir.");}
// else {
//    console.log("No pots conduir.");}

// 14.7.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola el resultat de restar al nombre més gran el nombre més petit. 

// let numero 1 = number(prompt("Introdueix el primer número: "));
// let numero 2 = number(prompt("Introdueix el segon número: "));
// if (numero 1 > numero 2) {
//    console.log("El resultat de restar al nombre més gran el nombre més petit és: " + (numero 1 - numero 2));}
// else {
//    console.log("El resultat de restar al nombre més gran el nombre més petit és: " + (numero 2 - numero 1));}

// 14.8.- Escriu un programa que simuli la compra a una web. L’usuari haurà d’introduir una quantitat (el que cal pagar) per teclat fent servir la instrucció prompt.
// En cas que la quantitat sigui 30€ o més, es mostrarà a la consola un missatge indicant que el cost total és de 30€ donat que el transport és gratis. 

//En cas que la quantitat sigui inferior a 30€, es mostrarà un missatge dient el preu total que consistirà en l’introduït més 4.95€ en concepte de cost d’enviament. 

// let quantitat = number(prompt("Introdueix la quantitat a pagar: "));
// if (quantitat >= 30) {
//    console.log("El cost total és de 30€ donat que el transport és gratis.");}

// else {
//    let costTotal = quantitat + 4.95;
//    console.log("El preu total és de " + costTotal + "€ (quantitat introduïda més 4.95€ en concepte de cost d’enviament).");}

//14.9.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on posa dues dades: 
    //1. Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de 3.95 
    // 2. Quin d’aquests sabors vol: 
         //1. Vainilla o Xocolata. No cal afegir res 
         //2. Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final. 
         //3. Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final. 
// Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error dades mal introduïdes” 
//Si totes les dades són correctes, escriurà el preu final.

// let tipus = prompt("Vols un conus (c) o una terrina (t)?");
// let sabor = prompt("Quin sabor vols? (vainilla, xocolata, turró, menta, oreo, crema, gerds, ametlles)");
// let preuBase;
// if (tipus === "c") {
//    preuBase = 3.45;}
// else if (tipus === "t") {
//    preuBase = 3.95;}
// else {
//    console.log("Error dades mal introduïdes");}

// let preuFinal = preuBase;
// if (sabor === "vainilla" || sabor === "xocolata") {
//    preuFinal += 0;}
// else if (sabor === "turró" || sabor === "menta" || sabor === "oreo") {
//    preuFinal += 0.5;}
// else if (sabor === "crema" || sabor === "gerds" || sabor === "ametlles") {
//    preuFinal += 1;}
// else {
//    console.log("Error dades mal introduïdes");}
// console.log("El preu final és: " + preuFinal + "€");

// 15.1.- Fent servir la instrucció switch escriu un programa que donat amb prompt un número de mes, entre 1 i 12, escrigui per pantalla el nom del mes que correspon.  
// let numero = prompt("Introdueix un número de mes entre 1 i 12: ");
// let text;
// switch (numero) {

//    case "1":
//       text = "Gener";
//       break;

//    case "2":
//       text = "Febrer";
//       break;

//    case "3":
//       text = "Març";
//       break;

//    case "4": 
//       text = "Abril";
//       break;

//    case "5":
//       text = "Maig";
//       break;

//    case "6":
//       text = "Juny";
//       break;

//    case "7":
//       text = "Juliol";
//       break;

//    case "8": 
//       text = "Agost";
//       break;

//    case "9":
//       text = "Setembre";
//       break;

//    case "10":
//       text = "Octubre";
//       break;

//    case "11":
//       text = "Novembre";
//       break;

//    case "12":
//       text = "Desembre";
//       break;

//    default:
//       text = "Error: número de mes no vàlid";
// }
// console.log(text);

//15.2.- Un usuari va a una gelateria i per calcular el cost del seu gelat té un ordinador on posa dues dades: 
// 1. Si vol un conus (c) o una terrina (t). El conus té un cost base de 3.45 i la terrina de 3.95 
// 2. Quin d’aquests sabors vol: 
// 1. Vainilla o Xocolata. No cal afegir res 
// 2. Turró, Menta o Oreo. Caldrà afegir 0.5 al preu final. 
// 3. Crema, Gerds o Ametlles. Caldrà afegir 1 al preu final. 
// Fes servir la instrucció switch per fer el càlcul de l’increment de preu associat al sabor. 
// Si l’usuari posa alguna dada malament, el missatge que es posarà a la consola serà “Error dades mal introduïdes”. 
// Si totes les dades són correctes, escriurà el preu final. 

// let tipus = prompt("Vols un conus (c) o una terrina (t)?");
// let sabor = prompt("Quin sabor vols? (vainilla, xocolata, turró, menta, oreo, crema, gerds, ametlles)");
// let preuBase;
// if (tipus === "c") {
//    preuBase = 3.45;}
// else if (tipus === "t") {
//    preuBase = 3.95;}
// else {
//    console.log("Error dades mal introduïdes");}
// let preuFinal = preuBase;
// switch (sabor) {
//    case "vainilla":
//    case "xocolata":
//       preuFinal += 0;
//       break;
//    case "turró":
//    case "menta":
//    case "oreo":
//       preuFinal += 0.5;
//       break;
//    case "crema":
//    case "gerds":
//    case "ametlles":
//       preuFinal += 1;
//       break;
//    default:
//       console.log("Error dades mal introduïdes");
// }
// console.log("El preu final és: " + preuFinal + "€");

//15.3.- Escriu un programa, que donat una lletra que representa un dia de la setmana (l - dilluns, m - dimarts, x - dimecres, j - dijous, …) escrigui a la consola si el dia és laborable o festiu. Són laborables de dilluns a divendres. Fes servir la instrucció switch.
// let dia = prompt("Introdueix una lletra que representa un dia de la setmana (l - dilluns, m - dimarts, x - dimecres, j - dijous, v - divendres, s - dissabte, d - diumenge):");
// switch (dia) {
//    case "l":
//    case "m":
//    case "x":
//    case "j":
//    case "v":
//       console.log("El dia és laborable.");
//       break;
//    case "s":
//    case "d":
//       console.log("El dia és festiu.");
//       break;
//    default:
//       console.log("Error: lletra no vàlida.");
// }

//16.1.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola 10 cops el text “Estem fent bucles”.  
// for (let i = 0; i < 10; i++) {
//    console.log("Estem fent bucles");
// }

// 16.2.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola tots els nombres del 5 al 20.

// for (let i = 5; i <= 20; i++) {
//    console.log(i);
// }

//16.3.- Escriu un programa que, donat un nombre N, escrigui a la consola la suma de tots els nombres entre 1 i N. 

// let N = number(prompt("Introdueix un nombre N: "));
// let suma = 0;
// for (let i = 1; i <= N; i++) {
//    suma += i;
// }
// console.log("La suma de tots els nombres entre 1 i " + N + " és: " + suma);

//16.4.- Escriu un programa que, donat un nombre N, escrigui a la consola el factorial d’aquest nombre. El factorial és la multiplicació de tots els números entre 1 i N. 
// let N = number(prompt("Introdueix un nombre N: "));
// let factorial = 1;
// for (let i = 1; i <= N; i++) {  
//    factorial *= i;
// }
// console.log("El factorial de " + N + " és: " + factorial);

// 16.5.- Escriu un programa que, donat dos números N i M (on N sempre serà menor que M) calculi la suma de tots els números entre N i M (ambdós inclosos). 
// let N = number(prompt("Introdueix el nombre N: "));
// let M = number(prompt("Introdueix el nombre M (N < M): "));
// let suma = 0;
// for (let i = N; i <= M; i++) {
//    suma += i;
// }
// console.log("La suma de tots els nombres entre " + N + " i " + M + " és: " + suma);

//16.6.- Escriu un programa que, donat un número N, calculi la suma de tots els números parells entre 2 i N.

// let N = number(prompt("Introdueix un nombre N: "));
// let suma = 0;
// for (let i = 2; i <= N; i += 2) {
//    suma += i;
// }
// console.log("La suma de tots els nombres parells entre 2 i " + N + " és: " + suma);

//16.7.- Escriu un programa que, donat un número N, escrigui a la consola la taula de multiplicar de N. 
// let N = number(prompt("Introdueix un nombre N: "));
// for (let i = 1; i <= 10; i++) {
//    console.log(N + " x " + i + " = " + (N * i));
// }

//16.8.- Escriu un programa que, donat un número N, escrigui a la consola tots els números de N a 1 (per tant, en ordre descendent). Observa el que passa si N < 1 
// let N = number(prompt("Introdueix un nombre N: "));
// for (let i = N; i >= 1; i--) {
//    console.log(i);
// }

//16.9.- Escriu un programa que donat un número N, escrigui N asteriscos (*) 
// let N = number(prompt("Introdueix un nombre N: "));
// let asteriscos = "";
// for (let i = 0; i < N; i++) {
//    asteriscos += "*";
// }
// console.log(asteriscos);

//16.10.- Escriu un programa que donat un número N, escrigui el següent dibuix (cas que el número introduït sigui 5). 
// * 
// ** 
// *** 
// **** 
// *****

// let N = number(prompt("Introdueix un nombre N: "));
// for (let i = 1; i <= N; i++) {
//    let asteriscos = "";
//    for (let j = 0; j < i; j++) {
//       asteriscos += "*";
//    }
//    console.log(asteriscos);
// }

//16.11.- Escriu un programa que donat dos números N i M, crei i sumi una sèrie com la següent: 
// Si N ← 2 i M ← 5  
// Sortida per consola:  
// 2 22 222 2222 22222  
// La suma de la sèrie és:24690  

// let N = number(prompt("Introdueix el nombre N: "));
// let M = number(prompt("Introdueix el nombre M: "));
// let suma = 0;
// let serie = "";
// for (let i = 1; i <= M; i++) {
//    let numero = "";
//    for (let j = 0; j < i; j++) {
//       numero += N;
//    }
//    serie += numero + " ";
//    suma += parseInt(numero);
// }
// console.log(serie.trim());
// console.log("La suma de la sèrie és: " + suma);

//17.1.- Escriu, fent servir la instrucció while, un programa que escrigui a la consola 10 cops el text “Estem fent bucles”. 

// let i = 0;
// while (i < 10) {
//    console.log("Estem fent bucles");
//    i++;
// }

// 17.2.- Escriu, fent servir la instrucció while, un programa que escrigui a la consola tots els nombres del 5 al 20. 

// let i = 5;
// while (i <= 20) {
//    console.log(i);
//    i++;
// }

//17.3.- Escriu un programa, fent servir la instrucció while, que, donat un número N, escrigui a la consola tots els números de N a 1 (per tant, en ordre descendent). Observa el que passa si N < 1

// let N = number(prompt("Introdueix un nombre N: "));
// while (N >= 1) {
//    console.log(N);
//    N--;
// }

//17.4.- Escriu un programa que escrigui la seqüència de Fibonnacci des d’u fins a un número N donat. 
// La seqüencià de Fibonnacci consisteix en la suma dels dos valors anteriors tenint en compte que els dos primers són 1 i 1. 
// Així, els 7 primers números de Fibonnacci són: 
// 1 1 2 3 5 8 13 
// Els dos primers són 1 i 1 
// El tercer és 1 + 1 → 2 
// El quart és 1 + 2 → 3 
// El cinquè és 2 + 3 → 5 
// El sisè és 3 + 5 → 8 
// El setè és 5 + 8 → 13

// let N = number(prompt("Introdueix un nombre N: "));
// let a = 1;
// let b = 1;
// console.log(a);
// while (b <= N) {
//    console.log(b); 
//    let temp = b;
//    b = a + b;
//    a = temp;
// }

//17.5.- Escriu un programa que, donats dos números N i M, escrigui en la consola la llista de multiplicacions N*1, N*2, N*3, N*4,...,N*M Per evitar problemes per la mida del resultat (en cas que N o M siguin molt grans) l’escriptura de multiplicacions s’ha d’aturar si el resultat és més gran que 999999 (faig servir l’espai com a separadors de milers per tal que quedi més clar el nombre). Per exemple, si els nombres introduits són 200000 i 5000 els resultat per consola hauria de ser: 
// 200000, 400000, 600000, 800000, 1000000  
// I ja no s’escriuria res més doncs 1000000 és més gran que 999999 

// let N = number(prompt("Introdueix un nombre N: "));
// let M = number(prompt("Introdueix un nombre M: "));
// for (let i = 1; i <= M; i++) {
//    let resultat = N * i;
//    if (resultat > 999999) {
//       break;
//    }
//    console.log(resultat);
// }
//

//18.1.- Escriu, fent servir la instrucció do-while, un programa que escrigui a la consola 10 cops el text “Estem fent bucles”.  

// let i = 0;
// do {
//    console.log("Estem fent bucles");
//    i++;
// } while (i < 10);
// document.write("Estem fent bucles" + "<br>");

//18.2.- Escriu, fent servir la instrucció for, un programa que escrigui a la consola tots els nombres del 5 al 20. 

// let i = 5;
// for (let j = 0; j < 16; j++) {
//    console.log(i + j);
// }

//18.3.- Escriure un programa, fent servir la instrucció do-while, que, donat un número N, escrigui a la consola tots els números de N a 1 (per tant, en ordre descendent). Observa el que passa si N < 1.

// let N = number(prompt("Introdueix un nombre N: "));
// do {
//    console.log(N);
//    N--;
// } while (N >= 1);
// document.write(N + "<br>");

//18.4.- Escriu un programa que, donat un nombre N, ens digui si és primer. Un número és primer si només és divisible per 1 i per ell mateix (això implica que caldrà comprovar si hi ha algun número entre 1 i N que sigui divisor de N). 

// let N = number(prompt("introdueix un número"));
// let text = "";
// let i = 2;
// do {
//     if (N % i === 0) {}
//         text = "El número no és primer";
//         break;
//     }
//     i++;
// } while (i < N);
// if (text === "") {
//     text = "El número és primer";
// }
// document.write(text);

// 18.5.- Escriu, fent servir la instrucció do-while, un programa que demani (fent servir la instrucció prompt), 10 números, i ens digui quin és el més gran. 

// let i = 0;
// let max = Number.NEGATIVE_INFINITY; // Inicialitzem el màxim amb un valor molt petit
// let numero = Number(prompt("Introdueix un número"));
// do {
//     if (numero > max) {
//         max = numero; // Actualitzem el màxim si el número introduït és més gran
//     }
//     i++;
// } while (i < 10);
// document.write("El número més gran és: " + max);     
