// react
import React from 'react';

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

// icons
import { AiOutlineReload } from 'react-icons/ai';

// css
import styles from './viewBar.module.css';
import { ViewBarInput } from './ViewBarInput';



export const ViewBar = React.memo(() => {

  return (
    <div className={styles.viewBar} >
      <h2>All your contacts</h2>

      <Stack direction="row" spacing={1} className={styles.inputbox}>
        <IconButton aria-label="update" >
          <AiOutlineReload style={{ fill: '#123c69' }} />
        </IconButton>
        <ViewBarInput />
      </Stack>

    </div >
  );
}
); 