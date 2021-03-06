pacman = {
    x: 6,
    y: 5
}
staticGhost1 = {
    x: 11,
    y: 5
}
staticGhost2 = {
    x: 1,
    y: 5
}
randomGhost1 = {
    x: 6,
    y: 9
}

map = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 3, 3, 1, 3, 3, 3, 3, 3, 1, 3, 3, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 4, 2, 2, 1, 1, 5, 1, 1, 2, 2, 4, 1],
    [1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1],
    [1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1],
    [1, 3, 3, 1, 3, 3, 6, 3, 3, 1, 3, 3, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

prevMap = [];
for(var i = 0; i < map.length; i++)
    prevMap[i] = map[i].slice();

var el = document.getElementById('world');
function drawWorld() {
    el.innerHTML = '';
    var pacmanWins = true;
    for (var y = 0; y < map.length; y = y + 1) {
        for (var x = 0; x < map[y].length; x = x + 1) {
            if (map[y][x] === 1) {
                el.innerHTML += "<div class='wall'></div>";
            }
            else if (map[y][x] === 2) {
                pacmanWins = false;
                el.innerHTML += "<div class='coin'></div>";
            }
            else if (map[y][x] === 3) {
                el.innerHTML += "<div class='ground'></div>";
            }
            else if (map[y][x] === 4) {
                el.innerHTML += "<div class='ghostStatic'></div>";
            }
            else if (map[y][x] === 5) {
                el.innerHTML += "<div class='pacman'></div>";
            }
            else if (map[y][x] === 6) {
                el.innerHTML += "<div class='ghostRandom'></div>";
            }
            else if (map[y][x] === 7) {
                el.innerHTML += "<div class='ghostHunter'></div>";
            }
        }
        el.innerHTML += "<br>";
    }
    if(pacmanWins){
        window.setInterval(100);
        alert("Pacman has won!");
        location.reload();
    }
}

drawWorld();

document.onkeydown = function (event) {
    // console.log(event);
    if (event.keyCode === 37) { // PACMAN MOVE LEFT
        if (map[pacman.y][pacman.x - 1] !== 1) {
            if (map[pacman.y][pacman.x - 1] === 4 || map[pacman.y][pacman.x - 1] === 6){
                console.log("Hit!");
                alert("Game Over!");
                location.reload();
            }
            map[pacman.y][pacman.x] = 3;
            pacman.x = pacman.x - 1;
            map[pacman.y][pacman.x] = 5;
            drawWorld();
        }
    }
    else if (event.keyCode === 38) { // PACMAN MOVE UP
        if (map[pacman.y - 1][pacman.x] !== 1) {
            if (map[pacman.y - 1][pacman.x] === 4 || map[pacman.y - 1][pacman.x] === 6){
                console.log("Hit!");
                alert("Game Over!");
                location.reload();
            }
            map[pacman.y][pacman.x] = 3;
            pacman.y = pacman.y - 1;
            map[pacman.y][pacman.x] = 5;
            drawWorld();
        }
    }
    else if (event.keyCode === 39) { // PACMAN MOVE RIGHT
        if (map[pacman.y][pacman.x + 1] !== 1) {
            if (map[pacman.y][pacman.x + 1] === 4 || map[pacman.y][pacman.x + 1] === 6){
                console.log("Hit!");
                alert("Game Over!");
                location.reload();
            }
            map[pacman.y][pacman.x] = 3;
            pacman.x = pacman.x + 1;
            map[pacman.y][pacman.x] = 5;
            drawWorld();
        }
    }
    else if (event.keyCode === 40) { // PACMAN MOVE DOWN
        if (map[pacman.y + 1][pacman.x] !== 1) {
            if (map[pacman.y + 1][pacman.x] === 4 || map[pacman.y + 1][pacman.x] === 6){
                console.log("Hit!");
                alert("Game Over!");
                location.reload();
            }
            map[pacman.y][pacman.x] = 3;
            pacman.y = pacman.y + 1;
            map[pacman.y][pacman.x] = 5;
            drawWorld();
        }
    }
    console.log(map)
}

ghostCredit = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

var directionUp1 = true;
var staticGhost1Moves = window.setInterval(function(){
    if (directionUp1){
        if (map[staticGhost1.y - 1][staticGhost1.x] == 5){
            console.log("Hit!");
            alert("Game Over!");
            location.reload();
        }
        else if (map[staticGhost1.y - 1][staticGhost1.x] == 2){
            ghostCredit[staticGhost1.y - 1][staticGhost1.x] = 1;
            map[staticGhost1.y - 1][staticGhost1.x] = 4;
            map[staticGhost1.y][staticGhost1.x] = 3;
            if (ghostCredit[staticGhost1.y][staticGhost1.x] === 1){
                map[staticGhost1.y][staticGhost1.x] = 2;
                ghostCredit[staticGhost1.y][staticGhost1.x] = 0;
            }
            staticGhost1.y = staticGhost1.y - 1;
        }
        else if (map[staticGhost1.y - 1][staticGhost1.x] == 3){
            map[staticGhost1.y - 1][staticGhost1.x] = 4;
            map[staticGhost1.y][staticGhost1.x] = 3;
            if (ghostCredit[staticGhost1.y][staticGhost1.x] === 1){
                map[staticGhost1.y][staticGhost1.x] = 2;
                ghostCredit[staticGhost1.y][staticGhost1.x] = 0;
            }
            staticGhost1.y = staticGhost1.y - 1;
        }
        else if (map[staticGhost1.y - 1][staticGhost1.x] == 1 ||
            map[staticGhost1.y - 1][staticGhost1.x] == 6 ||
            map[staticGhost1.y - 1][staticGhost1.x] == 7){
            directionUp1 = false;
        }
    }
    else{
        if (map[staticGhost1.y + 1][staticGhost1.x] == 5){
            console.log("Hit!");
            alert("Game Over!");
            location.reload();
        }
        else if (map[staticGhost1.y + 1][staticGhost1.x] == 2){
            ghostCredit[staticGhost1.y + 1][staticGhost1.x] = 1;
            map[staticGhost1.y + 1][staticGhost1.x] = 4;
            map[staticGhost1.y][staticGhost1.x] = 3;
            if (ghostCredit[staticGhost1.y][staticGhost1.x] === 1){
                map[staticGhost1.y][staticGhost1.x] = 2;
                ghostCredit[staticGhost1.y][staticGhost1.x] = 0;
            }
            staticGhost1.y = staticGhost1.y + 1;
        }
        else if (map[staticGhost1.y + 1][staticGhost1.x] == 3){
            map[staticGhost1.y + 1][staticGhost1.x] = 4;
            map[staticGhost1.y][staticGhost1.x] = 3;
            if (ghostCredit[staticGhost1.y][staticGhost1.x] === 1){
                map[staticGhost1.y][staticGhost1.x] = 2;
                ghostCredit[staticGhost1.y][staticGhost1.x] = 0;
            }
            staticGhost1.y = staticGhost1.y + 1;
        }
        else if (map[staticGhost1.y + 1][staticGhost1.x] == 1 ||
            map[staticGhost1.y + 1][staticGhost1.x] == 6 ||
            map[staticGhost1.y + 1][staticGhost1.x] == 7){
            directionUp1 = true;
        }
    }
    drawWorld();
}, 500);

var directionUp2 = false;
var staticGhost2Moves = window.setInterval(function(){
    if (directionUp2){
        if (map[staticGhost2.y - 1][staticGhost2.x] == 5){
            console.log("Hit!");
            alert("Game Over!");
            location.reload();
        }
        else if (map[staticGhost2.y - 1][staticGhost2.x] == 2){
            ghostCredit[staticGhost2.y - 1][staticGhost2.x] = 1;
            map[staticGhost2.y - 1][staticGhost2.x] = 4;
            map[staticGhost2.y][staticGhost2.x] = 3;
            if (ghostCredit[staticGhost2.y][staticGhost2.x] === 1){
                map[staticGhost2.y][staticGhost2.x] = 2;
                ghostCredit[staticGhost2.y][staticGhost2.x] = 0;
            }
            staticGhost2.y = staticGhost2.y - 1;
        }
        else if (map[staticGhost2.y - 1][staticGhost2.x] == 3){
            map[staticGhost2.y - 1][staticGhost2.x] = 4;
            map[staticGhost2.y][staticGhost2.x] = 3;
            if (ghostCredit[staticGhost2.y][staticGhost2.x] === 1){
                map[staticGhost2.y][staticGhost2.x] = 2;
                ghostCredit[staticGhost2.y][staticGhost2.x] = 0;
            }
            staticGhost2.y = staticGhost2.y - 1;
        }
        else if (map[staticGhost2.y - 1][staticGhost2.x] == 1 ||
            map[staticGhost2.y - 1][staticGhost2.x] == 6 ||
            map[staticGhost2.y - 1][staticGhost2.x] == 7){
            directionUp2 = false;
        }
    }
    else{
        if (map[staticGhost2.y + 1][staticGhost2.x] == 5){
            console.log("Hit!");
            alert("Game Over!");
            location.reload();
        }
        else if (map[staticGhost2.y + 1][staticGhost2.x] == 2){
            ghostCredit[staticGhost2.y + 1][staticGhost2.x] = 1;
            map[staticGhost2.y + 1][staticGhost2.x] = 4;
            map[staticGhost2.y][staticGhost2.x] = 3;
            if (ghostCredit[staticGhost2.y][staticGhost2.x] === 1){
                map[staticGhost2.y][staticGhost2.x] = 2;
                ghostCredit[staticGhost2.y][staticGhost2.x] = 0;
            }
            staticGhost2.y = staticGhost2.y + 1;
        }
        else if (map[staticGhost2.y + 1][staticGhost2.x] == 3){
            map[staticGhost2.y + 1][staticGhost2.x] = 4;
            map[staticGhost2.y][staticGhost2.x] = 3;
            if (ghostCredit[staticGhost2.y][staticGhost2.x] === 1){
                map[staticGhost2.y][staticGhost2.x] = 2;
                ghostCredit[staticGhost2.y][staticGhost2.x] = 0;
            }
            staticGhost2.y = staticGhost2.y + 1;
        }
        else if (map[staticGhost2.y + 1][staticGhost2.x] == 1 ||
            map[staticGhost2.y + 1][staticGhost2.x] == 6 ||
            map[staticGhost2.y + 1][staticGhost2.x] == 7){
            directionUp2 = true;
        }
    }
    drawWorld();
}, 500);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
/*randomMoves = [[-1, -1],
                [-1, 1],
                [1, -1],
                [1, 1]];*/
randomMoves = [[0, 1],
                [1, 0],
                [0, -1],
                [-1, 0]];
var randomGhost1Moves = window.setInterval(function(){
    var RG1Moved = false;
    while(true){
        var rm = randomMoves[getRandomInt(randomMoves.length)].slice();
        if (map[randomGhost1.y + rm[1]][randomGhost1.x + rm[0]] == 5){
            console.log("Hit!");
            alert("Game Over!");
            location.reload();
        }
        else if (map[randomGhost1.y + rm[1]][randomGhost1.x + rm[0]] == 2){
            ghostCredit[randomGhost1.y + rm[1]][randomGhost1.x + rm[0]] = 1;
            map[randomGhost1.y + rm[1]][randomGhost1.x + rm[0]] = 6;
            map[randomGhost1.y][randomGhost1.x] = 3;
            if (ghostCredit[randomGhost1.y][randomGhost1.x] === 1){
                map[randomGhost1.y][randomGhost1.x] = 2;
                ghostCredit[randomGhost1.y][randomGhost1.x] = 0;
            }
            randomGhost1.y = randomGhost1.y + rm[1];
            randomGhost1.x = randomGhost1.x + rm[0];
            break;
        }
        else if (map[randomGhost1.y + rm[1]][randomGhost1.x + rm[0]] == 3){
            map[randomGhost1.y + rm[1]][randomGhost1.x + rm[0]] = 6;
            map[randomGhost1.y][randomGhost1.x] = 3;
            if (ghostCredit[randomGhost1.y][randomGhost1.x] === 1){
                map[randomGhost1.y][randomGhost1.x] = 2;
                ghostCredit[randomGhost1.y][randomGhost1.x] = 0;
            }
            randomGhost1.y = randomGhost1.y + rm[1];
            randomGhost1.x = randomGhost1.x + rm[0];
            break;
        }
    }
}, 500);