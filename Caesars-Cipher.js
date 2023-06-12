// Challange https://edabit.com/challenge/a33jdGXkaQRtK9ZTs

// Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's
// cipher (check Resources tab for more info) shifts each letter by a number of letters. If the
// shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In
// the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

// Create a function that takes a string s (text to be encrypted) and an integer k (the rotation
// factor). It should return an encrypted string.

function caesarCipher(s, k) {
  s = s.split("");

  var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  var result = [];
  var match = 0;
  var upper = false;

  for (var i = 0; i < s.length; i++) {
      if (s[i] == s[i].toUpperCase()) {
          upper = true;
          s[i] = s[i].toLowerCase();
      }
      for (var j = 0; j < alphabet.length; j++) {
          if ((s[i]) == alphabet[j] && match == 0) {
              var possition = (j + k) % 26;
              if (upper == true) {
                  result.push(alphabet[possition].toUpperCase());
              } else {
                  result.push(alphabet[possition]);
              }
              match++;
          }
      }
      if (match == 0) {
          result.push(s[i]);
      }
      match = 0;
      upper = false;
  }
  return result.join("");
}

console.log(caesarCipher("middle-Outz", 2));
// Expected result = "okffng-Qwvb"