
// css
import styles from './Header.module.css';

// images
import contact from '../../assets/images/contact.svg';


// aos animation library
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Container } from '@mui/material';

AOS.init();

export const Header = () => {

  return (
    <div className={`${styles.header}`} >
      <Container>
        <div className={`${styles.header_inner}`}>
          <img className={styles.image} src={contact} alt="contact" />
          <h1 className={styles.title} > Write down all your contacts to be in touch with everyone!
            <span>name</span>
            <span>email</span>
            <span>phone</span>
            <span>surname</span>
          </h1 >
        </div>
      </Container>
    </div >
  );

};
