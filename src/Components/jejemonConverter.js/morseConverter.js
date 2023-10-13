function textToMorseCode(input) {
  const morseCodeMap = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.', 
    'D': '-..', 
    'E': '.',
    'F': '..-.', 
    'G': '--.',  
    'H': '....',  
    'I': '..',  
    'J': '.---',
    'K': '-.-',  
    'L': '.-..', 
    'M': '--',    
    'N': '-.',  
    'O': '---',
    'P': '.--.', 
    'Q': '--.-', 
    'R': '.-.',   
    'S': '...', 
    'T': '-',
    'U': '..-',  
    'V': '...-', 
    'W': '.--',   
    'X': '-..-', 
    'Y': '-.--',
    'Z': '--..',
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
    ' ': ' '
  };

  const inputUpper = input.toUpperCase();
  const words = inputUpper.split(' ');
  const morseWords = words.map(word => {
    const letters = word.split('');
    const morseLetters = letters.map(letter => {
      return morseCodeMap[letter] || '';
    });
    return morseLetters.join(' ');
  });

  return morseWords.join('   ');
}


export default textToMorseCode;
