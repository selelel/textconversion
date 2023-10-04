import { useState } from "react";

const Input = ({addConvert}) => {
  const [value, setvalue] = useState("");

  const onSubmit = e =>{
    e.preventDefault();
    addConvert(value)
    setvalue("");
  }
  return (
    <>
      <div className="">
        <form onSubmit={onSubmit}>
        <textarea className=" text-2xl rounded-2xl w-[30rem] h-[20rem] border-4 border-blue-800 p-3 resize-none" 
        value={value} 
        onChange={(e)=> setvalue(e.target.value) }
        spellCheck= {false}
        ></textarea>

        <button className="flex flex-col font-semibold mx-auto w-fit p-2 rounded text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" type="submit">Convert</button>
        </form>
      </div>
    </>
  );
}
export default Input;