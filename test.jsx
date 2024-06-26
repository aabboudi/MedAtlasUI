const axios = require('axios');

const loginData = {
  username: 'John',
  password: 'password',
};

const signupData = {
  username: 'John',
  password: 'password',
  email: 'newemail@email.com'
};

// axios.post('http://127.0.0.1:8000/signup', signupData)
//   .then(response => {
//     console.log('Response:', response.data);
//     // Handle response data as needed
//   })
//   .catch(error => {
//     console.error('Error:', error);
//     // Handle error
//   });

const test = () => {
  axios.post('http://127.0.0.1:8000/login', loginData)
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
