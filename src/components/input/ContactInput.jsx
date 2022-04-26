// css

import styles from './contactInput.module.css';

export const ContactInput = ({ label, type, name, handleInputs, state }) => {
  return (
    <>
      <label className={styles.label}><span>{label}</span>
        <input className={styles.input} type={type} name={name} value={state[name]} onChange={handleInputs} required />
      </label>
    </>
  );
};
