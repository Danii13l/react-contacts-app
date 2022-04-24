// material ui
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

// icons
import { TiUserDelete, TiEyeOutline, TiEdit } from 'react-icons/ti';
import { Link } from 'react-router-dom';

export const Controls = ({ id, styles, deleteContact }) => {
  return (<>
    <Stack direction="row" spacing={2} style={styles}>
      <IconButton aria-label="delete" color="warning" title="edit contact">
        <TiEdit />
      </IconButton>

      <IconButton aria-label="delete" color="success" title="view contact">
        <Link to={`/viewcontact/${id}`} ><TiEyeOutline style={{ fontSize: 30, color: 'darkgreen' }} /></Link>
      </IconButton>

      <IconButton aria-label="delete" color="error" title="delete contact" onClick={deleteContact}>
        <TiUserDelete />
      </IconButton>
    </Stack >
  </>);
};