/*console.log("Ola mundoo na consola");
alert("Ola mundoo na janela");

var a = 4;
var b = 5;
var c = a + b;
console.log(c)
var idade = window.prompt("ingrese sua idade: ")

if (idade < 18 ) {
    document.write("Não tem acesso");
}
else{
    document.write(idade)
}
var numero = window.prompt("Digite um numero")
if (numero % 2 == 0) {
    document.writeln(numero+" é par");
    
}
else{
    document.writeln(numero+ " é impar");
}
document.writeln(lista)

var x = 0;
while(x < 10){
    x++;
    document.writeln("dele");
}
*/

var lista = [];
var tamanho = 0;
tamanho = window.prompt("Tamnho da lista");

for (let i = 0;i < tamanho ;i++) {
    lista.push(window.prompt("O que vc quer por na lista"));
}
if(lista.length<5){
    document.writeln("Lista pequena: ");
    document.writeln("["+lista+"]");
}
else{
    document.writeln("Lista grande: ");
    document.writeln(" ["+lista+"] ");
}