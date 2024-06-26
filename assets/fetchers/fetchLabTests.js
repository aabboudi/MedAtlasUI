// const axios = require('axios');
import axios from 'axios';

const api_root = "http://89.168.34.148/api/lab_tests/";

const fetchLabTests = async () => {
  try {
    const response = await axios.get(api_root);
    // console.log("######################response######################");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching clinical calculators:', error);
    throw error;
  }
};

// fetchLabTests();
export default fetchLabTests;
