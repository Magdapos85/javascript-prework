let computerMove = `kamień`;

function printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!'){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
let playerMove = `papier`;

function printMessage('Zagrałem ' + playerMove + '! Jeśli Twój ruch to papier, to wygrywasz!'){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if (playerMove == 2) {
	printMessage('papier');

else if (playerMove == 3) {
printMessage('nożyce');

printMessage('Twój ruch to: ' + playerMove);
printMessage('Twój ruch to: ' + playerMove);
if(playerMove == 2){
 printMessage('Ty wygrywasz');
} else {
 printMessage('Ty przegrywasz');
}
if(playerMove == 3){
 printMessage('Ty wygrywasz');
} else {
 printMessage('Ty przegrywasz');
}
if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}
