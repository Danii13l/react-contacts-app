// react
import React from 'react';
// material ui
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
// css
import styles from './filterBar.module.css';

export const ViewInput = ({ changeView }) => {

  return (
    <Box sx={{ manWidth: 120 }} className={styles.input}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          View
        </InputLabel>
        <NativeSelect
          defaultValue={'Table'}
          onChange={changeView}
        >
          <option value={'table'} >Table</option>
          <option value={'grid'} >Grid</option>
        </NativeSelect>
      </FormControl >
    </Box >
  );

};
