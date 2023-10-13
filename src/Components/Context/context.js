import { createContext, useContext, useState } from "react";

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

const Reuse = () => {
  return useContext(SwitchMode);
}

export { Provide, Reuse };
export default SwitchMode;