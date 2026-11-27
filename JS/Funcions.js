// EXERCICIS DE FUNCIONS 1

//Exercici 3.1 Escriu un script que contingui una funció a la qual se li passa com a paràmetre un nombre enter i retorna com a resultat una cadena de text que indica si el número és parell o imparell. Mostra per pantalla el resultat retornat per la funció. 
//def parell_imparell(numero):
//  if numero % 2 == 0:
//        return "El número és parell"
//    else:
//        return "El número és imparell"

//numero = int(input("Introdueix un nombre enter: "))
//resultat = parell_imparell(numero)
//print(resultat)

//Exercici 3.2 Escriu un script que comprovi si un any donat és de traspàs. Un any és de traspàs si és múltiple de 4, excloent els que siguin múltiples de 100, però no els que siguin múltiples de 400. Per exemple, l'any 1900 no va ser de traspàs, el 2000 sí i el 2100 no ho és. 
//def any_traspas(any):
//    if (any % 4 == 0 and any % 100 != 0) or (any % 400 == 0):
//        return "L'any és de traspàs"
//    else:
//        return "L'any no és de traspàs"

//any = int(input("Introdueix un any: "))
//resultat = any_traspas(any)
//print(resultat)

//Exercici 3.3 Feu un script que inclogui una funció que, donat un enter N, retorni ∑ (1 / n2 ) per a 0 < n ≤ N.
//def suma_inversa_quadrats(N):
//    suma = 0
//    for n in range(1, N + 1):
//        suma += 1 / (n ** 2)
//    return suma

//N = int(input("Introdueix un enter N: "))
//resultat = suma_inversa_quadrats(N)
//print("La suma ∑ (1 / n^2) per a 0 < n ≤", N, "és:", resultat)

//Exercici 3.4
//Feu una funció que calculi la nota final d'un alumne. L'script ha de rebre per teclat el següent:  Nota final d’avaluació continuada, Nota de pràctiques i Nota d’examen, i es mostrarà per pantalla la nota final en base a les formules donades.

//El càlcul de la nota final serà diferent depenent de si l’estudiant ha seguit o no l’avaluació continuada, i de la nota d’aquesta:

//Si la nota d’avaluació continuada és més gran o igual que 5, la nota final la calcularem com: 

//NOTA_FINAL = 0,2 * NOTA_AC + 0,4 * NOTA_PRACT + 0,4 * NOTA_EXAMEN 

//Si la nota d’avaluació continuada és menor que 5, la nota final la calcularem com: 

//NOTA_FINAL = 0,4 * NOTA_PRACT + 0,6 * NOTA_EXAMEN 

//On NOTA_FINAL és la nota final de l’assignatura que hem de calcular, NOTA_AC és la nota d’avaluació continuada, NOTA_PRACT és la nota de pràctiques, i NOTA_EXAMEN és la nota de l’examen. 

//La funció ha de retornar una cadena que contingui el valor numèric de la nota final obtinguda per l’alumne, seguit de la nota però en format lletra, fent servir la següent taula de conversió: 

//Si la nota final és menor que 5 tindrà una D. 
//Si la nota final és major o igual que 5 i menor que 6,5 tindrà una C.
//Si la nota final és major o igual que 6,5 i menor que 8 tindrà una B. 
//Si la nota final és major o igual que 8 i menor que 10 tindrà una A.
//I si la nota final és un 10 tindrà una H. 
//Important: Totes tres notes seran valors numèrics, i podem suposar que sempre tindrem els tres valors i seran més grans o iguals que 0. 

//def calcular_nota_final(nota_ac, nota_pract, nota_examen):
//    if nota_ac >= 5:
//        nota_final = 0.2 * nota_ac + 0.4 * nota_pract + 0.4 * nota_examen
//    else:
//        nota_final = 0.4 * nota_pract + 0.6 * nota_examen
//    if nota_final < 5:
//        lletra = "D"
//    elif 5 <= nota_final < 6.5:   
//        lletra = "C"
//    elif 6.5 <= nota_final < 8:
//        lletra = "B"
//    elif 8 <= nota_final < 10:
//        lletra = "A"
//    else:  # nota_final == 10
//        lletra = "H"
//    return f"La nota final és: {nota_final:.2f}, que correspon a la lletra: {lletra}"

//nota_ac = float(input("Introdueix la nota d'avaluació continuada: "))
//nota_pract = float(input("Introdueix la nota de pràctiques: "))
//nota_examen = float(input("Introdueix la nota d'examen: "))
//resultat = calcular_nota_final(nota_ac, nota_pract, nota_examen)
//print(resultat)

//Exercici 3.5
//Hem organitzat un concurs a Twitter que consisteix en fer relats curs (màxim 280 caràcters) amb el màxim número de paraules de 5 caràcters. Per poder donar el premi, el que volem fer és classificar tots  els tuits segons el nombre de paraules de 5 caràcters que tenen i, per tant, necessitem una funció que, donada una frase, ens retorni el número de paraules de 5 caràcters que té.

//Per fer aquesta funció haurem de tenir en compte que: 

//Totes les frases acaben en un punt (.) y totes comencen sempre per una paraula. 
//Una paraula acaba quan apareix una coma (,) o un espai en blanc. 
//Les frases només poden tenir lletres, comes, espais en blanc y el punt final. No tindrem en compte que pugui aparèixer cap altre caràcter. 
//Per conèixer la llargària de la frase (quants caràcters té) podem fer servir la propietat length del Strings de JavaScript (consulteu https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Str ing/length per saber com fer-la servir) 

//def comptar_paraules(frase):
//    comptador = 0
//    lletres = 0

//    for caracter in frase:
//        if caracter == " " or caracter == "," or caracter == ".":
//            if lletres == 5:
//                comptador += 1
//            lletres = 0
//        else:
//            lletres += 1

//    return comptador

//frase = input("Introdueix una frase: ")
//resultat = comptar_paraules(frase)
//print(resultat)

//Exercici 3.6 A partir de l’experiència del concurs anterior hem decidir fer un concurs semblant cada setmana. Però cada setmana volem comptar paraules amb diferents números de lletres. Així aquesta setmana seran paraules de 7 lletres, la setmana vinent de 4 i l’altre de 3. Què cal modificar a la funció per a que puguem fer servir la mateixa funció totes les setmanes? 

//def comptar_paraules(frase, n):
//    comptador = 0
//    lletres = 0

//    for caracter in frase:
//        if caracter == " " or caracter == "," or caracter == ".":
//            if lletres == n:
//                comptador += 1
//            lletres = 0
//        else:
//            lletres += 1

//    return comptador

//frase = input("Introdueix una frase: ")
//n = int(input("Introdueix el nombre de lletres: "))

//resultat = comptar_paraules(frase, n)
//print(resultat)

//Exercici 3.7 Un conegut que ha vist els nostres concursos ens ha preguntat com ho fem per comptar les paraules d’un determinat número de lletres. Un cop l’hem explicat ens ha demanat si li podíem fer una funció que, donada una frase, ens retorni a una taula quantes paraules hi ha amb 1, 2, 3, 4, 5, 6 o 7 lletres.

//def comptar_paraules_taula(frase):
//    taula = [0] * 7  # Inicialitzem una llista amb 7 zeros
//    lletres = 0

//    for caracter in frase:
//        if caracter == " " or caracter == "," or caracter == ".":
//            if 1 <= lletres <= 7:
//                taula[lletres - 1] += 1
//            lletres = 0
//        else:
//            lletres += 1
//    return taula

//frase = input("Introdueix una frase: ")
//resultat = comptar_paraules_taula(frase)
//print("Taula de paraules per nombre de lletres (1 a 7):", resultat)