import { useContext } from "react";
import SwitchMode from "./context";

const Reuse = () => {
  return useContext(SwitchMode);
}

export default Reuse;