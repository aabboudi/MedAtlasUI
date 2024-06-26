import axios from 'axios';

interface Medication {
  id: number;
  name: string;
  description: string;
  // etc
}

const fetchMeds = async (ATCCode: string): Promise<Medication[]> => {
  try {
    const apiUrl = `http://89.168.34.148/api/meds/${ATCCode}`;
    const response = await axios.get<Medication[]>(apiUrl);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response && error.response.status === 404) {
      return [];
    } else {
      console.error('Error fetching medications:', error);
      throw error;
    }
  }
};

export default fetchMeds;
