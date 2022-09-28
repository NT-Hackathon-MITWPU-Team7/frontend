import React from 'react';
import './App.css';
import Linechart from './components/Linechart';
import {useEffect} from 'react';


function App() {

  useEffect(() =>{
    fetch('Exchange_Rate_Report_2012.csv')
    .then(response => response.json())
    .then(json => console.log("json"))
  },[])

  return (
    <div className="App" style={{width:'800px', height:'800px'}}>
      <div className="chart">
      < Linechart/>
      </div>
    </div>
  );
}

export default App;