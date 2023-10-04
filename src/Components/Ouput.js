import { toCamelCase,toDotCase,toHeaderCase,toKebabCase,toPascalCase,toPathCase,toLowerCase,toSentenceCase,toSnakeCase,toTextCase,t } from 'js-convert-case';
import capitalize from 'capitalize';
import convertToJejemon from './jejemonConverter.js/jejemon';
import toUpper from 'lodash.toupper';
import copy from 'copy-text-to-clipboard';

let conversion = e => {
  return 'toLower' + e ;
}

const Output = ({contentConvert}) => {
  
  return (
    <div>
      <div className=" text-2xl rounded-2xl w-[30rem] h-[20rem] border-4 border-blue-800 p-3">
        <h1>{convertToJejemon(contentConvert)}</h1>
      </div>
      <button className=" mt-1 w-19 flex flex-col font-semibold mx-auto p-2 rounded text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      onClick={() => {
        copy(convertToJejemon(convertToJejemon(contentConvert)))}
      }>Copy</button>
    </div>

  );
}

export default Output;