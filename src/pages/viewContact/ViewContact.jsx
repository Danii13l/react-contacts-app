// react
import { useEffect } from 'react';
// router
import { useParams } from 'react-router-dom';
// material
import { Avatar } from '@mui/material';
// components
import { Container } from '../../components/container/Container';
import { Loading } from '../../components/loading/Loading';
import { Error } from './../../components/error/Error';
// hooks
import { useGetContact } from './../../hooks/useGetContact';
// css
import styles from './viewContact.module.css';
// date
import { format } from 'date-fns';

export const ViewContact = () => {
  const { id } = useParams();
  const { contact, getContact, error, loading } = useGetContact();

  useEffect(() => {
    getContact(id);
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && <Container>
        <div className={styles.view}>
          <div className={styles.view_info}>
            <h3>Name:<span>{contact.username}</span></h3>
            <h3>Surname:<span>{contact.surname}</span></h3>
            <h3>Phone:<span>{contact.phone}</span></h3>
            <h3>Email:<span>{contact.email}</span></h3>
            <h3>Birthday:<span>{contact.birthday}</span></h3>
            <h3>Category:<span>{contact.category}</span></h3>
            <h3>Added:<span>{format(Date.now(contact.createdAt), 'MM/dd/yyyy')}</span></h3>
          </div>
          <Avatar
            alt="Remy Sharp"
            src={contact.photo}
            sx={{ width: 300, height: 300 }}
            className={styles.ava}
          />
        </div>
      </Container>}


    </>
  );
};


// let result = ;
// console.log(result);
