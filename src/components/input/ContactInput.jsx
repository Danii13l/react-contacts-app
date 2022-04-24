// css

import styles from './contactInput.module.css';

export const ContactInput = ({ label, type, name, handleInput }) => {
  return (
    <div>
      <label className={styles.label}><span>{label}</span>
        <input className={styles.input} type={type} name={name} onChange={handleInput} />
      </label>
    </div>
  );
};
