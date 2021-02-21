let computerMove = 'kamień';
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
    playerMove = 'kamień';
}
else if (playerInput == '2') {
	playerMove = 'papier';
}
else if (playerInput == '3') {
    playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);
printMessage('Ruch komputera: ' + computerMove);

if (playerMove == computerMove) {
    printMessage('Remis');
} else if(playerMove == 'kamień' && computerMove == 'nożyce'){
 printMessage('Ty wygrywasz');
} else if(playerMove == 'papier' && computerMove == 'kamień') {
 printMessage('Ty wygrywasz');
} else if(playerMove == 'nożyce' && computerMove == 'papier') {
    printMessage('Ty wygrywasz');
} else {
    printMessage('Komputer wygrał');
}

