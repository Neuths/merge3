
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
            let tile = document.createElement("div"); // creates 25 id's so that each square has an id, done with looping
            tile.id = r.toString() + "-" + c.toString();
            let num = board[r][c];
            updateTile(tile, num); // updates the tile, gets looped
            document.getElementById("board").append(tile);
        }
    }
    setNew();
    setNew();
}

function setNew() { // borrowed - randomly sets a new tile on board
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

function updateTile(tile, num) { // borrowed - updates tile visually in HTML
    tile.innerText = "";
    tile.classList.value = ""; //clear the classList
    tile.classList.add("tile");
    if (num > 0) {
        tile.innerText = num;

        if (num <= 12) {
            tile.classList.add("x"+num.toString());
        } else {
            tile.classList.add("x13"); // doesn't change tile style after 13th tile
        }
    }
}


function merge() {  // giant pyramid just for the delay, otherwise you cannot add delay between the merges properly (since it is very hard to stop JavaScript code from running)
    mergeDelay = false;
    scoreCheck = score;
    v5();
    if (mergeDelay == false) { // makes sure that the function is restarted with delay after a merge happens
        h5();
        if (mergeDelay == false) {
            v4();
            if (mergeDelay == false) {
                h4();
                if (mergeDelay == false) {
                    v3();
                    if (mergeDelay == false) {
                        h3();
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
        shouldSet = false; // if a merge has happened, don't set a new tile
    }

    for (let r = 0; r < rows; r++) { // update all tiles after merging
        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num); // updates all the tiles after merging
        }
    }
}


function wait() { // attempt at making the game have delay when merging
    setTimeout(merge, 300);
}

// functions h5 to v3 check for different types of merges, they needed to be separated so that they don't run all at once and merge delay can be added
function h5() { // 5 horizontal
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 4; c++) {
            let tile1 = board[r][c]; // checks 5 tiles in a row for merging
            let tile2 = board[r][c+1];
            let tile3 = board[r][c+2];
            let tile4 = board[r][c+3];
            let tile5 = board[r][c+4];
            if (tile1 != 0 && tile1 == tile2 && tile2 == tile3 && tile3 == tile4 && tile4 == tile5) { // if 5 tiles in a row are same and not 0

                console.log("merged 5 " + tile3 + "'s horizontally"); // concole.log tracking
                console.log("Added " + (tile3 * 5) + " points!");
                
                board[r][c] = 0; // how game handles merging, for 5-in-a-row it upgrades the middle tile twice
                board[r][c+1] = 0;
                board[r][c+2] += 2;
                board[r][c+3] = 0;
                board[r][c+4] = 0;
                score += (tile3 * 5); // adds points to score
                mergeDelay = true; // a merge has happened, so it will delay the next merge
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

function slide(row) { // prepares the direction of the slide, taking all zeroes and moving them in the opppsite direction
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
        row = slide(row); // prepares row
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
        row.reverse(); // does the same as slideLeft() but reverses the row twice, once before moving the row and once after so that the same function can be used
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
        board[0][c] = row[0]; // for up and down the rows need to be made vertical, otherwise same logic
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


document.addEventListener("keyup", (e) => { // top part borrowed - takes the arrow key presses
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

    merge(); // if a merge happens it runs itself again until no merges happen

    if (move == true && shouldSet == true) { // checks if any of the tiles moved after keypress, and if a merge has happened
        setNew(); // new tile
        shouldSet = false; // reset setting
        wait();
    }

    document.getElementById("score").innerText = score; // update score
})
