import './App.css';
import {increaseValue,decrementValue} from './redux/action';
import { useSelector,useDispatch } from 'react-redux';
import { React } from 'react';
import Alert from './Alert';

function App() {
  const state=useSelector(state=>state.ourState.count)
  const disPatch=useDispatch()
  return (
    <div className="App">
       <Alert/>
         <p>Counter:{state}</p>
        <button onClick={()=>disPatch(increaseValue())}>Increment</button>
        <button onClick={()=>disPatch(decrementValue())}>Decrement</button>
    </div>
  );
}

export default App;
