import React from 'react';
// material ui
import Avatar from '@mui/material/Avatar';
// css
import styles from './createAndViewLayout.module.css';
// icons
import { MdAddAPhoto } from 'react-icons/md';


export const AvatarBlock = React.memo(({ preview, handleFileInput }) => {
  return (
    <div>
      <Avatar
        className={styles.avatar}
        alt="Remy Sharp"
        src={preview}
      />
      <input className={styles.filelinput} type="file" name='photo' accept='image/*' onChange={handleFileInput} id="file" />
      <label className={styles.filelabel} htmlFor='file' onChange={handleFileInput}>
        Add <MdAddAPhoto />
      </label>
    </div>
  );
}
); 