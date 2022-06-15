/* eslint-disable no-useless-catch */
import axios from 'axios';

export async function requestLogin(username, password) {
  try {
    const response = await axios.post('http://localhost:3001/login', {
      username,
      password
    });
    return response.data;
  }
  catch (err) {
    throw err;
  }
}

export async function requestSignup(emailSignup, passwordSignup, username) {
    try {
      const response = await axios.post('http://localhost:3001/signup', {
        emailSignup,
        passwordSignup,
        username
      });
      return response.data;
    }
    catch (err) {
      throw err;
    }
  }