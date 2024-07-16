import { useContext } from "react";
import { Mycontext } from "./createcontext";

const Headers = () => {
    const { Color,handletoogle } = useContext(Mycontext);

  return (
    <div>
      <button onClick={handletoogle}>Togglebutton</button>
    </div>
  );
};
export default Headers;
