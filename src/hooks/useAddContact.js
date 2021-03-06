
// react
import { useState } from 'react';

// axios
import axios from 'axios';

// router
import { useNavigate } from 'react-router-dom';

export const useAddContact = () => {
  const navigate = useNavigate();
  const [errorAdd, setError] = useState(false);

  const addContact = async (contact) => {
    try {
      let response = await axios.post('https://62612279327d3896e2751d49.mockapi.io/Contacts', contact);

      if (response.status > 206) {
        throw new Error('error');
      } else navigate('/home', { replace: true });

    } catch (err) {
      setError(true);
    }
  };

  return { addContact, errorAdd };
};
