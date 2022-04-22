// hoocks
import { useEffect } from 'react';
import { useFetchAllContacts } from '../hooks/useFetchAllContacts.js';

// components
import { Loading } from '../components/loading/Loading';
import { Error } from '../components/error/Error';
import { Container } from '../components/container/Container';
import { ContactsTable } from './../layout/contactsTable/ContactsTable';

// import axios from 'axios';
import { ViewBar } from '../components/homeComponents/viewBar/viewBar.jsx';
import { ContactsGrid } from '../layout/contactsGrid/ContactsGrid.jsx';

// redux
import { useSelector } from 'react-redux';




export const Home = () => {

  let { contacts, getAllCOntacts, error, loading } = useFetchAllContacts();

  useEffect(() => {
    getAllCOntacts();
  }, []);


  const { view } = useSelector(({ layoutView }) => layoutView);

  const deleteContact = async (id) => {
    // await axios.delete(`https://62612279327d3896e2751d49.mockapi.io/Contacts/${id}`);
    // getAllCOntacts();
    return true;
  };

  return (

    <div className='home'>
      <Container>
        <ViewBar />
        {error && <Error />}
        {!error && !loading && view === 'table' ? < ContactsTable data={contacts} deleteContact={deleteContact} /> : <ContactsGrid data={contacts} />}
        {loading && <Loading />}
      </Container>
    </div>
  );
};
