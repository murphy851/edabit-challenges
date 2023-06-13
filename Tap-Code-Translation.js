// Challange https://edabit.com/challenge/ihrD5RjtD34ThEb4z

// Tap code is a way to communicate messages via a series of taps (or knocks) for each letter in
// the message. Letters are arranged in a 5x5 polybius square, with the letter "K" being moved
// to the space with "C".

// Each letter is translated by tapping out the row and column number that the letter appears
// in, leaving a short pause in-between. If we use "." for each tap, and a single space to denote
// the pause:

// Another space is added between the groups of taps for each letter to give the final code:

//Write a function that returns the tap code if given a word, or returns the translated word 
// (in lower case) if given the tap code. When translating from tap-code, default to the letter 
//"c" if the tap-code ". ..." is found.

function words(text) {
    var tap = [
      ["A", "B", "C/K", "D", "E"],
      ["F", "G", "H", "I", "J"],
      ["L", "M", "N", "O", "P"],
      ["Q", "R", "S", "T", "U"],
      ["V", "W", "X", "Y", "Z"],
    ];
    var result = [];
    text = text.toUpperCase().split("");
    for (var i = 0; i < text.length; i++) {
      for (var j = 0; j < tap.length; j++) {
        for (var k = 0; k < tap[j].length; k++) {
          if (tap[j][k].indexOf(text[i]) != -1) {
            result.push([j + 1], [k + 1]);
            // console.log([j+1]);
            // console.log([k+1]);
          }
        }
      }
    }
    var finalResult = [];
    var hold = "";
    for (var i = 0; i < result.length; i++) {
      for (var j = 0; j < result[i]; j++) {
        hold += ".";
      }
      finalResult.push([hold]);
      hold = "";
    }
    return finalResult.join(" ");
  }
  
  function dots(text) {
    var result = [];
    var tap = [
      ["A", "B", "C", "D", "E"],
      ["F", "G", "H", "I", "J"],
      ["L", "M", "N", "O", "P"],
      ["Q", "R", "S", "T", "U"],
      ["V", "W", "X", "Y", "Z"],
    ];
  
    var dots = text.split(" ");
    for (var i = 0; i < dots.length; i = i + 2) {
      result.push(tap[dots[i].length-1][dots[i+1].length-1]);
    }
    return result.join("").toLowerCase();
  }
  
  function tapCode(text) {
    if (/[a-zA-Z]/.test(text)) {
      return words(text);
    } else {
      return dots(text);
    }
  }

  console.log(tapCode("greeting"));
// Expected result = ".. .. .... .. . ..... . ..... .... .... .. .... ... ... .. .."