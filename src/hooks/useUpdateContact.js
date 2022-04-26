// react
import { useState } from 'react';

// axios
import axios from 'axios';

// router
import { useNavigate } from 'react-router-dom';

export const useUpdateContact = () => {
  const navigate = useNavigate();
  const [errorUpdata, setError] = useState(false);

  const updateContact = async (id, contact) => {
    try {
      let response = await axios.put(`https://62612279327d3896e2751d49.mockapi.io/Contacts/${id}`, contact);
      if (response.status > 206) {
        throw new Error('error');
      } else navigate('/home', { replace: true });

    } catch (err) {
      setError(true);
    }
  };

  return { updateContact, errorUpdata };
};
