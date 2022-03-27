import { Button } from './Button';

export const RowTracker = ({ numOfRows }) => {
  let formInputs = [];

  for (let i = 0; i < numOfRows; i++) {
    formInputs.push(
      <label htmlFor={`row${i + 1}`} key={i}>
        <input id={`row${i + 1}`} name={`row${i + 1}`} type='checkbox' />
        Row {`${i + 1}`}
      </label>
    );
  }

  const handleReset = () => {
    document.getElementById('rowTracker').reset();
  };

  return (
    <form action='' id='rowTracker'>
      {formInputs}

      <br />

      <Button onClick={handleReset} label='Reset' />
    </form>
  );
};
