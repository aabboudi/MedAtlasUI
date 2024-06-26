const axios = require('axios');

const postData = {
  username: 'John',
  password: 'password',
  // email: 'newemail@email.com'
};

// axios.post('http://127.0.0.1:8000/signup', postData)
//   .then(response => {
//     console.log('Response:', response.data);
//     // Handle response data as needed
//   })
//   .catch(error => {
//     console.error('Error:', error);
//     // Handle error
//   });

axios.post('http://127.0.0.1:8000/login', postData)
  .then(response => {
    console.log('Response:', response.data);
    // Handle response data as needed
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle error
  });
