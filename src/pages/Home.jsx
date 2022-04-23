import React from 'react';

// hoocks
import { useFetchAllContacts } from '../hooks/useFetchAllContacts.js';

// components
import { Loading } from '../components/loading/Loading';
import { Error } from '../components/error/Error';
import { Container } from '../components/container/Container';
import { ContactsTable } from './../layout/contactsTable/ContactsTable';
import { FilterBar } from '../components/homeComponents/filterBar/FilterBar.jsx';
import { ContactsGrid } from '../layout/contactsGrid/ContactsGrid.jsx';

export const ContextHome = React.createContext({});

export const Home = () => {

  let { contacts, getAllCOntacts, error, loading } = useFetchAllContacts();

  const [search, setSearch] = React.useState('');
  const [view, setView] = React.useState('table');

  React.useEffect(() => {
    getAllCOntacts(search);
  }, [search]);

  const deleteContact = async (id) => {
    // await axios.delete(`https://62612279327d3896e2751d49.mockapi.io/Contacts/${id}`);
    // getAllCOntacts();
    return true;
  };

  const changeView = React.useCallback(ev => {
    setView(ev.target.value);
  });

  const handleSearch = React.useCallback((ev) => {
    setSearch(ev.target.value);
  });

  return (

    <div className='home'>
      <Container>
        <ContextHome.Provider value={{ changeView, handleSearch }}>
          <FilterBar />
        </ContextHome.Provider>
        {error && <Error />}
        {!error && !loading && view === 'table' ? < ContactsTable data={contacts} deleteContact={deleteContact} /> : view === 'grid' ? <ContactsGrid data={contacts} /> : null}
        {contacts.length === 0 && !error && !loading && 'nothing'}
        {loading && <Loading />}
      </Container>
    </div>
  );
};
