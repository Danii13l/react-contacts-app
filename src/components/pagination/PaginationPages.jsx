// react
import React from 'react';
// material ui
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
// css
import styles from './paginationPage.module.css';

export const PaginationPages = React.memo(({ count, active, getPaginationNumber }) => {
  return (
    <Stack spacing={2} >
      <Pagination
        className={styles.pagination}
        count={count}
        hidePrevButton
        hideNextButton
        renderItem={(item, index) => {
          const { page } = item;
          const obj = { selected: +page === +active && true };
          return (< PaginationItem {...item} {...obj} onClick={getPaginationNumber} />);
        }}
      />
    </Stack>
  );
});