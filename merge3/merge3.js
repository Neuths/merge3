
let board;
let score = 0;
let rows = 5;
let columns = 5;
let check = 0;
let shouldSet = true;
let mergeTimer;
let mergeDelay;

window.onload = function() {
    setGame(); // Starting board
}


function setGame() { // prepares the game board

    board = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
        ]



    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            //<div id="0-0"></div>
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            let num = board[r][c];
            updateTile(tile, num);
            document.getElementById("board").append(tile);
        }
    }
    setNew();
    setNew();
}

function setNew() { // sets a new tile on board
    let found = false;
    while (!found) {
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);

        if (board[r][c] == 0) {
            board[r][c] = 1;
            let tile = document.getElementById(r.toString() +  "-" + c.toString());
            tile.innerText = "1";
            tile.classList.add("x1");
            found = true;
        }
    }
}

function updateTile(tile, num) { // updates tile visually in HTML
    tile.innerText = "";
    tile.classList.value = ""; //clear the classList
    tile.classList.add("tile");
    if (num > 0) {
        tile.innerText = num;

        if (num <= 12) {
            tile.classList.add("x"+num.toString());
        } else {
            tile.classList.add("x13");
        }
    }
}


function merge() {
    mergeDelay = false;
    scoreCheck = score;
    console.log("hi");
    h5();
    if (mergeDelay == false) {
        console.log("hi2");
        v5();
        if (mergeDelay == false) {
            console.log("hi3");
            h4();
            if (mergeDelay == false) {
                console.log("hi4");
                v4();
                if (mergeDelay == false) {
                    console.log("hi5");
                    h3();
                    if (mergeDelay == false) {
                        console.log("hiiiiiiiiiiiii");
                        v3();
                        if (scoreCheck != score) {
                            wait();
                        }
                    } else {
                        wait();
                    }
                } else {
                    wait();
                }
            } else {
                wait();
            }
        } else {
            wait();
        }
    } else {
        wait();
    }
    
    if (scoreCheck < score) {
        shouldSet = false;
    }

    for (let r = 0; r < rows; r++) { // update all tiles after merging
        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}


function wait() {
    setTimeout(merge, 300);
}


function h5() { // 5 horizontal
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 4; c++) {
            let tile1 = board[r][c];
            let tile2 = board[r][c+1];
            let tile3 = board[r][c+2];
            let tile4 = board[r][c+3];
            let tile5 = board[r][c+4];
            if (tile1 != 0 && tile1 == tile2 && tile2 == tile3 && tile3 == tile4 && tile4 == tile5) {

                console.log("merged 5 " + tile3 + "'s horizontally");
                console.log("Added " + (tile3 * 5) + " points!");
            
                board[r][c] = 0;
                board[r][c+1] = 0;
                board[r][c+2] += 2;
                board[r][c+3] = 0;
                board[r][c+4] = 0;
                score += (tile3 * 5);
                mergeDelay = true;
            }
        }
    }
}

function v5() { // 5 vertical
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 4; r++) {
            let tile1 = board[r][c];
            let tile2 = board[r+1][c];
            let tile3 = board[r+2][c];
            let tile4 = board[r+3][c];
            let tile5 = board[r+4][c];
            if (tile1 != 0 && tile1 == tile2 && tile2 == tile3 && tile3 == tile4 && tile4 == tile5) {

                console.log("merged 5 " + tile3 + "'s vertically");
                console.log("Added " + (tile3 * 5) + " points!");

                board[r][c] = 0;
                board[r+1][c] = 0;
                board[r+2][c] += 2;
                board[r+3][c] = 0;
                board[r+4][c] = 0;
                score += (tile3 * 5);
                mergeDelay = true;
            }
        }
    }
}

function h4() { // 4 horizontal
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            let tile1 = board[r][c];
            let tile2 = board[r][c+1];
            let tile3 = board[r][c+2];
            let tile4 = board[r][c+3];
            if (tile1 != 0 && tile1 == tile2 && tile2 == tile3 && tile3 == tile4) {

                console.log("merged 4 " + tile2 + "'s horizontally");
                console.log("Added " + (tile2 * 4) + " points!");

                board[r][c] = 0;
                board[r][c+1] += 1;
                board[r][c+2] += 1;
                board[r][c+3] = 0;
                score += (tile2 * 4);
                mergeDelay = true;
            }
        }
    }
}

function v4() { // 4 vertical
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 3; r++) {
            let tile1 = board[r][c];
            let tile2 = board[r+1][c];
            let tile3 = board[r+2][c];
            let tile4 = board[r+3][c];
            if (tile1 != 0 && tile1 == tile2 && tile2 == tile3 && tile3 == tile4) {

                console.log("merged 4 " + tile2 + "'s vertically");
                console.log("Added " + (tile2 * 4) + " points!");
            
                board[r][c] = 0;
                board[r+1][c] += 1;
                board[r+2][c] += 1;
                board[r+3][c] = 0;
                score += (tile2 * 4);
                mergeDelay = true;
            }
        }
    }
}

function h3() { // 3 horizontal
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 2; c++) {
            let tile1 = board[r][c];
            let tile2 = board[r][c+1];
            let tile3 = board[r][c+2];
            if (tile1 != 0 && tile1 == tile2 && tile2 == tile3) {

                console.log("merged 3 " + tile2 + "'s horizontally");
                console.log("Added " + (tile2 * 3) + " points!");
            
                board[r][c] = 0;
                board[r][c+1] += 1;
                board[r][c+2] = 0;
                score += (tile2 * 3);
                mergeDelay = true;
            }
        }
    }
}

function v3() { // 3 vertical
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 2; r++) {
            let tile1 = board[r][c];
            let tile2 = board[r+1][c];
            let tile3 = board[r+2][c];
            if (tile1 != 0 && tile1 == tile2 && tile2 == tile3) {

                console.log("merged 3 " + tile2 + "'s vertically");
                console.log("Added " + (tile2 * 3) + " points!");
            
                board[r][c] = 0;
                board[r+1][c] += 1;
                board[r+2][c] = 0;
                score += (tile2 * 3);
                mergeDelay = true;
            }
        }
    }
}

function slide(row) { // prepares the direction of the slide
    for (i = 1; i < row.length; i++) {
      if (row[i-1] == 0) {
        row[i-1] = row[i];
        row[i] = 0;
      }
    }
    return row;
}

// slideLeft() - slideDown() moves the tiles
function slideLeft() {
    for(let r = 0; r < rows; r++) {
        let row = board[r];
        row = slide(row);
        board[r] = row;

        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }

}

function slideRight() {
    for(let r = 0; r < rows; r++) {
        let row = board[r];
        row.reverse();
        row = slide(row);
        row.reverse();
        board[r] = row;

        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}

function slideUp() {
    for(let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c], board[4][c]];
        row = slide(row);
        board[0][c] = row[0];
        board[1][c] = row[1];
        board[2][c] = row[2];
        board[3][c] = row[3];
        board[4][c] = row[4];

        for (let r = 0; r < rows; r++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}

function slideDown() {
    for(let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c], board[4][c]];
        row.reverse();
        row = slide(row);
        row.reverse();
        board[0][c] = row[0];
        board[1][c] = row[1];
        board[2][c] = row[2];
        board[3][c] = row[3];
        board[4][c] = row[4];

        for (let r = 0; r < rows; r++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}


document.addEventListener("keyup", (e) => { // takes the arrow key presses
    console.log("move");
    let move = false;
    shouldSet = true;
    if (e.code == "ArrowLeft" || e.code == "KeyA") {
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns - 1; c++) {
                if (board[r][c] == 0 && 0 != board[r][c+1]){
                    move = true;
                }
            }
        }
        slideLeft();
    } else if (e.code == "ArrowRight" || e.code == "KeyD") {
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns - 1; c++) {
                if (board[r][c+1] == 0 && 0 != board[r][c]){
                    move = true;
                }
            }
        }
        slideRight();
    } else if (e.code == "ArrowUp" || e.code == "KeyW") {
        for (let c = 0; c < columns; c++) {
            for (let r = 0; r < rows - 1; r++) {
                if (board[r][c] == 0 && 0 != board[r+1][c]){
                    move = true;
                }
            }
        }
        slideUp();
    } else if (e.code == "ArrowDown" || e.code == "KeyS") {
        for (let c = 0; c < columns; c++) {
            for (let r = 0; r < rows - 1; r++) {
                if (board[r+1][c] == 0 && 0 != board[r][c]){
                    move = true;
                }
            }
        }
        slideDown();
    }

    merge();

    if (move == true && shouldSet == true) {
        setNew();
        shouldSet = false;
    }

    document.getElementById("score").innerText = score;
})