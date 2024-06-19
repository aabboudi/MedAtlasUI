import axios from 'axios';

interface Medication {
  id: number;
  name: string;
  description: string;
  // Add more fields as per your API response structure
}

const medsFetcher = async (ATCCode: string): Promise<Medication[]> => {
  try {
    // Replace with your actual API endpoint URL
    const apiUrl = `http://89.168.34.148/api/meds/${ATCCode}`;
    const response = await axios.get(apiUrl);
    return response.data; // Assuming response.data is an array of medications
  } catch (error) {
    console.error('Error fetching medications:', error);
    throw error; // Propagate the error to handle in the component
  }
};

export default medsFetcher;
