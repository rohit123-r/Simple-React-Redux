import React from 'react';
import './style.css';

import { useSelector, useDispatch } from 'react-redux';

import { nameProvider } from './action/nameProvider.js';

//import { defaultName } from './action/nameProvider.js';

export default function App() {
  const name = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
    <div> Name : {name}</div>

    <br/>
    <br/>

      <button onClick={() => dispatch(nameProvider("Rohit"))}> Change Name (payload)</button>
      
      <button onClick={()=> dispatch({type: "DEFAULT"})}>Default Name </button>
      
      
      
    </div>
  );
}
