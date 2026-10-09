/*

1.1.- Digues quins d'aquests noms de variables són correctes i quins no.

*/

//1. variAble (correct)
//2. Variable (correct)
//3. vari-able (incorrect)
//4. vari_able (correct)
//5. _variable (correct)
//6. vari.able (incorrect)
//7. vari4able (correct)
//8. 4variable (incorrect)
//9. variable4 (correct)
//10. variable_4 (correct)
//11. LaMevaVariable (correct)

/*

1.2.- Volem guardar a una variable el nom d'un empleat. Quin d'aquests noms de variable 
seria el més addient? 

*/

//1. nomempleat 
//2. Nomempleat 
//3. NomEmpleat
//4. nomEmpleat (el primer nom de variable més adient)
//5. Nom_empleat 
//6. _NomEmpleat 
//7. nomEmpleat0 
//8. nom_empleat (el segon nom de variable més adient)
//9. nom0empleat 
//10. Nom empleat

/*

2.1.- Què passaria si féssim aquestes declaracions de variables? 

*/

/*

a.- 

*/

//a.
var a =1;
var a =2;
console.log(a); //surt un 2, ja que la variable a es declara amb var i es pot redeclarar

//b.- 
var a = 1; 
let a = 2; 
console.log(a); //surt un error, ja que no es pot declarar una variable amb el mateix nom amb var i let

//c.- 
let a = 1; 
var a = 2; 
console.log(a); //surt un error, ja que no es pot declarar una variable amb el mateix nom amb let i var

//d.- 
let a = 1; 
let a = 2; 
console.log(a); //surt un error, ja que no es pot declarar una variable amb el mateix nom amb let i let