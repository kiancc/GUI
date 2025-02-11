export function generateBoard() {
    // initialises board
    // -----------------
    let board = Array();

    for (let i = 0; i < 8; i++) {
        const row = Array();
        for (let j = 0; j < 8; j++) {
            row.push(null);
        }
        board.push(row);
    }
    // console.log(board);
    // -----------------

    // adds random mines
    // -----------------
    const num_mines = 10;
    for (let i = 0; i < num_mines; i++) {
        let m = Math.floor(Math.random() * 8);
        let n = Math.floor(Math.random() * 8);
        while (board[m][n] != null) {
        m = Math.floor(Math.random() * 8);
        n = Math.floor(Math.random() * 8);
        }
        board[m][n] = "X";
    }
    // console.log(board);
    // -----------------

    // populates num adj mines in squares
    // -----------------
    for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        let num_mines = 0;
        if (board[i][j] != "X") {
        const adj_pos = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]];
        for (let n = 0; n < adj_pos.length; n++) {
            const idx = adj_pos[n][0] + i;
            const jdx = adj_pos[n][1] + j;
            // if the surrounding indicies are in bounds count number of mines;
            if ((0 <= idx && idx < 8) && (0 <= jdx && jdx < 8)) {
            if (board[idx][jdx] === "X") {
                num_mines++;
            }
            
            }
        }
        board[i][j] = num_mines;    
        }
    }
    }
    // console.log(board);
    // -----------------
    return board;
}