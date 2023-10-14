import { useState } from 'react';
import Input from './Components/Input'
import Output from './Components/Ouput';
import SetOfModes from './Components/Modes';
import Logo from './Components/image/v.svg'
import Git from './Components/image/icons8-github.svg'

const Header = () => {
  const [Convert, setConvert] = useState("");

  const addConvert = content => {
    setConvert(content)
  }

  return(
    <>
      {/* <div className="fixed bottom-0 w-full text-center bg-green-400  border-b border-green-700 font-mono text-md text-white font-semibold">
        Web on Development<br/>
        <span className="font-thin text-sm">(Capitalize, UpperCaps, & LowerCaps options not Added)</span>
      </div> */}

      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-fit flex justify-between ">
        <div className="flex my-auto cursor-pointer duration-500 ease-out hover:drop-shadow-lg ">
        <img src={Logo} className='w-8 py-3 h-fit ml-8 my-auto fill-slate-50 drop-shadow-md'></img>
        <h1 className="w-fit font-bold text-2xl text-white drop-shadow-sm  h-fit my-auto">erText</h1>
        </div>
        <a className = 'h-fit my-auto'href='https://github.com/selelel/vertext'><img className='mr-8 w-11 duration-500 ease-out hover:drop-shadow-md cursor-pointer' src={Git}></img></a>
      </div>
      <div className='flex justify-center'>
      <SetOfModes />
      </div>
      
      <div className='p-3 grid lg:grid-cols-2 md:grid-cols-1 place-content-center mb-10'>
        <Input addConvert={addConvert}/>
        <Output contentConvert={Convert}/>
      </div>

    </>
  );
  }

export default Header;