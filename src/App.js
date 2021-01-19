import './App.css';
import Chart from './components/Chart'
import React, {useEffect, useState} from 'react';


const App=()=> {

    const [chart_data, set_chart_data] = useState({

    })

    useEffect(() => {
        
    })
 

  return (
    <div className="App">
      <header className="App-header">
      </header>

      <Chart />

    </div>
  );
}

export default App;
