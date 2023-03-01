import './App.css';
import {showAlert,hideAlert} from './redux/action';
import { useSelector,useDispatch } from 'react-redux';
import { React } from 'react';
function Alert() {
  const state=useSelector(state=>state.ourState.alert)
  const disPatch=useDispatch()
  return (
    <div className="App">
        <button onClick={() => {if(window.confirm('Open')){disPatch(hideAlert())};}} >Alert</button>
    </div>
  );
}

export default Alert;
