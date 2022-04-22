// material ui
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';


// redux
import { useDispatch } from 'react-redux';

// actions
import { switchLayoutView } from './../../../redux/ruducersAndActions/layout/layoutViewAction';

// css
import styles from './viewBar.module.css';

export const ViewBarInput = () => {

  const dispatch = useDispatch();

  return (
    <Box sx={{ manWidth: 120 }} className={styles.input}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          View
        </InputLabel>
        <NativeSelect
          defaultValue={'Table'}
        >
          <option value={'table'} onClick={() => dispatch(switchLayoutView('table'))}>Table</option>
          <option value={'grid'} onClick={() => dispatch(switchLayoutView('grid'))}>Grid</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
};
