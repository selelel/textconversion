import { createContext, useState } from "react";

const SwitchMode = createContext();
const Provide = ({children}) =>{
  const [mode, setMode] = useState('Morse');
  const value = {
    mode,
    setMode
  }
  console.log(mode)

  return (
  <SwitchMode.Provider value={
    value} >
    {children}
  </SwitchMode.Provider>)

}

export { Provide };
export default SwitchMode;