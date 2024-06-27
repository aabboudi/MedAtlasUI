const axios = require('axios');

const loginData = {
  username: 'Test',
  password: 'Test',
};

const signupData = {
  username: 'John',
  password: 'password',
  email: 'newemail@email.com'
};

// axios.post('http://89.168.34.148/signup', signupData)
//   .then(response => {
//     console.log('Response:', response.data);
//     // Handle response data as needed
//   })
//   .catch(error => {
//     console.error('Error:', error);
//     // Handle error
//   });

const test = () => {
  axios.post('http://89.168.34.148/login', loginData)
  .then(response => {
    console.log('Response:', response.data);
    // Handle response data as needed
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle error
  });
}
console.log("Nothing");

test();
