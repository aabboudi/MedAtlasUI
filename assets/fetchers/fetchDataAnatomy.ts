import axios from 'axios';

// Define types for the data structure
interface Location {
  system: string;
  region: string;
}

export interface ApiResponse {
  _id: string;
  part: string;
  description: string;
  functions: string[];
  related_conditions: string[];
  location: Location;
}

const api_root = "http://89.168.34.148/api/anatomy/";

// Fetch data from the API
const fetchDataAnatomy = async () => {
  try {
    const response = await axios.get(api_root);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchDataAnatomy;
