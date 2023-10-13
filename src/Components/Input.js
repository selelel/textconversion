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
        <textarea className="text-2xl bg-white/5 backdrop-blur-sm rounded-2xl w-full h-[20rem] border-4 border-cos-dark_purple p-3 resize-none m-2 mb-4  duration-500 ease-out text-black hover:border-cos-onHover hover:scale-105" 
        value={value} 
        onChange={(e)=> setvalue(e.target.value) }
        spellCheck= {false}></textarea>

        <button className="font-semibold w-24 p-2 h-fit text-lg rounded text-white bg-cos-dark_purple duration-100 ease-out hover:bg-cos-onHover" type="submit">Convert</button>
        </form>
      </div>
  );
}
export default Input;