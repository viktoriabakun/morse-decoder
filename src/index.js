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
const numericMorse = {
    '**********': ' '
};

for(key of Object.keys(MORSE_TABLE)) {
    let numericKey = key.split('').map(key => key === '.' ? '10': '11').join('').padStart(10, '0');
    numericMorse[numericKey] = MORSE_TABLE[key];
}
function decode(expr) {
   return expr.match(/.{10}/g) //split by 10 symbols
    .map(numericItem => numericMorse[numericItem]) //get value from numeric morse
    .join('');
}

module.exports = {
    decode
}