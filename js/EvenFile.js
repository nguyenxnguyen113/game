// JavaScript Document

const size = 16;
const countmax = 5;
var CPlayer = 0; // Current Player (0 is O,1 is X)
var InGame = false;
var l_played = [],
  l_win = [];
var mode = 0; // 0: no block; 1: block
var timereturn = false;
var AI = false;

//New Game
function Loaded() {
  CPlayer = 0; // Current Player (0 is O,1 is X)
  (l_played = []), (l_win = []);
  var imgp = document.getElementById("imgPlayer");
  imgp.style.backgroundImage = "url('../Images/Opng.png')";

  var table = document.getElementById("table");
  var row = document.getElementsByClassName("row");
  var square = document.getElementsByClassName("square");

  // Create Table
  table.innerHTML = "";
  for (y = 0; y < size; y++) {
    table.innerHTML += '<tr class="row"></tr>';
    for (x = 0; x < size; x++) {
      var div =
        '<div class="square" onClick="Click(id)" onMouseOver="MouseOver(id)" onMouseOut="MouseOut(id)" type="submit"></div>';
      row.item(y).innerHTML += '<td class="col">' + div + "</td>";
      square.item(x + y * size).setAttribute("id", (x + y * size).toString());
      square.item(x + y * size).setAttribute("player", "-1");
    }
  }
}
function changePlayer() {
  if (CPlayer == 0) CPlayer = 1;
  else CPlayer = 0;

  var iplayer = "url('../Images/Opng.png')";
  if (CPlayer == 1) iplayer = "url('../Images/Xpng.png')";
  var imgp = document.getElementById("imgPlayer");
  imgp.style.backgroundImage = iplayer;
}
//Play Game
function Click(id) {
  if (!InGame) return;
  var square = document.getElementsByClassName("square");
  var pos = parseInt(id);
  if (square.item(pos).getAttribute("player") != "-1") return;
  var path = "url('../Images/Opng.png')";
  if (CPlayer == 1) path = "url('../Images/Xpng.png')";
  square.item(pos).style.backgroundImage = path;
  square.item(pos).setAttribute("player", CPlayer.toString());
  l_played.push(pos);
  const location = {
    list: model.listLocation,
    owner: model.currentUser.email,
    cplayer: CPlayer,
    pos: pos,
  };
  model.listLocation += 1;
  model.addlocation(location);
  var win = WinGame();
  changePlayer();
  if (!win) {
    // AIMode();
    win = WinGame();
    pwin = 1;
  }

  if (win) {
    InGame = false;
  } else {
    var pgr = document.getElementById("pgrTime");
    pgr.value = pgr.getAttribute("max");
  }
}

// Min Max
function maxab(a, b) {
  if (a > b) return a;
  else return b;
}
function minab(a, b) {
  if (a < b) return a;
  else return b;
}

// function MouseOver(id)
// {
// 	if (!InGame) return;
// 	var square = document.getElementsByClassName("square");
// 	var pos = parseInt(id);
// 	square.item(pos).style.backgroundColor = "#3F3";
// }

// function MouseOut(id)
// {
// 	if (!InGame) return;
// 	var square = document.getElementsByClassName("square");
// 	var pos = parseInt(id);
// 	square.item(pos).style.backgroundColor = "#FFF";
// }

function WinGame() {
  var result = false;
  var Board = GetBoard();
  for (x = 0; x < size; x++) {
    for (y = 0; y < size; y++) {
      if (
        winHor(x, y, Board) ||
        winVer(x, y, Board) ||
        winCross1(x, y, Board) ||
        winCross2(x, y, Board)
      ) {
        var square = document.getElementsByClassName("square");
        for (i = 0; i < l_win.length; i++) {
          square.item(l_win[i]).style.backgroundColor = "#FF0";
        }
        result = true;
      }
    }
  }
  return result;
}
// Win Dir

function winHor(x, y, Board) {
  l_win = [];
  var count = 0,
    counto = 0; // count opponent
  var player = Board[x + y * size];
  if (player == -1) return false;

  if (x > 0) {
    var p = Board[x - 1 + y * size];
    if (p != player && p != -1) counto++;
  }

  for (i = x; i < size; i++) {
    var p = Board[i + y * size];
    if (p == player && p != -1) {
      count++;
      l_win.push(i + y * size);
    } else {
      if (p != -1) counto++;
      break;
    }
  }
  if (count >= countmax) {
    if (mode == 0) return true;
    else {
      if (counto >= 2) return false;
      else return true;
    }
  }
  return false;
}

function winVer(x, y, Board) {
  l_win = [];
  var count = 0,
    counto = 0;
  var player = Board[x + y * size];
  if (player == -1) return false;

  if (y > 0) {
    var p = Board[x + (y - 1) * size];
    if (p != player && p != -1) counto++;
  }

  for (i = y; i < size; i++) {
    var p = Board[x + i * size];
    if (p == player && p != -1) {
      count++;
      l_win.push(x + i * size);
    } else {
      if (p != -1) counto++;
      break;
    }
  }
  if (count >= countmax) {
    if (mode == 0) return true;
    else {
      if (counto >= 2) return false;
      else return true;
    }
  }
  return false;
}
function GetBoard() {
  var TBoard = [];
  var sqr = document.getElementsByClassName("square");
  for (i = 0; i < size * size; i++)
    TBoard.push(parseInt(sqr.item(i).getAttribute("player")));
  return TBoard;
}
function winCross1(x, y, Board) {
  l_win = [];
  if (x > size - countmax || y < countmax - 1) return false;
  var count = 0,
    counto = 0;
  var player = Board[x + y * size];
  if (player == -1) return false;

  if (y < size - 1 && x > 0) {
    var p = Board[x - 1 + (y + 1) * size];
    if (p != player && p != -1) counto++;
  }

  for (i = 0; i <= minab(size - x, y); i++) {
    var p = Board[x + i + (y - i) * size];
    if (p == player && p != -1) {
      count++;
      l_win.push(x + i + (y - i) * size);
    } else {
      if (p != -1) counto++;
      break;
    }
  }
  if (count >= countmax) {
    if (mode == 0) return true;
    else {
      if (counto >= 2) return false;
      else return true;
    }
  }
  return false;
}

function winCross2(x, y, Board) {
  l_win = [];
  if (x > size - countmax || y > size - countmax) return false;
  var count = 0,
    counto = 0;
  var player = Board[x + y * size];
  if (player == -1) return false;

  if (y > 0 && x > 0) {
    var p = Board[x - 1 + (y - 1) * size];
    if (p != player && p != -1) counto++;
  }

  for (i = 0; i < minab(size - x, size - y); i++) {
    var p = Board[x + i + (y + i) * size];
    if (p == player && p != -1) {
      count++;
      l_win.push(x + i + (y + i) * size);
    } else {
      if (p != -1) counto++;
      break;
    }
  }
  if (count >= countmax) {
    if (mode == 0) return true;
    else {
      if (counto >= 2) return false;
      else return true;
    }
  }
  return false;
}
function deleteRoom() {
  firebase
    .firestore()
    .collection(model.collectionName)
    .doc(model.currentRoom.id)
    .delete();
}
// Button Event
function PvsP() {
  AI = false;
  Loaded();
  InGame = true;
  var pgr = document.getElementById("pgrTime");
  pgr.value = pgr.getAttribute("max");
  LoadProgress();
}
function LoadProgress() {
  if (!InGame) return;
  setTimeout(function () {
    var pgr = document.getElementById("pgrTime");
    pgr.value--;
    if (pgr.value > 0) LoadProgress();
    else {
      var mess = 'Player with "X" win';
      if (CPlayer == 1) mess = 'Player with "O" win';
      alert(mess);
      InGame = false;
    }
  }, 1000);
}
