
// axios
import axios from 'axios';

export const useAddContact = (contact) => {

  const addContact = async (contact) => {
    await axios.post('https://62612279327d3896e2751d49.mockapi.io/Contacts', contact);
  };

  return addContact;
};