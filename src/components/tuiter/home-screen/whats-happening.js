import React, {useState} from "react"
import {useDispatch} from "react-redux";
const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    dispatch({type: 'create-tuit',
      tuit: whatsHappening
    });
  }
  return (
    <>
      <textarea value={whatsHappening}
                onChange={(event) =>
                  setWhatsHappening(event.target.value)}>
            </textarea>
      <button onClick={tuitClickHandler}>
        Tuit
      </button>
    </>
  );
}
export default WhatsHappening;
