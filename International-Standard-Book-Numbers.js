// Challange https://edabit.com/challenge/C5mooK3wfdhoooeLw

// The International Standard Book Number (ISBN) is a unique identifying number given to
// each published book. ISBNs assigned after January 2007 are 13 digits long (ISBN-13),
// however books with 10-digit ISBNs are still in wide use.

function isbn13(str) {
    var array = str.split("");
    var sum = 0;

    // Check ISBN-10
    if (str.length == 10) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == "X") {
                array[i] = 10;
            }
            sum += (array[i] * (str.length - i));
        }
        if (sum % 11 == 0) {
            var newStr = "978" + str.replace("X", "1");
            // Check Closest ISBN-13
            var higher = true;
            for (var j = 1; j < 10; j++) {
                sum = 0;
                if (higher == true) {
                    array2 = (parseInt(parseInt(newStr)) + j).toString().split("");
                    newStr = parseInt(parseInt(newStr) + j);
                    higher = false;
                } else {
                    array2 = (parseInt(parseInt(newStr)) - j).toString().split("");
                    newStr = parseInt(parseInt(newStr) - j);
                    higher = true;
                }
                for (var i = 0; i < array2.length; i++) {
                    if (i % 2 == 0) {
                        sum += (array2[i] * 1);
                    } else {
                        sum += (array2[i] * 3);
                    }
                }
                if (sum % 10 == 0) {
                    return array2.join("");
                }
                sum = 0;
            }
        } else {
            return "Invalid";
        }
    }

    // Check ISBN-13
    if (str.length == 13) {
        for (var i = 0; i < array.length; i++) {
            if (i % 2 == 0) {
                sum += (array[i] * 1);
            } else {
                sum += (array[i] * 3);
            }
        }
        if (sum % 10 == 0) {
            return "Valid";
        } else {
            return "Invalid";
        }
    }
}

console.log(isbn13("9783866155237"));
// Expected result = "Valid"

console.log(isbn13("0316066524"));
// Expected result = "9780316066525"

