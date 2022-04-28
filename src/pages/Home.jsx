// react
import React, { useCallback } from 'react';
// hoocks
import { useFetchAllContacts } from '../hooks/useFetchAllContacts.js';
import { useAmountData } from './../hooks/useAmountData';
// components
import { Loading } from '../components/loading/Loading';
import { Error } from '../components/error/Error';
import { Container } from '../components/container/Container';
import { ContactsTable } from './../layout/contactsTable/ContactsTable';
import { FilterBar } from '../components/filterBar/FilterBar.jsx';
import { ContactsGrid } from '../layout/contactsGrid/ContactsGrid.jsx';
import { NoContacts } from '../components/noContacts/NoContacts.jsx';
import { PaginationPages } from './../components/pagination/PaginationPages';

// axios
import axios from 'axios';

export const ContextHome = React.createContext({});

export const Home = () => {
  const [view, setView] = React.useState('table');
  const [page, SetPage] = React.useState(1);
  const [activePage, setActivePage] = React.useState(1);

  const { contacts, getAllCOntacts, error, loading } = useFetchAllContacts();
  const { lengthData, getLength } = useAmountData();

  // delete contact
  const deleteContact = useCallback((id) => {
    const lastContactInPage = contacts.length - 1 === 0;
    return async () => {
      await axios.delete(`https://62612279327d3896e2751d49.mockapi.io/Contacts/${id}`);
      getAllCOntacts(page);
      if (lastContactInPage) {
        SetPage(lengthData - 1);
        setActivePage(lengthData - 1);
      }
    };
  });

  // change view of contacts to table or grid
  const changeView = React.useCallback(ev => {
    setView(ev.target.value);
  }, []);

  // get contact by input value
  const search = React.useCallback((val) => {
    getAllCOntacts(val);
  }, []);

  // change page
  const getPaginationNumber = useCallback((ev) => {
    SetPage(ev.target.textContent);
    setActivePage(ev.target.textContent);
  }, []);

  React.useEffect(() => {
    getLength();
  }, [deleteContact]);

  React.useEffect(() => {
    getAllCOntacts('', page);
  }, [page]);

  return (
    <div className='home'>
      <Container>
        <FilterBar changeView={changeView} search={search} />
        <ContextHome.Provider value={{ changeView, deleteContact }}>
          {!error && !loading && view === 'table' ? < ContactsTable data={contacts} /> : view === 'grid' ? <ContactsGrid data={contacts} /> : null}
        </ContextHome.Provider>
        {error && <Error />}
        {(lengthData === 0 || contacts.length === 0) && !error && !loading && <NoContacts />}
        {loading && <Loading />}
        {(lengthData !== 0 && contacts.length !== 0) && !error && !loading && <PaginationPages count={lengthData} active={activePage} getPaginationNumber={getPaginationNumber} />}
      </Container>
    </div>
  );
};
