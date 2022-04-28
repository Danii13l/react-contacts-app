// react
import { useState } from 'react';

// axios
import axios from 'axios';

export const useFetchAllContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getAllCOntacts = async (search = '', page = 1) => {
    try {
      setLoading(true);

      let response = await axios.get(`https://62612279327d3896e2751d49.mockapi.io/Contacts?page=${page}&limit=10${search.length > 0 ? `&search=${search}` : ''}`);
      if (response.status > 206) {
        throw new Error('error');
      }
      setContacts(response.data);
    } catch (err) {
      setError(true);
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  };

  return { contacts, getAllCOntacts, error, loading };
};


// .