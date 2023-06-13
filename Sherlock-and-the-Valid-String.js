// Challange https://edabit.com/challenge/HXAWjd2Nkj8eAJ2xY

// Sherlock considers a string to be valid if all characters of the string appear the same number
// of times. It is also valid if he can remove just 1 character at 1 index in the string, and the
// remaining characters will occur the same number of times. Given a string str, determine if
// it is valid. If so, return "YES", otherwise return "NO".

function isValid(str) {
    var count = 0;
    var arr = str.split("");
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < res.length; j++) {
            if (arr[i] == res[j][0]) {
                res[j] = [res[j][0], res[j][1] + 1];
                count++;
            }
        }
        if (count == 0) {
            res.push([arr[i], 1]);
        }
        count = 0;
    }

    var check = [res[0][1]];
    for (var i = 0; i < res.length - 1; i++) {
        if (res[i + 1][1] != res[0][1]) {
            check.push(res[i + 1][1]);
        }
    }

    if (check.length == 1) {
        return "YES";
    } else if (check.length == 2 && check[0] == check[1] - 1) {
        return "YES";
    } else {
        return "NO";
    }
}

console.log(isValid("aabbccddeefghi"));
// "NO"