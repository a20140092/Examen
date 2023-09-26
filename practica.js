var nombre = prompt("Inserte su nombre y apellidos");
var correctas = 0;
var incorrectas = 0 ;
alert ("Hola como estas "+nombre);
var res1 = prompt("1. ¿Cuándo se realizará la inauguración de las Olimpiadas? \nA. Lunes 02 de octubre \nB. Viernes 29 de setiembre \nC. Jueves 28 de setiembre");
if(res1 == "B"){
    correctas = correctas + 1;
}else if (res1 == "A"){
    correctas = incorrectas + 1;
}else if(res1 == "C"){
    correctas = incorrectas+ 1;
}else{
    alert(nombre+", esa no es una opcion valida")
}
var res2 = prompt("2-¿De qué color es la prompoción de 2do de secundaria? \nA. Celeste o Turquesa \nB. Rojo \nC. Morado");
if(res2 == "A"){
    correctas = correctas + 1;
}else if (res2 == "B"){
    correctas = incorrectas + 1;
}else if(res2 == "C"){
    correctas = incorrectas + 1;
}else{
    alert(nombre+", esa no es una opcion valida")
}
var res3 = prompt("3. Nuevo deporte incluido este año \nA. Futsal femenino \nB. Balonmano \nC. Marcha atlética");
if(res3 == "C"){
    correctas = correctas + 1;
}else if (res3 == "A"){
    correctas = incorrectas + 1;
}else if(res3 == "B"){
    correctas = incorrectas + 1;
}else{
    alert(nombre+", esa no es una opcion valida")
}
alert("La cantidad de respues correctas fue "+correctas+" y la cantidad de respues incorrectas fue "+incorrectas);