// react
import { useContext } from 'react';
// icons
import { TiUserDelete, TiEyeOutline, TiEdit } from 'react-icons/ti';
// router
import { Link } from 'react-router-dom';
// css
import styles from './controls.module.css';
// context
import { ContextHome } from './../../pages/Home';

export const Controls = ({ id, center }) => {
  const { deleteContact } = useContext(ContextHome);

  return (<>
    <div direction="row" spacing={2} className={`${styles.controlsBox} ${center && styles.center}`}>
      <button className={styles.button} title="edit contact">
        <Link className={styles.links} to={`/editcontact/${id}`}  ><TiEdit /></Link>
      </button>
      <button className={styles.button} title="view contact">
        <Link className={styles.links} to={`/viewcontact/${id}`}  ><TiEyeOutline /></Link>
      </button>
      <button className={`${styles.links} ${styles.button}`} onClick={deleteContact(id)} title="delete contact"> <TiUserDelete /></button>
    </div >
  </>);
};