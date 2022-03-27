import { useState } from 'react';
import './App.css';
import { RowInput } from './components/RowInput';
import { RowTracker } from './components/RowTracker';

const App = () => {
  const [numOfRows, setNumOfRows] = useState(0);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Knitting counter</h1>
        <RowInput setNumOfRows={setNumOfRows} />
        <RowTracker numOfRows={numOfRows} />
      </header>
    </div>
  );
};

export default App;
