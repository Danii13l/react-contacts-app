
import styles from './Loading.module.css';

export const Loading = () => {
  return (
    <div className={`${styles.container} content`}>
      <div className={`${styles.dash} ${styles.uno}`}></div>
      <div className={`${styles.dash} ${styles.dos}`}></div>
      <div className={`${styles.dash} ${styles.tres}`}></div>
      <div className={`${styles.dash} ${styles.cuatro}`}></div>
    </div>
  );
};

