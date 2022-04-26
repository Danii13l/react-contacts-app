// react
import React from 'react';

// components
import { ViewInput } from './ViewInput';
import { FilterInput } from './FilterInput';


// css
import styles from './filterBar.module.css';


export const FilterBar = React.memo(({ changeView, handleSearch }) => {


  return (
    <div className={styles.viewBar} >
      <h2>All your contacts</h2>
      <FilterInput handleSearch={handleSearch} />
      <ViewInput changeView={changeView} />
    </div >
  );
}
); 
