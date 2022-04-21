// hooks
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useFetchAllContacts } from './hooks/useFetchAllContacts';

import { Home, ViewContact, CreateContact } from './pages';
import { Header } from './components/header/Header';


function App() {
  let { contacts, getAllCOntacts } = useFetchAllContacts();

  useEffect(() => {
    getAllCOntacts();
  }, []);

  // console.log(contacts);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/viewcontact/:id' element={<ViewContact />} />
        <Route path='/createcontact/:id' element={<CreateContact />} />
      </Routes>

    </div>
  );
}

export default App;
