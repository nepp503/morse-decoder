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
    let lettersInNumbers = createLettersInNumbers(expr);
    return decodeNumbers(lettersInNumbers);
}

module.exports = {
    decode
}

function createLettersInNumbers(expr){
    let lettersInNumbers = [];
    for(let i=0; i<expr.length; i+=10){
        lettersInNumbers.push(expr.substring(i, i+10));
    }
    return lettersInNumbers;
}

function decodeNumbers(lettersInNumbers){
    let result = "";
    for(let number of lettersInNumbers){
        let letter = "";
        for(let j=0; j<number.length; j++){
            if(number[j] === "1"){
                if(number[j+1] === "0") letter += ".";
                if(number[j+1] === "1") letter += "-";
                j++;
            }else if(number[j] === "*") {
                letter = ' ';
                break;
            }
        }
        result += decodeLetter(letter);
    }
    return result;
}

function decodeLetter(letter){
    return (letter === ' ' ? letter : MORSE_TABLE[letter]);
}