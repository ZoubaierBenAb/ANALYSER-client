import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const getTransactions = async (page, pageSize, sort, search) => {
  try {
    const response = await axios.get(`${BASE_URL}/client/transactions`, {
      params: { page, pageSize, sort, search },
    });

    return response.data;
  } catch (error) {
   
    throw new Error('Failed to fetch transactions.');
  }
};

//not used