// react
import React from 'react';
// material ui
import TextField from '@mui/material/TextField';
// css
import styles from './filterBar.module.css';

export const FilterInput = React.memo(({ search }) => {

  const [state, setState] = React.useState('');
  const [emptyInput, setEmptyInput] = React.useState(false);

  const handleIinput = async (ev) => {
    setState(ev.target.value);
  };

  React.useEffect(() => {
    if (state.length > 0) setEmptyInput(true);
    if (state.length === 0 && emptyInput) {
      search(state);
      setEmptyInput(false);
    }
  }, [handleIinput]);


  return (
    <form className={styles.formelements} onSubmit={(e) => {
      e.preventDefault();
      search(state);
    }}>
      <TextField
        id="filled-search"
        label="Search contact"
        type="search"
        variant="filled"
        value={state}
        onChange={handleIinput}
      />
      <button className={styles.buttonSearch} type="submit">
        Search
      </button>
    </form>
  );
});