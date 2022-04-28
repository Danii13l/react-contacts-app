// components
import { ContactInput } from '../input/ContactInput';

// css
import styles from './createAndViewLayout.module.css';

// material ui
import Button from '@mui/material/Button';

// icons
import { FaHammer } from 'react-icons/fa';


// constants
import { inputData } from './../../constants/inputData';


export const InputsBlock = ({ handleInputs, state, sendToServerData, botton }) => {
  return (
    <>
      <form onSubmit={sendToServerData}>
        {inputData.map(input => {
          return <ContactInput key={input.name} {...input} state={state} handleInputs={handleInputs} />;
        })}

        <Button className={styles.button} variant="contained" type="submit">
          {botton === 'edit' ? 'Update' : 'Create'} <FaHammer className={styles.icon} />
        </Button>
      </form>
    </>
  );
};
