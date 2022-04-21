
import { MdSyncProblem } from 'react-icons/md';

import styles from './Error.module.css';

export const Error = () => {
  return (
    <div className={styles.error}>
      <MdSyncProblem className={styles.img} />
      <h2 className={styles.title}>Sorry,we are experencing me problems,we could not get your contacts </h2>
    </div>

  );
};
