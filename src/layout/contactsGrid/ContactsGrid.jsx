// components
import { ContactsGridIItem } from './ContactsGridIItem';

// css
import styles from './ContactsGrid.module.css';

export const ContactsGrid = ({ data, deleteContact }) => {
  return (<div className={styles.contactsGrid}>
    {data.map(item => <ContactsGridIItem key={item.id} {...item} deleteContact={deleteContact} />)}
  </div>);
};
