function convertToJejemon(inputText) {
  const conversionMap = {
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

  const convertedText = inputText.toLowerCase().split('').map(char => {
    return conversionMap[char] || char;
  }).join('');

  return convertedText;
}

export default convertToJejemon;