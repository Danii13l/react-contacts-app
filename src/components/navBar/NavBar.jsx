// router
import { Link } from 'react-router-dom';
// components
import { Container } from '../container/Container';
// css
import styles from './navBar.module.css';

export const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <Container>
        <div className={styles.navBar_inner}>
          <Link to="/" className={styles.link}>Home</Link>
          <Link to="/createcontact" className={styles.link}>New contact</Link>
        </div>
      </Container>
    </div>
  );
};
