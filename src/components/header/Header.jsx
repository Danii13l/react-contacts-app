
// css
import styles from './Header.module.css';

// images
import contact from '../../assets/images/contact.svg';


export const Header = () => {

  return (
    <div className={`${styles.header} content`}>
      <img className={styles.image} src={contact} alt="contact" />
      <h1 className={styles.title}>Write down all your contacts to be in touch with everyone!</h1>
    </div>
  );

};
