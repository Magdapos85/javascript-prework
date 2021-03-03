
function playGame(playerInput){
  clearMessages ()



console.log('Gracz wpisał: ' + playerInput);

function getMoveName (MoveName){
  if(MoveName == '1'){
      return 'kamień';
  }
  else if (MoveName == '2') {
  	return 'papier';
  }
  else if (MoveName == '3') {
      return 'nożyce';
    }
}





function displayResult(argComputerMove, argPlayerMove){

  printMessage('Twój ruch to: ' + argPlayerMove);
  printMessage('Ruch komputera: ' + argComputerMove);

  if (argPlayerMove == argComputerMove) {
      printMessage('Remis');
  } else if(argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
    console.log(abcd);
   printMessage('Ty wygrywasz');
 } else if(argPlayerMove == 'papier' && argComputerMove == 'kamień') {
   printMessage('Ty wygrywasz');
 } else if(argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('Ty wygrywasz');
  } else {
      printMessage('Komputer wygrał');
  }

}


function getMoveName(argMoveId){
    console.log('argMoveID:', argMoveId);
    if(argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
}

function displayResult(argComputerMove, argPlayerMove){
    console.log('argComputerMove:', argComputerMove, 'argPlayerMove:', argPlayerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if ( argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
    } else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Ja wygrywam!');
    } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Ja wygrywam!');
    } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
    } else if ( argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz!');
    } else if ( argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Ja wygrywam!');
    } else if ( argComputerMove == 'papier' && argPlayerMove == 'papier') {
        printMessage('Remis!');
    } else if ( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
        printMessage('Remis!');
    } else if ( argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
        printMessage('Remis!');
    } else {
        printMessage('Powtórz swój ruch!')
    }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);


console.log('Gracz wpisał: ' + playerInput);
let playerMove = getMoveName(playerInput);

displayResult (computerMove, playerMove);

}
playGame(3);
console.log (document.getElementById('play-rock'))
document.getElementById('play-rock').addEventListener('click', function(){
playGame('1');
});
document.getElementById('play-paper').addEventListener('click', function(){
playGame('2');
});
document.getElementById('play-scissors').addEventListener('click', function(){
playGame('3');
});
