// react
import { useState } from 'react';

// axios
import axios from 'axios';

export const useGetContact = () => {
  const [contact, setContact] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const getContact = async (id) => {
    try {
      setLoading(true);

      let response = await axios.get(`https://62612279327d3896e2751d49.mockapi.io/Contacts/${id}`);
      if (response.status > 206) {
        throw new Error('error');
      }
      setContact(response.data);
    } catch (err) {
      setError(true);
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  };

  return { contact, getContact, error, loading };
};
