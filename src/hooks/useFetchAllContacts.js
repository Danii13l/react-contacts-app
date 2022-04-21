// react
import { useState } from 'react';

// axios
import axios from 'axios';

export const useFetchAllContacts = () => {
  const [contacts, setContacts] = useState([]);

  const getAllCOntacts = () => {
    try {
      axios.get('https://62612279327d3896e2751d49.mockapi.io/Contacts').then(({ data }) => setContacts(data));
    } catch (err) {
      return [];
    }
  };

  return { contacts, getAllCOntacts };
};