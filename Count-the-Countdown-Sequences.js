// Challange https://edabit.com/challenge/HW4ZzYmDaASKfwdq6

// A countdown sequence is a descending sequence of k integers from k down to 1 (e.g. 5, 4,
// 3, 2, 1). Write a function that returns an array of the form[x, y] where x is the number of
// countdown sequences in the given array and y is the array of those sequences in the order in
// which they appear in the array.

function finalCountdown(arr) {
    var count = 0;
    var seq = [];
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 1 && arr[i - 1] != arr[i] + 1) {
            seq.push(1);
            result.push(seq);
            seq = [];
        }
        if (arr[i + 1] == arr[i] - 1) {
            seq.pop();
            seq.push(arr[i], arr[i + 1]);
        } else {
            if (seq.length > 0 && seq[seq.length - 1] == 1) {
                result.push(seq);
                seq = [];
            } else {
                seq = [];
            }
        }
    }
    return [result.length, result];
}

console.log(finalCountdown([3,2,1,5,5,3,2,1,5,5]));
//Expected Result = [2, [[3, 2, 1], [3, 2, 1]]]