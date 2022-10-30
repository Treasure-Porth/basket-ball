let homecount = document.getElementById("home-board")
let guestcount = document.getElementById("guest-board")

let homeBoard = 0;
let guestboard = 0;

function homeone(){
  homeBoard += 1;
  homecount.textContent = homeBoard;
}

function hometwo(){
  homeBoard += 2;
  homecount.textContent = homeBoard;
}

function homethree(){
  homeBoard += 3;
  homecount.textContent = homeBoard;
}

function guestone(){
  guestboard += 1;
  guestcount.textContent = guestboard;
}

function guesttwo(){
  guestboard += 2;
  guestcount.textContent = guestboard;
}

function guestthree(){
  guestboard += 3;
  guestcount.textContent = guestboard;
}

function reset(){
  guestboard = 0
  homeBoard = 0
  homecount.textContent = homeBoard
  guestcount.textContent = guestboard
}