
var nomeInput = prompt("Come ti chiami?");
var cognomeInput = prompt("Qual è il tuo cognome?");
var coloreInput = prompt("Qual è il tuo colore preferito?");

var nome = nomeInput.toLowerCase();
var cognome = cognomeInput.toLowerCase();
var colore = coloreInput.toLowerCase();

document.getElementById('password').innerHTML = nome + cognome + colore + 21;