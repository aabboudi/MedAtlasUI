import axios from 'axios';

interface InputField {
  [key: string]: string;
}

interface OutputField {
  [key: string]: string;
}

interface ClinicalCalculator {
  _id: string;
  code: string;
  name: string;
  description: string;
  input: InputField[];
  output: OutputField;
  formula: string;
}

const api_root = "http://89.168.34.148/api/clinical_calculator/";

// Fetch data from the API
const fetchClinicalCalculators = async (): Promise<ClinicalCalculator[]> => {
  try {
    const response = await axios.get<ClinicalCalculator[]>(api_root);
    return response.data;
  } catch (error) {
    console.error('Error fetching clinical calculators:', error);
    throw error;
  }
};

export default fetchClinicalCalculators;
