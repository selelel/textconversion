import { useState } from 'react';
import Input from './Convert'
import Output from './Ouput';


const Header = () => {
  const [Convert, setConvert] = useState("");


  const addConvert = content => {
    setConvert(content)
  }

  return(
    <div className=" ">
      <div className="text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <h1 className="font-semibold text-xl text-white">Convert the Text</h1>
        <h1 className="font-thin text-sm text-white">Capitalize, UpperCaps, & LowerCaps</h1>
      </div>
      <div className='flex justify-center'>

      </div>

      <div className='p-12 flex justify-evenly flex-warp'>
        <Input addConvert={addConvert}/>
        <Output contentConvert={Convert}/>
      </div>
    </div>
  );
  }

export default Header;