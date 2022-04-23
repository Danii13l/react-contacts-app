// react
import React from 'react';

// context
import { ContextHome } from '../../../pages/Home.jsx';

// material ui
import TextField from '@mui/material/TextField';



export const FilterInput = React.memo(() => {
  // const input = useRef();
  const { handleSearch } = React.useContext(ContextHome);
  return (
    <div>
      <TextField
        id="filled-search"
        label="Search contact"
        type="search"
        variant="filled"
        // inputRef={input}
        onChange={handleSearch}
      />
    </div>
  );
});