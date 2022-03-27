export const RowInput = ({ setNumOfRows }) => {
  return (
    <form>
      <label htmlFor='numOfRows'>
        Enter number of rows in repeat:{' '}
        <input
          type='number'
          id='numOfrows'
          name='numOfRows'
          onChange={e => setNumOfRows(e.target.value)}
        />
      </label>
    </form>
  );
};
