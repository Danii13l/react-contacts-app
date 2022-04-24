// react
import { useState } from 'react';
// axios
import axios from 'axios';

export const useAmountData = () => {
  const [lengthData, setLengthData] = useState(0);

  const getLength = async () => {
    const response = await axios.get('https://62612279327d3896e2751d49.mockapi.io/Contacts');
    setLengthData(Math.ceil(response.data.length / 10));
  };

  return { lengthData, getLength };
};