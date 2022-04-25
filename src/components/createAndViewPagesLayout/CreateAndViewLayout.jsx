// components
import { Container } from '../container/Container';
import { ContactInput } from '../input/ContactInput';

// material ui
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

// css
import styles from './createAndViewLayout.module.css';

// images
import create from '../../assets/images/create.jpg';
import view from '../../assets/images/view.jpg';
// icons
import { FaHammer } from 'react-icons/fa';
import { MdAddAPhoto } from 'react-icons/md';

// переместить в const
const inputData = [
  { label: 'Name', name: 'username', type: 'text' },
  { label: 'Surname', name: 'surname', type: 'text' },
  { label: 'Phone', name: 'phone', type: 'tel' },
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'Category', name: 'category', type: 'text' },
  { label: 'Birthday', name: 'birthday', type: 'text' },
];



export const CreateAndViewLayout = ({ title, fontPicture, page, state, addContact, handleFileInput, preview }) => {
  return (
    <Container>
      <div className={styles.inner} >

        <div className={styles.info}>
          <h2>{title}</h2>
          <img src={fontPicture === 'create' ? create : view} alt="new contact" />
        </div>

        <div className={styles.inputbox}>
          <div>
            {inputData.map(input => {
              return <ContactInput key={input.name} {...input} />;
            })}

            <Button className={styles.button} variant="contained" onClick={() => addContact(state)}>
              Create <FaHammer className={styles.icon} />
            </Button>
          </div>
          <div>
            <Avatar
              className={styles.avatar}
              alt="Remy Sharp"
              src={preview}
            />
            <input className={styles.filelinput} type="file" name='photo' accept='image/*' onChange={handleFileInput} id="file" />
            <label className={styles.filelabel} htmlFor='file'>
              Add <MdAddAPhoto />
            </label>
          </div>

        </div>

      </div>
    </Container>
  );
};
