// react
import React from 'react';
// material ui
import TextField from '@mui/material/TextField';



export const FilterInput = React.memo(({ handleSearch }) => {
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