// components
import { Controls } from './../../components/tableAndGridControls/Controls';

import Avatar from '@mui/material/Avatar';

// css
import styles from './ContactsGrid.module.css';

// icons
import { AiFillIdcard, AiFillMail, AiFillPhone } from 'react-icons/ai';


// function
import { checkLength } from './../../functions/cheackLength';

export const ContactsGridIItem = ({ photo, name, surname, email, phone }) => {

  return (
    <div className={styles.item}>
      <Avatar alt="avatar" src={photo} sx={{ width: 200, height: 200, marginBottom: 2 }} />
      <div className={styles.infobox}>
        <h3><AiFillIdcard /> <span>{checkLength(`${name} ${surname}`)}</span> </h3>
        <h4><AiFillMail /> <a href={`mailto:${email}`}>{checkLength(email)}</a> </h4>
        <h4><AiFillPhone /><a href={`tel:${phone}`}>{checkLength(phone)}</a></h4>
        <Controls styles={{ display: 'flex', justifyContent: 'center' }} />
      </div>
    </div>
  );
};
