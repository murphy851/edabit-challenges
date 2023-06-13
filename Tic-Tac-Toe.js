// Challange https://edabit.com/challenge/JgjQDgNp4nQuMv2LA

// Create a function that takes a Tic-tac-toe board and returns "X" if the X's are placed in a
// way that there are three X's in a row or returns "O" if there are three O's in a row.

function whoWon(board) {
    var result = [];

    for (var i = 0; i < board.length; i++) {
        if (board[i][0] == board[i][1] && board[i][1] == board[i][2]) {
            result.push(board[i][0]);
        }
        if (board[0][i] == board[1][i] && board[1][i] == board[2][i]) {
            result.push(board[0][i]);
        }
    }
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
        result.push(board[0][0]);
    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
        result.push(board[0][2]);
    }

    //Remove Duplicate Results
    result = [...new Set(result)];

    // Return result
    if (result.length == 1) {
        return result[0];
    } else {
        return "Tie";
    }
}

console.log(whoWon([
    ["X", "X", "X"],
    ["O", "X", "O"],
    ["X", "O", "O"]
]));
// Expected result = "X"