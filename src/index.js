const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let exprArray = expr.split('');
  let res = '';
  let morseChar = '';
  while (exprArray.length > 0) {
    let chunk = exprArray.splice(0, 10);
    if (chunk[0] === '*') {
      res += ' ';
      continue;
    } else {
      while (chunk.length > 0) {
        let morseSymb = chunk.splice(0, 2).join('');
        if (morseSymb === '10') morseChar += '.';
        if (morseSymb === '11') morseChar += '-';
      }
      res += MORSE_TABLE[morseChar];
      morseChar = '';
    }
  } 
  return res;
}

module.exports = {
    decode
}
