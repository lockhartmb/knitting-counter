import './App.css';

const App = () => {
  const handleReset = () => {
    document.getElementById('form').reset();
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Knitting counter</h1>
        <form action='' id='form'>
          <label htmlFor='row1'>
            <input id='row1' name='row1' type='checkbox' />
            Row 1
          </label>
          <label htmlFor='row2'>
            <input id='row2' name='row2' type='checkbox' />
            Row 2
          </label>
          <label htmlFor='row3'>
            <input id='row3' name='row3' type='checkbox' />
            Row 3
          </label>
          <label htmlFor='row4'>
            <input id='row4' name='row4' type='checkbox' />
            Row 4
          </label>
          <br />
          <button type='button' onClick={handleReset}>
            Reset
          </button>
        </form>
      </header>
    </div>
  );
};

export default App;
