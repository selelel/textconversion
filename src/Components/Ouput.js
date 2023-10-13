import { toCamelCase,toDotCase,toHeaderCase,toKebabCase,toPascalCase,toPathCase,toLowerCase,toSentenceCase,toSnakeCase,toTextCase } from 'js-convert-case';
import textToMorseCode from './jejemonConverter.js/morseConverter';
import capitalize from 'capitalize';
import convertToJejemon from './jejemonConverter.js/jejemon';
import toUpper from 'lodash.toupper';
import copy from 'copy-text-to-clipboard';
import Reuse from './Context/reuseable';


const Output = ({contentConvert}) => {
  const {mode} = Reuse();
  const convert_text = () =>{
    switch(mode){
      case "jejemon":
        return convertToJejemon(contentConvert);
      case "Capitalize":
        return capitalize(contentConvert);
      case "Camel":
        return toCamelCase(contentConvert);
      case "Dot":
        return toDotCase(contentConvert);
      case "Header":
        return toHeaderCase(contentConvert);
      case "Kebab":
        return toKebabCase(contentConvert);
      case "Pascal":
        return toPascalCase(contentConvert);
      case "Path":
        return toPathCase(contentConvert);
      case "Lower":
        return toLowerCase(contentConvert);
      case "Sentence":
        return toSentenceCase(contentConvert);
      case "Snake":
        return toSnakeCase(contentConvert);
      case "Text":
        return toTextCase(contentConvert);
      case "Upper":
        return toUpper(contentConvert);
      case "Morse":
        return textToMorseCode(contentConvert);
      default:
        return toUpper(contentConvert);
    } 
  }

  return (
    <div className='lg:w-[30rem] sm:w-[30rem] flex flex-wrap justify-center m-1 mx-auto '>
      <textarea readOnly className="text-2xl rounded-2xl w-full h-[20rem] border-4 border-blue-800 p-3 resize-none m-2 overflow-auto"
      value={convert_text() }>

      </textarea>
      
      <button className=" w-19 font-semibold p-2 mt-7 text-lg rounded text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      onClick={() => {
        copy(convert_text())}
      }>Copy</button>
    </div>

  );
}

export default Output;