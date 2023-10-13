const toMorse = (inputText) => {
  const toMorse = inputText.toLowerCase().split('').map(char => {
    return morseCodeMap[char] || char;
  }).join(' ');
  return toMorse;
}

const toJejemon = (inputText) => {
  const toJejemon = inputText.toLowerCase().split('').map(char => {
    return ToJejemonMap[char] || char;
  }).join('');
  return toJejemon;
}
const ToJejemonMap = {
  'a': '4',
  'b': 'B',
  'd': 'D',
  'c': '¢',
  'e': 'E',
  'g': 'G',
  'h': 'h',
  'i': '!',
  'k': 'k',
  'l': '1',
  'o': '0',
  'p': 'P',
  's': '$',
  't': '7',
  'u': 'U',
  'v': '√',
  'x': '><',
  'z': '7',
  };

  const morseCodeMap = {
    'a': '.-',
    'b': '-...',
    'c': '-.-.', 
    'd': '-..', 
    'e': '.',
    'f': '..-.', 
    'g': '--.',  
    'h': '....',  
    'i': '..',  
    'j': '.---',
    'k': '-.-',  
    'l': '.-..', 
    'm': '--',    
    'n': '-.',  
    'o': '---',
    'p': '.--.', 
    'q': '--.-', 
    'r': '.-.',   
    's': '...', 
    't': '-',
    'u': '..-',  
    'v': '...-', 
    'w': '.--',   
    'x': '-..-', 
    'y': '-.--',
    'z': '--..',
    '1': '.----', 
    '2': '..---', 
    '3': '...--', 
    '4': '....-', 
    '5': '.....',
    '6': '-....', 
    '7': '--...', 
    '8': '---..', 
    '9': '----.', 
    '0': '-----',
    ' ': ' ',
    ',': ' ',
    '.': ' ',
    '?': ' ',
    '!': ' ',
    '@': ' ',
    '#': ' ',
    '$': ' ',
    '%': ' ',
    '^': ' ',
    '&': ' ',
    '*': ' ',
    '(': ' ',
    ')': ' ',
    '{': ' ',
    '}': ' ',

  };

export {toJejemon, toMorse};