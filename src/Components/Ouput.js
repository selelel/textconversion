import { toCamelCase,toDotCase,toHeaderCase,toKebabCase,toPascalCase,toPathCase,toLowerCase,toSentenceCase,toSnakeCase,toTextCase } from 'js-convert-case';
import capitalize from 'capitalize';
import { toMorse, toJejemon } from './convert/convertmode_functions';
import toUpper from 'lodash.toupper';
import copy from 'copy-text-to-clipboard';
import Reuse from './context/reuseable';

const Output = ({contentConvert}) => {
  const {mode} = Reuse();
    const mode_ = {
      "jejemon": toJejemon(contentConvert),
      "Capitalize": capitalize(contentConvert),
      "Camel": toCamelCase(contentConvert),
      "Dot": toDotCase(contentConvert),
      "Header": toHeaderCase(contentConvert),
      "Kebab": toKebabCase(contentConvert),
      "Pascal": toPascalCase(contentConvert),
      "Path": toPathCase(contentConvert),
      "Lower": toLowerCase(contentConvert),
      "Sentence": toSentenceCase(contentConvert),
      "Snake": toSnakeCase(contentConvert),
      "Text": toTextCase(contentConvert),
      "Upper": toUpper(contentConvert),
      "Morse": toMorse(contentConvert),
      "Default": toUpper(contentConvert),
    }

  return (
    <div className='lg:w-[30rem] sm:w-[30rem] flex flex-wrap justify-center m-1 mx-auto '>
      <textarea readOnly className="text-2xl rounded-2xl w-full h-[20rem] border-4 border-blue-800 p-3 resize-none m-2 overflow-auto" value={mode_[mode]}>
      </textarea>
    
      <button className=" w-24 font-semibold p-2 h-fit text-lg rounded text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      onClick={() => {
        copy(mode_[mode])}
      }>Copy</button>
    </div>

  );
}


export default Output;