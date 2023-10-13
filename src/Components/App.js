import { useState } from 'react';
import Input from './Convert'
import Output from './Ouput';
import SetOfModes from '../Modes';


const Header = () => {
  const [Convert, setConvert] = useState("");


  const addConvert = content => {
    setConvert(content)
  }

  return(
    <div className=" ">
      <div className="fixed bottom-0 w-full text-center bg-green-400  border-b border-green-700 font-mono text-md text-white font-semibold">
        Web on Development<br/>
        <span className="font-thin text-sm">(Capitalize, UpperCaps, & LowerCaps options not Added)</span>
      </div>
      <div className="text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h1 className="font-semibold text-xl text-white">Convert the Text</h1>
        <h1 className="font-thin text-sm text-white">Capitalize, UpperCaps, & ETC</h1>
      </div>

      <div className='flex justify-center'>
      <SetOfModes />
      </div>

      
      <div className='p-3 grid lg:grid-cols-2 md:grid-cols-1 place-content-center mb-10'>
        <Input addConvert={addConvert}/>
        <Output contentConvert={Convert}/>
      </div>

    </div>
  );
  }

export default Header;