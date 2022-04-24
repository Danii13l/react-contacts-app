// react
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// components
import { Container } from '../../components/container/Container';

// hooks
import { useGetContact } from './../../hooks/useGetContact';

export const ViewContact = () => {

  const { id } = useParams();
  const { contact, getContact, error, loading } = useGetContact();

  useEffect(() => {
    getContact(id);
  }, []);


  console.log(contact);
  return (
    <div>
      <Container>
        <div>
          <div>
            <h3>Name:<span>{contact.username}</span></h3>
            <h3>Surname:<span>{contact.surname}</span></h3>
            <h3>Phone:<span>name</span></h3>
            <h3>Email:<span>name</span></h3>
            <h3>Birthday:<span>name</span></h3>
            <h3>Category:<span>name</span></h3>
            <h3>Added:<span>name</span></h3>
          </div>
          <div>
            <img src={contact.photo} alt='avatar' />
          </div>
        </div>
      </Container>
    </div>
  );
};