import { useState } from "react";

const Input = ({addConvert}) => {
  const [value, setvalue] = useState("Hello, World!");

  const onSubmit = e =>{
    e.preventDefault();
    addConvert(value)
    setvalue("");
  }
  return (
      <div className="lg:w-[30rem] sm:w-[30rem] m-1 mx-auto">
        <form className="flex flex-wrap justify-center" onSubmit={onSubmit}>
        <textarea className="text-2xl rounded-2xl w-full h-[20rem] border-4 border-blue-800 p-3 resize-none m-2" 
        value={value} 
        onChange={(e)=> setvalue(e.target.value) }
        spellCheck= {false}></textarea>

        <button className="font-semibold  w-24 p-2 h-fit text-lg rounded text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" type="submit">Convert</button>
        </form>
      </div>
  );
}
export default Input;