import {useParams} from "react-router-dom";
import HelloRedux from "./redux/hello/HelloRedux";

const Add = () => {
  const params = useParams();
  let {a, b} = params;
  a = parseInt(a)
  b = parseInt(b)
  return(
    <div>
      <h1>Add</h1>
      {a} + {b} = {a + b}
      <HelloRedux/>
    </div>
  )
}
export default Add
