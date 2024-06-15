
var board;
var score = 0;
var rows = 4;
var columns = 4;
let check = 0;

window.onload = function() {
    setGame(); // Starting board
}

function setGame() {
    // board = [
    //     [0, 8, 0, 0],
    //     [0, 0, 16, 0],
    //     [0, 2, 0, 0],
    //     [0, 4, 0, ]
    // ]

    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
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
    setTwo();
    setTwo();
}

function hasEmptyTile() {
    for(let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c] == 0){
                return true;
            }
        }
    }
}

function copy(board) {
    let extra = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            extra[r][c] = board[r][c];
        }
    }
    return extra;
}

function setTwo() {
    let found = false;
    while (!found) {
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);

        if (board[r][c] == 0) {
            board[r][c] = 2
            let tile = document.getElementById(r.toString() +  "-" + c.toString());
            tile.innerText = "2";
            tile.classList.add("x2");
            found = true;
        }
    }
}


function updateTile(tile, num) {
    tile.innerText = "";
    tile.classList.value = ""; //clear the classList
    tile.classList.add("tile");
    if (num > 0) {
        tile.innerText = num;
        if (num <= 4096) {
            tile.classList.add("x"+num.toString());
        } else {
            tile.classList.add("x8192");
        }
    }
}

document.addEventListener("keyup", (e) => {
    if (e.code == "ArrowLeft") {
        let move = false;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns - 1; c++) {
                if (board[r][c] != 0 && board[r][c] == board[r][c+1]){
                    move = true;
                }
                if (board[r][c] == 0 && 0 < board[r][c+1]){
                    move = true;
                }
            }
        }
        slideLeft();
        if (move == true) {
            setTwo();
        }
    } else if (e.code == "ArrowRight") {
        let move = false;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < columns - 1; c++) {
                if (board[r][c] != 0 && board[r][c] == board[r][c+1]){
                    move = true;
                }
                if (board[r][c+1] == 0 && 0 < board[r][c]){
                    move = true;
                }
            }
        }
        slideRight();
        if (move == true) {
            setTwo();
        }
    } else if (e.code == "ArrowUp") {
        let move = false;
        for (let c = 0; c < columns; c++) {
            for (let r = 0; r < rows - 1; r++) {
                if (board[r][c] != 0 && board[r][c] == board[r+1][c]){
                    move = true;
                }
                if (board[r][c] == 0 && 0 < board[r+1][c]){
                    move = true;
                }
            }
        }
        slideUp();
        if (move == true) {
            setTwo();
        }
    } else if (e.code == "ArrowDown") {
        let move = false;
        for (let c = 0; c < columns; c++) {
            for (let r = 0; r < rows - 1; r++) {
                if (board[r][c] != 0 && board[r][c] == board[r+1][c]){
                    move = true;
                }
                if (board[r+1][c] == 0 && 0 < board[r][c]){
                    move = true;
                }
            }
        }
        slideDown();
        if (move == true) {
            setTwo();
        }
    }
    document.getElementById("score").innerText = score;
})

function filterZero(row) {
    return row.filter(num => num != 0); //create a new array
}

function slide(row) {
    row = filterZero(row);

    for (let i = 0; i < row.length - 1; i++) {
        if (row[i] == row[i+1]) {
            row[i] *= 2;
            row[i+1] = 0;
            score += row[i];
        }
    }

    row = filterZero(row);

    while (row.length < columns) {
        row.push(0);
    }

    return row;

}

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
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row = slide(row);
        board[0][c] = row[0];
        board[1][c] = row[1];
        board[2][c] = row[2];
        board[3][c] = row[3];

        for (let r = 0; r < rows; r++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}

function slideDown() {
    for(let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row.reverse();
        row = slide(row);
        row.reverse();
        board[0][c] = row[0];
        board[1][c] = row[1];
        board[2][c] = row[2];
        board[3][c] = row[3];

        for (let r = 0; r < rows; r++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}