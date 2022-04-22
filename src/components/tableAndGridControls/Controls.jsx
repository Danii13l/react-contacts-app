// material ui
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

// icons
import { TiUserDelete, TiEyeOutline, TiEdit } from 'react-icons/ti';

export const Controls = ({ styles }) => {
  return (<>
    <Stack direction="row" spacing={2} style={styles}>
      <IconButton aria-label="delete" color="warning" title="edit contact">
        <TiEdit />
      </IconButton>

      <IconButton aria-label="delete" color="success" title="view contact">
        <TiEyeOutline style={{ fontSize: 30 }} />
      </IconButton>

      <IconButton aria-label="delete" color="error" title="delete contact">
        <TiUserDelete />
      </IconButton>
    </Stack >
  </>);
};