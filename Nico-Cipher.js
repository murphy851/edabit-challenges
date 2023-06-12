// Challange https://edabit.com/challenge/MvjvGjhm8haxACN3o

// In Nico Cipher, encoding is done by creating a numeric key and assigning each letter
// position of the message with the provided key.

// Create a function that takes two arguments, key and message, and returns the encoded message.

function sortMultiArray(column, arr) {
    arr.sort(compareSecondColumn);

    function compareSecondColumn(a, b) {
        if (a[column] === b[column]) {
            return 0;
        } else {
            return (a[column] < b[column]) ? -1 : 1;
        }
    }
}

function nicoCipher(message, key) {
    var messageLen = message.length;
    var keyLen = key.length;
    key = key.split("");
    var assign = [];
    for (var i = 0; i < key.length; i++) {
        assign.push([key[i], i + 1]);
    }
    sortMultiArray(0, assign);

    for (var i = 0; i < assign.length; i++) {
        assign[i].push(i + 1);
    }
    sortMultiArray(1, assign);

    var result = [];
    message = message.split("");

    for (var i = 0; i < messageLen + Math.abs(messageLen % keyLen - keyLen); i++) {
        if (message[i] == null) {
            message[i] = " ";
        }
        result.push([message[i], assign[i % assign.length][2]]);
    }

    sortMultiArray(1, result);

    var final = [];
    for (var j = 0; j < (messageLen + Math.abs(messageLen % keyLen - keyLen)) / keyLen; j++) {
        for (var i = 0; i < messageLen + Math.abs(messageLen % keyLen - keyLen); i = i + (messageLen + Math.abs(messageLen % keyLen - keyLen)) / keyLen) {
            final.push(result[i + j][0]);
        }
    }

    return final.join("");
}

console.log(nicoCipher("mubashirhassan", "crazy"));
// Expected result = "bmusarhiahass n"