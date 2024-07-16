import { useContext } from "react";
import { Mycontext } from "./createcontext";

const Content = () => {
    const { Color,handletoogle } = useContext(Mycontext);

    return <div style={{ background: Color==="light"?"red":"#fff" ,height:'200px'}}>hi</div>};
export default Content;