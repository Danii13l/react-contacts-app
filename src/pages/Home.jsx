import React, { useCallback } from 'react';



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
import { NoContacts } from '../components/noContacts/NoContacts.jsx';

// material ui
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
// axios
import axios from 'axios';


export const ContextHome = React.createContext({});








export const CustomIcons = React.memo(({ count, active, getPaginationNumber }) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        hidePrevButton
        hideNextButton
        renderItem={(item, index) => {
          const { page } = item;
          const obj = { selected: +page === +active && true };

          return (< PaginationItem {...item} {...obj} onClick={getPaginationNumber} />);
        }}
      />
    </Stack>
  );
});

export const Home = () => {

  const [search, setSearch] = React.useState('');
  const [view, setView] = React.useState('table');
  const [page, SetPage] = React.useState(1);
  const [activePage, setActivePage] = React.useState(1);


  const { contacts, getAllCOntacts, error, loading } = useFetchAllContacts();
  const { lengthData, getLength } = useAmountData();


  const deleteContact = useCallback((id) => {
    const lastContactInPage = contacts.length - 1 === 0;
    return async () => {
      await axios.delete(`https://62612279327d3896e2751d49.mockapi.io/Contacts/${id}`);
      getAllCOntacts(search, page);
      if (lastContactInPage) {
        SetPage(lengthData - 1);
        setActivePage(lengthData - 1);
      }
    };
  });


  const changeView = React.useCallback(ev => {
    setView(ev.target.value);
  }, []);

  const handleSearch = React.useCallback((ev) => {
    setSearch(ev.target.value);
  }, []);

  const getPaginationNumber = useCallback((ev) => {
    SetPage(ev.target.textContent);
    setActivePage(ev.target.textContent);
  }, []);

  React.useEffect(() => {
    getLength();
  }, [deleteContact]);

  React.useEffect(() => {
    getAllCOntacts(search, page);
  }, [search, page]);




  return (

    <div className='home'>
      <Container>
        <FilterBar changeView={changeView} handleSearch={handleSearch} />
        <ContextHome.Provider value={{ changeView, handleSearch, deleteContact }}>
          {!error && !loading && view === 'table' ? < ContactsTable data={contacts} /> : view === 'grid' ? <ContactsGrid data={contacts} /> : null}
        </ContextHome.Provider>
        {error && <Error />}
        {contacts.length === 0 && !error && !loading && <NoContacts />}
        {loading && <Loading />}
        {contacts.length !== 0 && !error && !loading && <CustomIcons count={lengthData} active={activePage} getPaginationNumber={getPaginationNumber} />}
      </Container>
    </div>
  );
};
