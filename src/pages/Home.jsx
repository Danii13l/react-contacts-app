// hoocks
import { useEffect } from 'react';
import { useFetchAllContacts } from '../hooks/useFetchAllContacts.js';

// components
import { Loading } from '../components/loading/Loading';
import { Error } from '../components/error/Error';
import { Container } from '../components/container/Container.jsx';


export const Home = () => {

  let { contacts, getAllCOntacts, error, loading } = useFetchAllContacts();

  useEffect(() => {
    setTimeout(() => getAllCOntacts(), 30000);
  }, []);

  return (

    <div className='home'>
      <Container>
        {error && <Error />}
        {!error && JSON.stringify(contacts)}
        {loading && <Loading />}
      </Container>
    </div>
  );
};
