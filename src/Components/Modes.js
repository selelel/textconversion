import { Reuse } from "./context/context";

 const SetOfModes = () => {
  const {setMode} = Reuse();
  return (
  <div className='text-2xl mt-2'>
      <select className="w-64 h-10 text-center rounded cursor-pointer bg-slate-300 duration-300 ease-out  hover:shadow-lg " id="modes" onChange={ e => {
        setMode(e.target.value)
      }}>
        <option value="Morse">✨<span>NEW </span>Morse</option>
        <option value="jejemon">✨<span>NEW</span> Jejemon</option>
        <option value="Upper">toUpper</option>
        <option value="Capitalize">capitalize</option>
        <option value="Lower">toLowerCase</option>
        <option value="Camel">toCamelCase</option>
        <option value="Dot">toDotCase</option>
        <option value="Header">toHeaderCase</option>
        <option value="Kebab">toKebabCase</option>
        <option value="Pascal">toPascalCase</option>
        <option value="Path">toPathCase</option>
        <option value="Sentence">toSentenceCase</option>
        <option value="Snake">toSnakeCase</option>
        <option value="Text">toTextCase</option>
      </select>
  </div>)
}

export default SetOfModes;
