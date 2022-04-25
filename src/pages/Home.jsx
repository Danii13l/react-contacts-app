import React from 'react';

// hoocks
import { useFetchAllContacts } from '../hooks/useFetchAllContacts.js';
import { useAmountData } from './../hooks/useAmountData';

// components
import { Loading } from '../components/loading/Loading';
import { Error } from '../components/error/Error';
import { Container } from '../components/container/Container';
import { ContactsTable } from './../layout/contactsTable/ContactsTable';
import { FilterBar } from '../components/homeComponents/filterBar/FilterBar.jsx';
import { ContactsGrid } from '../layout/contactsGrid/ContactsGrid.jsx';


// material ui
import Pagination from '@mui/material/Pagination';

// axios
import axios from 'axios';

export const ContextHome = React.createContext({});

export const Home = () => {

  const [search, setSearch] = React.useState('');
  const [view, setView] = React.useState('table');
  const [page, SetPage] = React.useState(1);

  let { contacts, getAllCOntacts, error, loading } = useFetchAllContacts();
  let { lengthData, getLength } = useAmountData();


  // насироить при удалении
  React.useEffect(() => {
    getLength();
  }, []);


  React.useEffect(() => {
    getAllCOntacts(search, page);
  }, [search, page]);


  const deleteContact = (id) => {
    return async () => {
      await axios.delete(`https://62612279327d3896e2751d49.mockapi.io/Contacts/${id}`);
      getAllCOntacts(search, page);
    };
  };

  const changeView = React.useCallback(ev => {
    setView(ev.target.value);
  }, [view]);

  const handleSearch = React.useCallback((ev) => {
    setSearch(ev.target.value);
  }, [search]);

  const getPaginationNumber = (ev) => {
    SetPage(ev.target.textContent);
  };


  return (

    <div className='home'>
      <Container>
        <ContextHome.Provider value={{ changeView, handleSearch, deleteContact }}>
          <FilterBar />
          {!error && !loading && view === 'table' ? < ContactsTable data={contacts} /> : view === 'grid' ? <ContactsGrid data={contacts} /> : null}
        </ContextHome.Provider>
        {error && <Error />}
        {contacts.length === 0 && !error && !loading && 'nothing'}
        {loading && <Loading />}
        <Pagination count={lengthData} color="primary" onClick={getPaginationNumber} hidePrevButton hideNextButton sx={{ display: 'flex', justifyContent: 'center', margin: '20px auto' }} />
      </Container>
    </div>
  );
};
